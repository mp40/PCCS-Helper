import React from 'react';
import PropTypes from 'prop-types';
import StatInput from '../widgets/StatInput';
import { renderAtrributeAndCombatTableHeadings } from '../widgets/renderWidgets';
import { isValidAttributeStat } from '../../helpers/gaurds';

const statNameArray = ['Strength', 'Intelligence', 'Willpower', 'Health', 'Agility'];

const AttributeCard = (props) => {
  const {
    characterStats,
    modifyStrengthValue,
    modifyIntelligenceValue,
    modifyWillpowerValue,
    modifyHealthValue,
    modifyAgilityValue,
  } = props;
  const actionsArray = [
    modifyStrengthValue,
    modifyIntelligenceValue,
    modifyWillpowerValue,
    modifyHealthValue,
    modifyAgilityValue,
  ];

  return (
    <div>
      <div className="tableContainer">
        <table className="attributeContainer">
          <tbody>
            {renderAtrributeAndCombatTableHeadings()}
            {Object.keys(characterStats).slice(0, 5).map((stat, index) => (
              <StatInput
                statLevel={characterStats[stat]}
                statName={statNameArray[index]}
                idRef={`update${stat.charAt(0).toUpperCase() + stat.slice(1)}`}
                isValid={isValidAttributeStat}
                action={actionsArray[index]}
                key={stat}
              />
            ))
            }
          </tbody>
        </table>
      </div>
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
