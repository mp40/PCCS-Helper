import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import HeaderCreateCharacter from "./create_character";
import HeaderButtons from "./buttons";
import HeaderModal from "./modal";
import HeaderDropdown from "./dropdown";

import Print from "../Print";

import { fetchSignup, fetchSignin } from "../../fetch";

import "./header.css";

const Header = ({ currentView, totalWeight }) => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
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

    setShowDropdown(false);
    setShowSignIn(false);
    setSignedIn(!signedIn);
  };

  return (
    <div className='menuBar'>
      <div>PCCS</div>
      {currentView === "createChar" && (
        <div className='wrapper'>
          <HeaderCreateCharacter totalWeight={totalWeight} />
          <Print />
        </div>
      )}

      <HeaderButtons
        handleShowSignUp={handleShowSignUp}
        handleShowSignIn={handleShowSignIn}
        handleShowDropdown={handleShowDropdown}
        width={width}
        signedIn={signedIn}
      />

      {showDropdown && (
        <HeaderDropdown
          handleShowSignUp={handleShowSignUp}
          handleShowSignIn={handleShowSignIn}
          signedIn={signedIn}
        />
      )}

      {showSignUp && (
        <HeaderModal
          type='signup'
          handleShowModal={handleShowSignUp}
          handleSwitchModal={handleShowSignIn}
          handleSubmitUser={handleSignupUser}
        />
      )}
      {showSignIn && (
        <HeaderModal
          type='signin'
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
};

export default Header;
