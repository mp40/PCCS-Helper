import React, { useState } from "react";
import PropTypes from "prop-types";

import HeaderCreateCharacter from "./createCharacter";
import HeaderButtons from "./buttons";
import HeaderModal from "./modal";

import Print from "../Print";

import "./header.css";

const Header = ({ currentView, totalWeight }) => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const handleShowSignUp = () => {
    setShowSignIn(false);
    setShowSignUp(!showSignUp);
  };

  const handleShowSignIn = () => {
    setShowSignUp(false);
    setShowSignIn(!showSignIn);
  };

  return (
    <div className='menuBar'>
      <div className='menuTitle'>PCCS</div>
      <HeaderButtons
        handleShowSignUp={handleShowSignUp}
        handleShowSignIn={handleShowSignIn}
      />
      {currentView === "createChar" && (
        <div>
          <HeaderCreateCharacter totalWeight={totalWeight} />
          <Print />
        </div>
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
