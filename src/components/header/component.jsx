import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import HeaderCreateCharacter from "./create_character";
import HeaderButtons from "./buttons";
import HeaderModal from "./modal";
import HeaderDropdown from "./dropdown";

import Print from "../Print";

import "./header.css";

const Header = ({ currentView, totalWeight }) => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
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
      />

      {showDropdown && (
        <HeaderDropdown
          handleShowSignUp={handleShowSignUp}
          handleShowSignIn={handleShowSignIn}
        />
      )}

      {showSignUp && (
        <HeaderModal
          type='signup'
          handleShowModal={handleShowSignUp}
          handleSwitchModal={handleShowSignIn}
          handleSubmitUser={() => {}}
        />
      )}
      {showSignIn && (
        <HeaderModal
          type='signin'
          handleShowModal={handleShowSignIn}
          handleSwitchModal={handleShowSignUp}
          handleSubmitUser={() => {}}
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
