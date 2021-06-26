import React from 'react';
import PropTypes from 'prop-types';

import KeyPad from '../keyPad';

import styles from './styles.module.css';

const KeyPadModal = ({ values, handleClick, selected }) => (
  <>
    <div className="modal-background" />
    <div className={`card-standard ${styles.card}`}>
      <KeyPad values={values} handleClick={handleClick} selected={selected} />
    </div>
  </>
);

KeyPadModal.propTypes = {
  values: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  handleClick: PropTypes.func.isRequired,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default KeyPadModal;
