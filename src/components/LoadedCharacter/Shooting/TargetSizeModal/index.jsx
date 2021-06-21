import React from 'react';
import PropTypes from 'prop-types';

import { targetSizeMods } from '../data';

import styles from './styles.module.css';

const TargetSizeSelectModal = ({ setSize, setModal }) => {
  const handleClick = (size) => {
    setSize(size);
    setModal(false);
  };

  return (
    <>
      <div className="modal-background" />
      <div className={`--card ${styles.card}`}>
        {Object.keys(targetSizeMods).map((size) => (
          <button type="button" key={size} onClick={() => handleClick(size)}>
            {size}
          </button>
        ))}
      </div>
    </>
  );
};

TargetSizeSelectModal.propTypes = {
  setSize: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
};

export default TargetSizeSelectModal;
