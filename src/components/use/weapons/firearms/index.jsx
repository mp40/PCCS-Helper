import React from 'react';
import PropTypes from 'prop-types';

import { hydrateFirearmByObject } from '../../../../data/firearms/hydrate';
import { gunObjShape } from '../../../../helpers/proptypeShapes';

import styles from './styles.module.css';

const CharacterFirearms = ({ firearms, setWeapon }) => {
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
    <>
      <h3>Firearms</h3>
      {firearms.map((firearm) => (
        <button type="button" key={firearm.name} onClick={() => setWeapon(hydrateFirearmByObject(firearm))}>
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
    </>
  );
};

CharacterFirearms.propTypes = {
  firearms: PropTypes.arrayOf(gunObjShape).isRequired,
  setWeapon: PropTypes.func.isRequired,
};

export default CharacterFirearms;
