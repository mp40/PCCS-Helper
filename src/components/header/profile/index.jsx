import React from "react";
import PropTypes from "prop-types";

const HeaderProfile = ({
  handleShowSignUp,
  handleShowSignIn,
  handleSignOut,
  signedIn,
}) => {
  return (
    <>
      {signedIn && (
        <button
          type='button'
          onClick={() => {
            handleSignOut();
          }}
        >
          Sign Out
        </button>
      )}
      {!signedIn && (
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
      )}
    </>
  );
};

HeaderProfile.propTypes = {
  handleShowSignUp: PropTypes.func.isRequired,
  handleShowSignIn: PropTypes.func.isRequired,
  handleSignOut: PropTypes.func.isRequired,
  signedIn: PropTypes.bool.isRequired,
};

export default HeaderProfile;
