import React from 'react';
import PropTypes from 'prop-types';
import StatInput from '../widgets/StatInput';
import { isValidAttributeStat } from '../../helpers/gaurds';

const attributeArray = ['str', 'int', 'hlt', 'wil', 'agi'];
const statNameArray = ['Strength', 'Intelligence', 'Health', 'Willpower', 'Agility'];

const AttributeCard = (props) => {
  const { characterStats } = props;
  const actionsArray = Object.values(props).slice(-5);

  return (
    <div>
      <div className="tableContainer">
        <table className="attributeContainer">
          <tbody>
            <tr>
              <th className="attHeading">Attribute</th>
              <th className="attValHeading">Value</th>
            </tr>
            {attributeArray.map((stat, index) => (
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
};

export default AttributeCard;
