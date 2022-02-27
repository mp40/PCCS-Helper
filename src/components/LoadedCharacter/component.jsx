import React, { useState } from 'react';
import PropTypes from 'prop-types';

import LoadedCharacterReferenceTables from './ReferenceTables';
import LoadedCharacterWeapons from './Weapons';
import LoadedCharacterShooting from './Shooting';

import { hydrateFirearmByObject } from '../../data/firearms/hydrate';
import { launcherList } from '../../data/launchers';

import { salAndCeTable } from '../../core/tables';

import styles from './styles.module.css';

const LoadedCharacter = ({
  name,
  gunLevel,
  knockoutValue,
  helmet,
  vest,
  firearms,
  grenades,
  launchers,
  gunCombatActions,
  handCombatActions,
}) => {
  const [weapon, setWeapon] = useState(false);

  const sal = salAndCeTable[gunLevel];

  let hydratedWeapon = weapon;
  if (firearms.includes(weapon.list)) {
    hydratedWeapon = hydrateFirearmByObject(weapon);
  }

  if (weapon.list === 'launchers') {
    hydratedWeapon = launcherList[weapon.name];
  }

  return (
    <div className={styles.wrapper}>
      {weapon && (
      <LoadedCharacterShooting
        weapon={hydratedWeapon}
        level={gunLevel}
        setWeapon={setWeapon}
      />
      )}

      <LoadedCharacterReferenceTables
        name={name}
        gunCombatActions={gunCombatActions}
        handCombatActions={handCombatActions}
        knockoutValue={knockoutValue}
        sal={sal}
        helmet={helmet}
        vest={vest}
      />
      <LoadedCharacterWeapons
        firearms={firearms}
        grenades={grenades}
        launchers={launchers}
        setWeapon={setWeapon}
      />

    </div>

  );
};

LoadedCharacter.propTypes = {
  name: PropTypes.string.isRequired,
  gunLevel: PropTypes.number.isRequired,
  knockoutValue: PropTypes.number.isRequired,
  helmet: PropTypes.string,
  vest: PropTypes.string,
  firearms: PropTypes.arrayOf(PropTypes.object).isRequired,
  grenades: PropTypes.arrayOf(PropTypes.object).isRequired,
  launchers: PropTypes.arrayOf(PropTypes.object).isRequired,
  gunCombatActions: PropTypes.number.isRequired,
  handCombatActions: PropTypes.number.isRequired,
};

export default LoadedCharacter;
