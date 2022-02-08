import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const IconButton = ({ type, onClick }) => (
  <button
    aria-label={type}
    type="button"
    className={`${styles.icon} ${styles[type]}`}
    onClick={() => onClick()}
  />
);

IconButton.propTypes = {
  type: PropTypes.oneOf(['print', 'save', 'load']),
  onClick: PropTypes.func.isRequired,
};

export default IconButton;
