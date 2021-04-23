import React from 'react';
import PropTypes from 'prop-types';

import { rangeMods } from '../data';

import styles from './styles.module.css';

const RangeSelectModal = ({ setRange, setModal }) => {
  const handleClick = (rng) => {
    setRange(rng);
    setModal(false);
  };

  return (
    <>
      <div className={styles.modal} />
      <div className={`--card ${styles.card}`}>
        {Object.keys(rangeMods).map((rng) => (
          <button type="button" key={rng} onClick={() => handleClick(rng)}>
            {rng}
          </button>
        ))}
      </div>
    </>
  );
};

RangeSelectModal.propTypes = {
  setRange: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
};

export default RangeSelectModal;
