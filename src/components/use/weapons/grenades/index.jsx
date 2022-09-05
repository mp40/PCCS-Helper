/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { grenadeList } from '../../../../data/grenades';

import styles from './styles.module.css';

export const aim = {
  ac: [1, 2, 3, 4, 6, 8],
  mod: [-26, -18, -14, -12, -11, -10],
};

const CharacterGrenades = ({ grenades, setWeapon }) => {
  if (!grenades.length) {
    return null;
  }

  const handleSetWeapon = (grenade) => {
    const { at, fl } = grenadeList[grenade.name];
    setWeapon({ ...grenade, list: 'grenades', aim, at, fl });
  };

  return (
    <>
      <h3>Grenades</h3>
      {grenades.map((grenade) => (
        <button key={grenade.name} type="button" onClick={() => handleSetWeapon(grenade)}>
          <div className={styles.grenade}>{`${grenade.name} x ${grenade.qty}`}</div>
        </button>

      ))}
    </>
  );
};

CharacterGrenades.propTypes = {
  grenades: PropTypes.arrayOf(PropTypes.object).isRequired,
  setWeapon: PropTypes.func.isRequired,
};

export default CharacterGrenades;
