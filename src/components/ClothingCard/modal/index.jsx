import React from 'react';
import PropTypes from 'prop-types';

import { uniformWeights } from '../../../data/uniformAndArmourTypes';

import styles from './styles.module.css';

const SelectUniformModal = ({ handleChangeUniform, setShowSelectModal }) => {
  const uniforms = ['Normal', 'Tropical', 'Winter'];

  return (
    <>
      <div className="modal-background" />
      <div className={`--card ${styles.card}`}>

        <div className={styles.header}>
          <div>
            <span>Select Uniform</span>
          </div>
          <button
            aria-label="close"
            className={styles.close}
            type="button"
            onClick={() => setShowSelectModal(false)}
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
    </>
  );
};

SelectUniformModal.propTypes = {
  handleChangeUniform: PropTypes.func.isRequired,
  setShowSelectModal: PropTypes.func.isRequired,
};

export default SelectUniformModal;
