import React from 'react';
import PropTypes from 'prop-types';
import LevelsCard from '../LevelsCard';
import StatInput from '../widgets/StatInput';
import { isValidCombatLevel } from '../../helpers/gaurds';

const renderStatInput = (level, statName, action) => (
  <StatInput
    statLevel={level}
    statName={statName}
    isValid={isValidCombatLevel}
    action={action}
  />
);

const CombatCard = (props) => {
  const { characterStats, modifyGunCombatLevel, modifyMeleeCombatLevel } = props;
  return (
    <LevelsCard className="combatLevelCard" levelType="combat">
      {renderStatInput(characterStats.gunLevel, 'Gun', modifyGunCombatLevel)}
      {renderStatInput(characterStats.handLevel, 'Hand', modifyMeleeCombatLevel)}
    </LevelsCard>
  );
};

CombatCard.propTypes = {
  modifyGunCombatLevel: PropTypes.func,
  modifyMeleeCombatLevel: PropTypes.func,
  characterStats: PropTypes.objectOf(PropTypes.number),
};

export default CombatCard;
