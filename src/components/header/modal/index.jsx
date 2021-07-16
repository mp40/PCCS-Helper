import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

import text from './data';

const HeaderModal = ({
  type,
  handleShowModal,
  handleSubmitUser,
  handleSwitchModal,
  handleResetPassword,
  errorMsg,
}) => {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const setUserEmail = (value) => {
    setUserDetails({ ...userDetails, ...{ email: value } });
  };

  const setUserPassword = (value) => {
    setUserDetails({ ...userDetails, ...{ password: value } });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      userDetails.email.trim().length === 0
      || !userDetails.email.includes('@')
    ) {
      setErrors({ ...errors, ...{ email: true } });
      return;
    }

    if (type === 'reset') {
      handleSubmitUser(userDetails.email);
      return;
    }

    if (userDetails.password.trim().length < 6) {
      // mptodo validate no bad patterns here
      setErrors({ ...errors, ...{ password: true } });
      return;
    }

    handleSubmitUser(userDetails);
  };

  return (
    <>
      <div className="modal-background" />
      <div className={`${styles.card} ${styles[type]}`}>
        <button
          aria-label="close"
          className={styles.close}
          type="button"
          onClick={() => handleShowModal()}
        />
        <div>{text[type].title}</div>
        <form className={styles.form} onSubmit={(event) => handleSubmit(event)}>
          <label htmlFor="email">
            <span className={errors.email ? styles.error : ''}>
              {text.label.email}
            </span>
            {errors.email && (
              <p className={styles.errorMessage}>{text.errors.email}</p>
            )}
            <input
              id="email"
              type="email"
              value={userDetails.email}
              onChange={(event) => setUserEmail(event.target.value)}
            />
          </label>

          <label htmlFor="password">
            <span className={errors.password ? styles.error : ''}>
              {text.label.password}
            </span>
            <span>
              {errors.password && (
                <p className={styles.errorMessage}>{text.errors.password}</p>
              )}
            </span>
            <input
              id="password"
              type="password"
              value={userDetails.password}
              onChange={(event) => setUserPassword(event.target.value)}
            />
          </label>

          {errorMsg
          && <p className={styles.errorMessage}>{errorMsg}</p>}

          {errorMsg && type === 'signin'
          && (
          <button
            type="button"
            className={styles.forgotPassword}
            onClick={() => {
              handleResetPassword();
            }}
          >
            Forgot Password?
          </button>
          )}

          <input type="submit" value={text[type].title} />
        </form>
        <button
          className={styles.switchModal}
          type="button"
          onClick={() => {
            handleSwitchModal();
          }}
        >
          {text[type].button}
        </button>
      </div>
    </>
  );
};

HeaderModal.propTypes = {
  type: PropTypes.string.isRequired,
  handleShowModal: PropTypes.func.isRequired,
  handleSubmitUser: PropTypes.func.isRequired,
  handleSwitchModal: PropTypes.func.isRequired,
  handleResetPassword: PropTypes.func,
  errorMsg: PropTypes.string,
};

export default HeaderModal;
