import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { checkPasswordHasNoBadPatterns } from '../../../utils';
import { blacklistedPatterns } from '../../../utils/data';

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

    if (type === 'signup' || type === 'resetting') {
      if (userDetails.password.trim().length < 8 || typeof userDetails.password !== 'string') {
        setErrors({ ...errors, ...{ password: 'Password must be at least 8 characters' } });
        return;
      }
    }

    if (!checkPasswordHasNoBadPatterns(userDetails.password.trim())) {
      setErrors({ ...errors, ...{ password: 'Password contains prohibited patterns' } });
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
                <p className={styles.errorMessage}>{errors.password}</p>
              )}
            </span>
            <input
              id="password"
              type="password"
              value={userDetails.password}
              onChange={(event) => setUserPassword(event.target.value)}
            />
          </label>
          {
            errors.password === 'Password contains prohibited patterns' && (
              <div className={styles.patterns}>
                <p>prohibited patterns -</p>
                <p>must contain at least five different characters</p>
                <p>cannot contain the following:</p>
                <div>
                  {blacklistedPatterns.map((p) => <span key={p}>{`${p},`}</span>)}
                </div>
              </div>
            )
          }

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
