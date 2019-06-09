import React from 'react';
import PropTypes from 'prop-types';
import StatInput from '../widgets/StatInput';

const AttributeCard = (props) => {
  const { characterStats,
    modifyStrengthValue,
    modifyIntelligenceValue,
    modifyHealthValue,
    modifyWillpowerValue,
    modifyAgilityValue } = props;

  return (
    <div>
      <div className="tableContainer">
        <table className="attributeContainer">
          <tbody>
            <tr>
              <th className="attHeading">Attribute</th>
              <th className="attValHeading">Value</th>
            </tr>
            <StatInput
              statLevel={characterStats.str}
              statName="Strength"
              idRef="updateStr"
              action={modifyStrengthValue}
            />
            <StatInput
              statLevel={characterStats.int}
              statName="Intelligence"
              idRef="updateInt"
              action={modifyIntelligenceValue}
            />
            <StatInput
              statLevel={characterStats.hlt}
              statName="Health"
              idRef="updateHlt"
              action={modifyHealthValue}
            />
            <StatInput
              statLevel={characterStats.wil}
              statName="Willpower"
              idRef="updateWil"
              action={modifyWillpowerValue}
            />
            <StatInput
              statLevel={characterStats.agi}
              statName="Agility"
              idRef="updateAgi"
              action={modifyAgilityValue}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

AttributeCard.propTypes = {
  modifyAgilityValue: PropTypes.func,
  modifyWillpowerValue: PropTypes.func,
  modifyHealthValue: PropTypes.func,
  modifyIntelligenceValue: PropTypes.func,
  modifyStrengthValue: PropTypes.func,
  characterStats: PropTypes.objectOf(PropTypes.number),
};

export default AttributeCard;
