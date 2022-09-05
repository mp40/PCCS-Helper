/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import CharacterFirearms from './firearms';
import CharacterLaunchers from './launchers';
import CharacterGrenades from './grenades';

import { getLauncherByName } from '../../../data/firearms/launchers';
import { gunObjShape, launcherShape } from '../../../helpers/proptypeShapes';

import styles from './styles.module.css';

const LoadedCharacterWeapons = ({ firearms, grenades, launchers, setWeapon }) => {
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
      <CharacterFirearms firearms={firearms} setWeapon={setWeapon} />
      <CharacterGrenades grenades={grenades} setWeapon={setWeapon} />
      <CharacterLaunchers launchers={launchersAndUnderslung} setWeapon={setWeapon} />
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
