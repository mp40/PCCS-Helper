import React from 'react';
import PropTypes from 'prop-types';
import StatInput from '../widgets/StatInput';
import { isValidAttributeStat } from '../../helpers/gaurds';

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
              isValid={isValidAttributeStat}
              action={modifyStrengthValue}
            />
            <StatInput
              statLevel={characterStats.int}
              statName="Intelligence"
              idRef="updateInt"
              isValid={isValidAttributeStat}
              action={modifyIntelligenceValue}
            />
            <StatInput
              statLevel={characterStats.hlt}
              statName="Health"
              idRef="updateHlt"
              isValid={isValidAttributeStat}
              action={modifyHealthValue}
            />
            <StatInput
              statLevel={characterStats.wil}
              statName="Willpower"
              idRef="updateWil"
              isValid={isValidAttributeStat}
              action={modifyWillpowerValue}
            />
            <StatInput
              statLevel={characterStats.agi}
              statName="Agility"
              idRef="updateAgi"
              isValid={isValidAttributeStat}
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
