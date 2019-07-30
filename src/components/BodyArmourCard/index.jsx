import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BodyArmourSelection from '../BodyArmourSelection';
import { helmetStats, bodyArmorStats } from '../../data/uniformAndArmourTypes';

export const selectArmourList = armourType => (armourType === 'Helmet' ? helmetStats() : bodyArmorStats());

const BodyArmourCard = () => {
  const [showBodyArmour, toggleBodyArmourSelect] = useState(false);

  const handleDispatch = () => {
  // todo something here
  };

  return (
    <>
      <table className="uniformTableContainer">
        <thead>
          <tr className="uniformTableHeader">
            <th className="uniformHeading">Body Armour</th>
            <th className="uniformValHeading">lbs</th>
          </tr>
        </thead>
        <tbody>
          <tr className="helmetBodyArmour" onClick={() => toggleBodyArmourSelect('Helmet')}>
            <td>No Helmet</td>
            <td>0</td>
          </tr>
          <tr className="vestBodyArmour" onClick={() => toggleBodyArmourSelect('Vest')}>
            <td>No Vest</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
      {showBodyArmour
      && (
      <BodyArmourSelection
        armourType={showBodyArmour}
        armourList={selectArmourList(showBodyArmour)}
        handleDispatch={handleDispatch}
      />
      )
      }
    </>
  );
};

export default BodyArmourCard;
