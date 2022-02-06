import React from 'react';
import PropTypes from 'prop-types';

import CharacterInfo from '../../CharacterInfo';
import ActionsTable from '../../ActionsTable';
import KnockoutTable from '../../KnockoutTable';
import ReactionTable from '../../reactionTable';
import BodyArmourTable from '../../BodyArmourTable';

import Link from '../../widgets/link';

import styles from './styles.module.css';

const LoadedCharacterReferenceTables = ({
  name,
  knockoutValue,
  sal,
  helmet,
  vest,
  gunCombatActions,
  handCombatActions,
}) => (
  <div className={`${styles.card} --card`}>
    <h1>{name}</h1>
    <CharacterInfo />
    <div>
      <ActionsTable gunCombatActions={gunCombatActions} handCombatActions={handCombatActions} />
      <KnockoutTable knockoutValue={knockoutValue} />
      <ReactionTable sal={sal} />
    </div>
    <BodyArmourTable helmet={helmet} vest={vest} />
    <Link href="/edit" text="Edit Character" />
  </div>

);

LoadedCharacterReferenceTables.propTypes = {
  name: PropTypes.string.isRequired,
  knockoutValue: PropTypes.number.isRequired,
  sal: PropTypes.number.isRequired,
  helmet: PropTypes.string,
  vest: PropTypes.string,
  gunCombatActions: PropTypes.number.isRequired,
  handCombatActions: PropTypes.number.isRequired,
};

export default LoadedCharacterReferenceTables;
