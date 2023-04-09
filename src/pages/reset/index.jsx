import React, { useState } from 'react';

import HeaderModal from '../../components/header/modal';

import { fetchResettingPassword } from '../../fetch';

const ResetPage = () => {
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
    <HeaderModal
      type="resetting"
      handleShowModal={handleHome}
      handleSwitchModal={handleHome}
      handleSubmitUser={handleSubmitUser}
      errorMsg={errorMsg}
    />

  );
};

export default ResetPage;
