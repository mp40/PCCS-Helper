import React from 'react';
import PropTypes from 'prop-types';

import { gunObjShape } from '../../../helpers/proptypeShapes';

import styles from './styles.module.css';

const LoadedCharacterWeapons = ({ firearms, grenades, setFirearm }) => {
  const getSpareAmmoNotes = (magazines) => {
    const text = [];

    magazines.forEach((mag) => {
      if (mag.qty > 0) {
        if (mag.type !== 'Rnd') {
          text.push(`${mag.cap} round ${mag.type} x ${mag.qty}`);
        }
        if (mag.type === 'Rnd' && !mag.class) {
          text.push(`${mag.qty} x Single Round${mag.qty === 1 ? '' : 's'}`);
        }
        if (mag.type === 'Rnd' && mag.class) {
          text.push(`${mag.qty} x ${mag.class} Round${mag.qty === 1 ? '' : 's'}`);
        }
      }
    });

    return text.length > 0 ? text : ['no spare ammo'];
  };

  return (
    <div className={`--card ${styles.card}`}>
      <h2>Weapons</h2>
      <h3>Firearms</h3>
      {firearms.map((firearm) => (
        <button type="button" key={firearm.name} className={styles.firearm} onClick={() => setFirearm(firearm)}>
          <div>
            {firearm.name}
          </div>
          {getSpareAmmoNotes(firearm.mag).map((note) => (
            <div
              key={note}
              className={styles.mag}
            >
              {note}
            </div>
          ),
          )}
        </button>
      ))}
      <h3>Grenades</h3>
      {grenades.map((grenade) => (
        <div key={grenade.name}>{`${grenade.name} x ${grenade.qty}`}</div>
      ))}
    </div>
  );
};

LoadedCharacterWeapons.propTypes = {
  firearms: PropTypes.arrayOf(gunObjShape).isRequired,
  grenades: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFirearm: PropTypes.func.isRequired,
};

export default LoadedCharacterWeapons;
