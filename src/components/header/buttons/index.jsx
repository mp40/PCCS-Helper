import React from "react";
import PropTypes from "prop-types";

import HeaderProfile from "../profile";

import styles from "./styles.module.css";

const HeaderButtons = ({
  handleShowSignUp,
  handleShowSignIn,
  handleShowDropdown,
  handleSignOut,
  width,
  signedIn,
}) => {
  const breakpoint = 800;

  return (
    <div className={styles.buttons}>
      {width < breakpoint && (
        <button
          className={styles.burger}
          type='button'
          onClick={() => handleShowDropdown()}
        />
      )}
      {width >= breakpoint && (
        <HeaderProfile
          handleShowSignUp={handleShowSignUp}
          handleShowSignIn={handleShowSignIn}
          handleSignOut={handleSignOut}
          signedIn={signedIn}
        />
      )}
    </div>
  );
};

HeaderButtons.propTypes = {
  handleShowSignUp: PropTypes.func.isRequired,
  handleShowSignIn: PropTypes.func.isRequired,
  handleShowDropdown: PropTypes.func.isRequired,
  handleSignOut: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  signedIn: PropTypes.bool.isRequired,
};

export default HeaderButtons;
