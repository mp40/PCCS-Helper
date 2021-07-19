import React, { useState } from 'react';

import HeaderModal from '../header/modal';

import { fetchResettingPassword } from '../../fetch';

import styles from './styles.module.css';

const noop = () => {};

const Reset = () => {
  const [errorMsg, setErrorMsg] = useState(null);

  const token = window.location.search.substring(1);

  const handleHome = () => {
    window.history.pushState({}, '', '/');
    window.location.pathname = '/';
  };

  const handleSubmitUser = async (user) => {
    try {
      const res = await fetchResettingPassword(user.email, user.password, token);

      if (res.error) {
        setErrorMsg(res.message);
        return;
      }

      handleHome();
    } catch (err) {
      setErrorMsg('error resetting password');
    }
  };

  return (
    <div className={`card-standard ${styles.wrapper}`}>
      <h2>Password Reset</h2>
      <HeaderModal
        type="resetting"
        handleShowModal={noop}
        handleSwitchModal={handleHome}
        handleSubmitUser={handleSubmitUser}
        errorMsg={errorMsg}
      />
      <button type="button">Submit</button>
    </div>

  );
};

export default Reset;
