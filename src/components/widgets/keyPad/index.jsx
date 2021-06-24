import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const KeyPad = ({ handleClick, values, selected }) => (
  <div className={styles.buttons}>
    {values.map((value) => (
      <button type="button" className={value === selected ? styles.selected : ''} key={value} onClick={() => handleClick(value)}>
        {value}
      </button>
    ))}
  </div>

);

KeyPad.propTypes = {
  handleClick: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
  selected: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default KeyPad;
