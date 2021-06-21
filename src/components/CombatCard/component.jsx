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

const CombatCard = ({ gunLevel, handLevel, modifyGunCombatLevel, modifyMeleeCombatLevel }) => (
  <LevelsCard className="combatLevelCard" levelType="combat">
    {renderStatInput(gunLevel, 'Gun', modifyGunCombatLevel)}
    {renderStatInput(handLevel, 'Hand', modifyMeleeCombatLevel)}
  </LevelsCard>
);

CombatCard.propTypes = {
  gunLevel: PropTypes.number,
  handLevel: PropTypes.number,
  modifyGunCombatLevel: PropTypes.func,
  modifyMeleeCombatLevel: PropTypes.func,
};

export default CombatCard;
