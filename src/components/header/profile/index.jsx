import React from "react";
import PropTypes from "prop-types";

const HeaderProfile = ({ handleShowSignUp, handleShowSignIn }) => {
  return (
    <>
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
    </>
  );
};

HeaderProfile.propTypes = {
  handleShowSignUp: PropTypes.func.isRequired,
  handleShowSignIn: PropTypes.func.isRequired,
};

export default HeaderProfile;
