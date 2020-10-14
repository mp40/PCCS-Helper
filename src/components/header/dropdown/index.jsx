import React from "react";
import PropTypes from "prop-types";

import HeaderProfile from "../profile";

import styles from "./styles.module.css";

const HeaderDropdown = ({ handleShowSignUp, handleShowSignIn }) => {
  return (
    <div className={styles.wrapper}>
      <HeaderProfile
        handleShowSignUp={handleShowSignUp}
        handleShowSignIn={handleShowSignIn}
      />
    </div>
  );
};

HeaderDropdown.propTypes = {
  handleShowSignUp: PropTypes.func.isRequired,
  handleShowSignIn: PropTypes.func.isRequired,
};

export default HeaderDropdown;
