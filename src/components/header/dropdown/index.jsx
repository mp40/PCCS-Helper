import React from "react";
import PropTypes from "prop-types";

import HeaderProfile from "../profile";

import styles from "./styles.module.css";

const HeaderDropdown = ({
  handleShowSignUp,
  handleShowSignIn,
  handleSignOut,
  signedIn,
}) => {
  return (
    <div className={styles.wrapper}>
      <HeaderProfile
        handleShowSignUp={handleShowSignUp}
        handleShowSignIn={handleShowSignIn}
        handleSignOut={handleSignOut}
        signedIn={signedIn}
      />
    </div>
  );
};

HeaderDropdown.propTypes = {
  handleShowSignUp: PropTypes.func.isRequired,
  handleShowSignIn: PropTypes.func.isRequired,
  handleSignOut: PropTypes.func.isRequired,
  signedIn: PropTypes.bool.isRequired,
};

export default HeaderDropdown;
