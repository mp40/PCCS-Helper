import React from 'react';
import PropTypes from 'prop-types';

import { getLauncherByName, launchers as underslugList } from '../../../data/firearms/launchers';
import { hydrateFirearmByObject } from '../../../data/firearms/hydrate';
import { gunObjShape, launcherShape } from '../../../helpers/proptypeShapes';

import styles from './styles.module.css';

import { launcherList } from '../../../data/launchers';

// import { gunObjShape, launcherShape } from '../../../helpers/proptypeShapes';
// import { salAndCeTable } from '../../../core/tables';
// import { initialState } from './data';

const hydratedLaunchers = { ...launcherList, ...underslugList };

const LoadedCharacterWeapons = ({ firearms, grenades, launchers, setWeapon }) => {
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

  let launchersAndUnderslung = [...launchers];

  firearms.forEach((firearm) => {
    if (firearm?.launcher?.attached) {
      const underslung = getLauncherByName(firearm.launcher.attached);
      underslung.qty = 1;
      underslung.mag = underslung.mag.map((m, i) => ({ ...m, qty: firearm.launcher.mag[i].qty }));
      launchersAndUnderslung = [...launchersAndUnderslung, underslung];
    }
  });

  return (
    <div className={`card-standard ${styles.card}`}>
      <h2>Weapons</h2>
      <h3>Firearms</h3>
      {firearms.map((firearm) => (
        <button type="button" key={firearm.name} className={styles.weapon} onClick={() => setWeapon(hydrateFirearmByObject(firearm))}>
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
      {grenades.length > 0 && (
        <>
          <h3>Grenades</h3>
          {grenades.map((grenade) => (
            <div key={grenade.name} className={styles.grenade}>{`${grenade.name} x ${grenade.qty}`}</div>
          ))}
        </>
      )}
      {launchersAndUnderslung.length > 0 && (
      <>
        <h3>Launchers</h3>
        {launchersAndUnderslung.map((launcher) => (
          <button type="button" key={launcher.name} className={styles.weapon} onClick={() => setWeapon(hydratedLaunchers[launcher.name])}>

            <div key={launcher.name} className={styles.launcher}>
              <span>{`${launcher.name} x ${launcher.qty}`}</span>
              {launcher.mag.map((m) => {
                if (m.weight === '-') {
                  return null;
                }
                return (
                  <span key={m.class}>{`${m.class} x ${m.qty}`}</span>
                );
              })}
            </div>

          </button>

        ))}
      </>
      )}
    </div>
  );
};

LoadedCharacterWeapons.propTypes = {
  firearms: PropTypes.arrayOf(gunObjShape).isRequired,
  grenades: PropTypes.arrayOf(PropTypes.object).isRequired,
  launchers: PropTypes.arrayOf(launcherShape).isRequired,
  setWeapon: PropTypes.func.isRequired,
};

export default LoadedCharacterWeapons;
