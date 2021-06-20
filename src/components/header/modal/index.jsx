import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

import text from './data';

const HeaderModal = ({
  type,
  handleShowModal,
  handleSubmitUser,
  handleSwitchModal,
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

    if (userDetails.password.trim().length < 6) {
      setErrors({ ...errors, ...{ password: true } });
      return;
    }

    handleSubmitUser(userDetails);
  };

  return (
    <>
      <div className="modal-background" />
      <div className={styles.card}>
        <button
          aria-label="close"
          className={styles.close}
          type="button"
          onClick={() => handleShowModal()}
        />
        <div>{text[type].title}</div>
        <form className={styles.form} onSubmit={(event) => handleSubmit(event)}>
          {/* mptodo */}
          <label>
            <span className={errors.email ? styles.error : ''}>
              {text.label.email}
            </span>
            {errors.email && (
              <p className={styles.errorMessage}>{text.errors.email}</p>
            )}
          </label>
          <input
            value={userDetails.email}
            onChange={(event) => setUserEmail(event.target.value)}
          />

          <label>
            <span className={errors.password ? styles.error : ''}>
              {text.label.password}
            </span>
            <span>
              {errors.password && (
                <p className={styles.errorMessage}>{text.errors.password}</p>
              )}
            </span>
          </label>
          <input
            value={userDetails.password}
            onChange={(event) => setUserPassword(event.target.value)}
          />
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
};

export default HeaderModal;
