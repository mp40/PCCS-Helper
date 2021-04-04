import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BodyArmourSelection from '../BodyArmourSelection';
import { helmetStats, bodyArmorStats } from '../../data/uniformAndArmourTypes';
import { armourShape } from '../../helpers/proptypeShapes';

import './BodyArmour.css';

export const selectArmourList = (armourType) => (armourType === 'helmet' ? helmetStats() : bodyArmorStats());

const BodyArmourCard = ({ helmet, vest, changeHelmet, changeVest }) => {
  const [showBodyArmour, toggleBodyArmourSelect] = useState(false);

  const handleDispatch = (type, payload) => {
    if (type === 'helmet') {
      changeHelmet(payload);
    }
    if (type === 'vest') {
      changeVest(payload);
    }
    toggleBodyArmourSelect(false);
  };

  const renderArmourRow = (type, obj) => (
    <tr className={`--selectableRow ${type}BodyArmour`} onClick={() => toggleBodyArmourSelect(type)}>
      <td>{obj.name}</td>
      <td>{obj.weight}</td>
    </tr>
  );

  return (
    <div className="--card">
      <table className="--tableContainer">
        <thead>
          <tr>
            <th className="--tableHeading">Body Armour</th>
            <th className="--tableValue">lbs</th>
          </tr>
        </thead>
        <tbody>
          {renderArmourRow('helmet', helmet)}
          {renderArmourRow('vest', vest)}
        </tbody>
      </table>
      {showBodyArmour
      && (
      <BodyArmourSelection
        armourType={showBodyArmour}
        armourList={selectArmourList(showBodyArmour)}
        handleDispatch={handleDispatch}
      />
      )}
    </div>
  );
};

BodyArmourCard.propTypes = {
  helmet: armourShape,
  vest: armourShape,
  changeHelmet: PropTypes.func,
  changeVest: PropTypes.func,
};

BodyArmourCard.defaultProps = {
  helmet: { name: 'No Helmet', weight: 0 },
  vest: { name: 'No Vest', weight: 0 },
};

export default BodyArmourCard;
