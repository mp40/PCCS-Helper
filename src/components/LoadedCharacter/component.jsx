import React, { useState } from 'react';
import PropTypes from 'prop-types';

import LoadedCharacterReferenceTables from './ReferenceTables';
import LoadedCharacterWeapons from './Weapons';
import LoadedCharacterShooting from './Shooting';

import { currentCharacterShape } from '../../helpers/proptypeShapes';

import { hydrateFirearmByObject } from '../../data/firearms/hydrate';

import styles from './styles.module.css';

const LoadedCharacter = ({ currentCharacter, selectCurrentView }) => {
  const [firearm, setFirearm] = useState(false);

  return (
    <div className={styles.wrapper}>
      {firearm
      && (
      <LoadedCharacterShooting
        firearm={hydrateFirearmByObject(firearm)}
        sal={currentCharacter.SAL}
        level={currentCharacter.gunLevel}
        setFirearm={setFirearm}
      />
      )}

      <LoadedCharacterReferenceTables
        name={currentCharacter.name}
        knockoutValue={currentCharacter.knockoutValue}
        sal={currentCharacter.SAL}
        helmet={currentCharacter.helmet}
        vest={currentCharacter.vest}
        selectCurrentView={selectCurrentView}
      />
      <LoadedCharacterWeapons
        firearms={currentCharacter.firearms}
        grenades={currentCharacter.grenades}
        setFirearm={setFirearm}
      />

    </div>

  );
};

LoadedCharacter.propTypes = {
  currentCharacter: currentCharacterShape.isRequired,
  selectCurrentView: PropTypes.func.isRequired,
};

export default LoadedCharacter;
