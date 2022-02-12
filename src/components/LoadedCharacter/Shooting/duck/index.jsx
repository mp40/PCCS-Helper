import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from '../styles.module.css';

const Duck = ({ setDuckAlm }) => {
  const [ducking, setDucking] = useState({ shooter: false, target: false });

  useEffect(() => {
    let result = 0;

    if (ducking.target) {
      result -= 5;
    }

    if (ducking.shooter) {
      result -= 10;
    }
    setDuckAlm(result);
  }, [ducking]);

  const handleDucking = (key) => {
    const updatedDucking = { ...ducking };
    updatedDucking[key] = !ducking[key];
    setDucking(updatedDucking);
  };

  return (
    <>
      <button type="button" className={`${ducking.shooter ? styles.selected : ''}`} onClick={() => handleDucking('shooter')}>{'Duck\nShooter'}</button>
      <button type="button" className={`${ducking.target ? styles.selected : ''}`} onClick={() => handleDucking('target')}>{'Duck\nTarget'}</button>
    </>
  );
};
Duck.propTypes = {
  setDuckAlm: PropTypes.func.isRequired,
};

export default Duck;
