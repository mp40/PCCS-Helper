import React from "react";
import PropTypes from "prop-types";

const HeaderButtons = ({ handleShowSignUp, handleShowSignIn }) => {
  return (
    <div className='buttons'>
      <button
        type='button'
        onClick={() => {
          handleShowSignUp();
        }}
      >
        Sign Up
      </button>
      <button
        type='button'
        onClick={() => {
          handleShowSignIn();
        }}
      >
        Sign In
      </button>
    </div>
  );
};

HeaderButtons.propTypes = {
  handleShowSignUp: PropTypes.func.isRequired,
  handleShowSignIn: PropTypes.func.isRequired,
};

export default HeaderButtons;
