import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import HeaderButtons from './buttons';
import HeaderModal from './modal';
import HeaderDropdown from './dropdown';

import { fetchSignup, fetchSignin, fetchSignOut, fetchResetPassword } from '../../fetch';

import './header.css';

const SIGNUP = 'signup';
const SIGNIN = 'signin';
const RESET = 'reset';

const Header = (
  { signedIn,
    handleSetSignedIn,
    updateSavedCharacters },
) => {
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const handleSwitchModal = (newModal) => {
    setErrorMsg(null);
    setShowModal(newModal);
  };

  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSignupUser = async (user) => {
    const res = await fetchSignup(user);

    if (res.error) {
      setErrorMsg(res.message);
      return;
    }

    setShowModal(false);
  };

  const handleSigninUser = async (user) => {
    const res = await fetchSignin(user);

    if (res.error) {
      setErrorMsg(res.message);
      return;
    }

    sessionStorage.setItem('savedCharacters', JSON.stringify(res.characters));

    updateSavedCharacters(res.characters);

    setShowDropdown(false);
    setShowModal(false);
    handleSetSignedIn();
  };

  const handleSignOut = async () => {
    const res = await fetchSignOut();

    if (res.message === 'Cookie Cleared') {
      sessionStorage.removeItem('savedCharacters');
      handleSetSignedIn();
    }
  };

  const handleResetPassword = async (userEmail) => {
    // mptodo errors
    const res = await fetchResetPassword(userEmail); // <- test coverage
  };

  return (
    <div className="menuBar">
      <div>PCCS</div>

      <HeaderButtons
        handleShowSignUp={() => handleSwitchModal(SIGNUP)}
        handleShowSignIn={() => handleSwitchModal(SIGNIN)}
        handleShowDropdown={handleShowDropdown}
        handleSignOut={handleSignOut}
        width={width}
        signedIn={signedIn}
      />

      {showDropdown && (
        <HeaderDropdown
          handleShowSignUp={() => handleSwitchModal(SIGNUP)} // <- test coverage
          handleShowSignIn={() => handleSwitchModal(SIGNIN)} // <- test coverage
          handleSignOut={handleSignOut}
          signedIn={signedIn}
        />
      )}

      {showModal === SIGNUP && (
        <HeaderModal
          type={showModal}
          handleShowModal={() => setShowModal(false)}
          handleSwitchModal={() => handleSwitchModal(SIGNIN)}
          handleSubmitUser={handleSignupUser}
          errorMsg={errorMsg}
        />
      )}
      {showModal === SIGNIN && (
        <HeaderModal
          type={showModal}
          handleShowModal={() => setShowModal(false)}
          handleSwitchModal={() => handleSwitchModal(SIGNUP)}
          handleSubmitUser={handleSigninUser}
          handleResetPassword={() => handleSwitchModal(RESET)}
          errorMsg={errorMsg}
        />
      )}
      {showModal === RESET && (
      <HeaderModal
        type={showModal}
        handleShowModal={() => setShowModal(false)}
        handleSwitchModal={() => handleSwitchModal(SIGNIN)}
        handleSubmitUser={handleResetPassword}
        errorMsg={errorMsg}
      />
      )}
    </div>
  );
};

Header.propTypes = {
  signedIn: PropTypes.bool.isRequired,
  handleSetSignedIn: PropTypes.func.isRequired,
  updateSavedCharacters: PropTypes.func.isRequired,
};

export default Header;
