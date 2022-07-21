import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const LoadedCharacterShootingHeader = ({ setWeapon, weaponName }) => (
  <div className={styles.header}>
    <span>{weaponName}</span>
    <button
      aria-label="close"
      className={styles.close}
      type="button"
      onClick={() => setWeapon(false)}
    />
  </div>
);

LoadedCharacterShootingHeader.propTypes = {
  setWeapon: PropTypes.func.isRequired,
  weaponName: PropTypes.string.isRequired,
};

export default LoadedCharacterShootingHeader;
