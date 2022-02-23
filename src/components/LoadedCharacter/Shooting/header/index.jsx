import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const LoadedCharacterShootingHeader = ({ setFirearm, firearmName }) => (
  <div className={styles.header}>
    <span>{firearmName}</span>
    <button
      aria-label="close"
      className={styles.close}
      type="button"
      onClick={() => setFirearm(false)}
    />
  </div>
);

LoadedCharacterShootingHeader.propTypes = {
  setFirearm: PropTypes.func.isRequired,
  firearmName: PropTypes.string.isRequired,
};

export default LoadedCharacterShootingHeader;
