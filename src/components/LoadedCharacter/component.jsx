import React from 'react';

import CharacterInfo from '../CharacterInfo';
import ActionsTable from '../ActionsTable';
import KnockoutTable from '../KnockoutTable';
import ReactionTable from '../reactionTable';
import BodyArmourTable from '../BodyArmourTable';

import { currentCharacterShape } from '../../helpers/proptypeShapes';

import styles from './styles.module.css';

const LoadedCharacter = ({ currentCharacter }) => (
  <div className={styles.card}>
    <div className={styles.wrapper}>
      <h1>{currentCharacter.name}</h1>
      <CharacterInfo />
      <div>
        <ActionsTable />
        <KnockoutTable knockoutValue={currentCharacter.knockoutValue} />
        <ReactionTable sal={currentCharacter.SAL} />
      </div>
      <BodyArmourTable helmet={currentCharacter.helmet} vest={currentCharacter.vest} />
    </div>
  </div>

);

LoadedCharacter.propTypes = {
  currentCharacter: currentCharacterShape.isRequired,
};

export default LoadedCharacter;
