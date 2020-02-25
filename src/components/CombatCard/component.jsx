import React from 'react';
import PropTypes from 'prop-types';
import StatInput from '../widgets/StatInput';
import { renderAtrributeAndCombatTableHeadings } from '../widgets/renderWidgets';
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
    <div id="combatLevelInputContainer" className="--tableContainer --card">
      <table className="--collapseBorder attributeContainer">
        <tbody>
          {renderAtrributeAndCombatTableHeadings('Skill')}
          {renderStatInput(characterStats.gunLevel, 'Gun', modifyGunCombatLevel)}
          {renderStatInput(characterStats.handLevel, 'Hand', modifyMeleeCombatLevel)}
        </tbody>
      </table>
    </div>
  );
};

CombatCard.propTypes = {
  modifyGunCombatLevel: PropTypes.func,
  modifyMeleeCombatLevel: PropTypes.func,
  characterStats: PropTypes.objectOf(PropTypes.number),
};

export default CombatCard;
