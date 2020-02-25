import React from 'react';
import PropTypes from 'prop-types';
import StatInput from '../widgets/StatInput';
import { renderAtrributeAndCombatTableHeadings } from '../widgets/renderWidgets';
import { isValidAttributeStat } from '../../helpers/gaurds';

const statNameArray = ['Strength', 'Intelligence', 'Willpower', 'Health', 'Agility'];

const AttributeCard = ({
  characterStats,
  modifyStrengthValue,
  modifyIntelligenceValue,
  modifyWillpowerValue,
  modifyHealthValue,
  modifyAgilityValue,
}) => {
  const actionsArray = [
    modifyStrengthValue,
    modifyIntelligenceValue,
    modifyWillpowerValue,
    modifyHealthValue,
    modifyAgilityValue,
  ];

  return (
    <div className="--tableContainer --card">
      <table className="--collapseBorder attributeContainer">
        <tbody>
          {renderAtrributeAndCombatTableHeadings()}
          {Object.keys(characterStats).slice(0, 5).map((stat, index) => (
            <StatInput
              statLevel={characterStats[stat]}
              statName={statNameArray[index]}
              isValid={isValidAttributeStat}
              action={actionsArray[index]}
              key={stat}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

AttributeCard.propTypes = {
  characterStats: PropTypes.objectOf(PropTypes.number),
  modifyStrengthValue: PropTypes.func,
  modifyIntelligenceValue: PropTypes.func,
  modifyHealthValue: PropTypes.func,
  modifyWillpowerValue: PropTypes.func,
  modifyAgilityValue: PropTypes.func,
};

export default AttributeCard;
