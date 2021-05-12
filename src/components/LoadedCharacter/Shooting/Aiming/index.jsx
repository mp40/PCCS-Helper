import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Aiming = ({ aims, maxAims, setAims, setModal }) => {
  const handleIncrement = () => {
    if (aims === maxAims) {
      return;
    }

    setAims(aims + 1);
  };

  const handleDecrement = () => {
    if (aims === 1) {
      return;
    }

    setAims(aims - 1);
  };

  return (
    <div className={styles.wrapper}>
      <button type="button" onClick={() => setModal('aims')}>
        <span>
          Aims
        </span>
        <span>
          {aims}
        </span>
      </button>
      <button className={aims === maxAims ? styles.unavailable : ''} type="button" onClick={() => handleIncrement()}>+</button>
      <button className={aims === 1 ? styles.unavailable : ''} type="button" onClick={() => handleDecrement()}>-</button>
    </div>
  );
};

Aiming.propTypes = {
  aims: PropTypes.number.isRequired,
  maxAims: PropTypes.number.isRequired,
  setAims: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
};

export default Aiming;
