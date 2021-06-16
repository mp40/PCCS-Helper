import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BodyArmourSelection from '../BodyArmourSelection';

import { helmets, vests } from '../../data/uniformAndArmourTypes';

import './BodyArmour.css';

const BodyArmourCard = ({ helmet, vest, changeHelmet, changeVest }) => {
  const [showBodyArmour, toggleBodyArmourSelect] = useState(false);

  const selectArmourList = (armourType) => (armourType === 'helmet' ? helmets : vests);

  const handleDispatch = (type, payload) => {
    if (type === 'helmet') {
      changeHelmet(payload);
    }
    if (type === 'vest') {
      changeVest(payload);
    }
    toggleBodyArmourSelect(false);
  };

  const renderArmourRow = (type, name) => (
    <tr className="--selectableRow " onClick={() => toggleBodyArmourSelect(type)}>
      <td>{name}</td>
      <td>{selectArmourList(type)[name]?.weight || 0}</td>
    </tr>
  );

  return (
    <div className="--card">
      <table>
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
  helmet: PropTypes.string,
  vest: PropTypes.string,
  changeHelmet: PropTypes.func,
  changeVest: PropTypes.func,
};

BodyArmourCard.defaultProps = {
  helmet: 'No Helmet',
  vest: 'No Vest',
};

export default BodyArmourCard;
