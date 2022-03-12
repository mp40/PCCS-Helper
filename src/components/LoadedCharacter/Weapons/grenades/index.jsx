import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles.module.css';

const CharacterGrenades = ({ grenades }) => {
  if (!grenades.length) {
    return null;
  }

  return (
    <>
      <h3>Grenades</h3>
      {grenades.map((grenade) => (
        <div key={grenade.name} className={styles.grenade}>{`${grenade.name} x ${grenade.qty}`}</div>
      ))}
    </>
  );
};

CharacterGrenades.propTypes = {
  grenades: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CharacterGrenades;
