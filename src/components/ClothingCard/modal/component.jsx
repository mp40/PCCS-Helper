import React from 'react';
import PropTypes from 'prop-types';

import { uniformWeights } from '../../../data/uniformAndArmourTypes';

import styles from './styles.module.css';

const SelectUniformModal = ({ changeUniform, closeModal }) => {
  const uniforms = ['Normal', 'Tropical', 'Winter'];

  const handleChangeUniform = (uniform) => {
    changeUniform(uniform);
    closeModal();
  };

  return (
    <div className={`card-standard ${styles.card}`}>

      <div className={styles.header}>
        <div>
          <span>Select Uniform</span>
        </div>
        <button
          aria-label="close"
          className={styles.close}
          type="button"
          onClick={() => closeModal()}
        />
      </div>

      <div className={styles.uniforms}>
        {uniforms.map((uniform) => (
          <button
            key={uniform}
            type="button"
            onClick={() => handleChangeUniform(uniform)}
            className="button-clickable-item-row"
          >
            <span>
              {uniform}
            </span>
            <span>
              {uniformWeights[uniform]}
            </span>
          </button>
        ))}
      </div>

    </div>
  );
};

SelectUniformModal.propTypes = {
  changeUniform: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default SelectUniformModal;
