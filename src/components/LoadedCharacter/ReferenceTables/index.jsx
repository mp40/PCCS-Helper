import React from 'react';
import PropTypes from 'prop-types';

import CharacterInfo from '../../CharacterInfo';
import ActionsTable from '../../ActionsTable';
import KnockoutTable from '../../KnockoutTable';
import ReactionTable from '../../reactionTable';
import BodyArmourTable from '../../BodyArmourTable';

import { armourShape } from '../../../helpers/proptypeShapes';

import styles from './styles.module.css';

const LoadedCharacterReferenceTables = ({
  name,
  knockoutValue,
  sal,
  helmet,
  vest,
  selectCurrentView,
}) => (
  <div className={`${styles.card} --card`}>
    <h1>{name}</h1>
    <CharacterInfo />
    <div>
      <ActionsTable />
      <KnockoutTable knockoutValue={knockoutValue} />
      <ReactionTable sal={sal} />
    </div>
    <BodyArmourTable helmet={helmet} vest={vest} />
    <button
      type="button"
      onClick={() => selectCurrentView('createChar')}
    >
      Edit Character
    </button>
  </div>

);

LoadedCharacterReferenceTables.propTypes = {
  name: PropTypes.string.isRequired,
  knockoutValue: PropTypes.number.isRequired,
  sal: PropTypes.number.isRequired,
  helmet: armourShape,
  vest: armourShape,
  selectCurrentView: PropTypes.func.isRequired,
};

export default LoadedCharacterReferenceTables;
