import React, { useState } from 'react';
import PropTypes from 'prop-types';

import LoadedCharacterReferenceTables from './ReferenceTables';
import LoadedCharacterWeapons from './Weapons';
import LoadedCharacterShooting from './Shooting';
import LoadedCharacterMelee from './Melee';

import { salAndCeTable } from '../../core/tables';

import styles from './styles.module.css';

const LoadedCharacter = ({
  name,
  gunLevel,
  handLevel,
  knockoutValue,
  helmet,
  vest,
  firearms,
  grenades,
  launchers,
  melee,
  gunCombatActions,
  handCombatActions,
}) => {
  const [weapon, setWeapon] = useState(false);

  const sal = salAndCeTable[gunLevel];

  return (
    <div className={styles.wrapper}>
      {weapon && (
      <LoadedCharacterShooting
        weapon={weapon}
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
      <LoadedCharacterMelee
        melee={melee}
        handLevel={handLevel}
      />
    </div>

  );
};

LoadedCharacter.propTypes = {
  name: PropTypes.string.isRequired,
  gunLevel: PropTypes.number.isRequired,
  handLevel: PropTypes.number.isRequired,
  knockoutValue: PropTypes.number.isRequired,
  helmet: PropTypes.string,
  vest: PropTypes.string,
  firearms: PropTypes.arrayOf(PropTypes.object).isRequired,
  grenades: PropTypes.arrayOf(PropTypes.object).isRequired,
  launchers: PropTypes.arrayOf(PropTypes.object).isRequired,
  melee: PropTypes.arrayOf(PropTypes.string).isRequired,
  gunCombatActions: PropTypes.number.isRequired,
  handCombatActions: PropTypes.number.isRequired,
};

export default LoadedCharacter;
