import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import HeaderButtons from './buttons';
import HeaderModal from './modal';
import HeaderDropdown from './dropdown';

import Print from './print';
import Save from './save';

import { fetchSignup, fetchSignin, fetchSignOut } from '../../fetch';

import './header.css';

const Header = (
  { currentView,
    totalWeight,
    signedIn,
    handleSetSignedIn,
    selectCurrentView,
    updateSavedCharacters },
) => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const handleShowSignUp = () => {
    setShowSignIn(false);
    setShowSignUp(!showSignUp);
  };

  const handleShowSignIn = () => {
    setShowSignUp(false);
    setShowSignIn(!showSignIn);
  };

  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSignupUser = async (user) => {
    const res = await fetchSignup(user);

    if (res.error) {
      return;
    }

    setShowSignUp(false);
  };

  const handleSigninUser = async (user) => {
    const res = await fetchSignin(user);

    if (res.error) {
      return;
    }

    sessionStorage.setItem('savedCharacters', JSON.stringify(res.characters));

    updateSavedCharacters(res.characters);

    setShowDropdown(false);
    setShowSignIn(false);
    handleSetSignedIn();
  };

  const handleSignOut = async () => {
    const res = await fetchSignOut();

    if (res.message === 'Cookie Cleared') {
      sessionStorage.removeItem('savedCharacters');
      handleSetSignedIn();
    }
  };

  return (
    <div className="menuBar">
      <div>PCCS</div>
      {currentView === 'createChar' && (
        <div className="wrapper">
          <Print selectCurrentView={selectCurrentView} />
          <Save
            signedIn={signedIn}
          />
        </div>
      )}

      <HeaderButtons
        handleShowSignUp={handleShowSignUp}
        handleShowSignIn={handleShowSignIn}
        handleShowDropdown={handleShowDropdown}
        handleSignOut={handleSignOut}
        width={width}
        signedIn={signedIn}
      />

      {showDropdown && (
        <HeaderDropdown
          handleShowSignUp={handleShowSignUp}
          handleShowSignIn={handleShowSignIn}
          handleSignOut={handleSignOut}
          signedIn={signedIn}
        />
      )}

      {showSignUp && (
        <HeaderModal
          type="signup"
          handleShowModal={handleShowSignUp}
          handleSwitchModal={handleShowSignIn}
          handleSubmitUser={handleSignupUser}
        />
      )}
      {showSignIn && (
        <HeaderModal
          type="signin"
          handleShowModal={handleShowSignIn}
          handleSwitchModal={handleShowSignUp}
          handleSubmitUser={handleSigninUser}
        />
      )}
    </div>
  );
};

Header.propTypes = {
  totalWeight: PropTypes.number,
  currentView: PropTypes.string,
  signedIn: PropTypes.bool.isRequired,
  handleSetSignedIn: PropTypes.func.isRequired,
  selectCurrentView: PropTypes.func.isRequired,
  updateSavedCharacters: PropTypes.func.isRequired,
};

export default Header;
