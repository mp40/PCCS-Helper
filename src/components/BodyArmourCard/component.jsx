import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BodyArmourSelection from '../BodyArmourSelection';
import { helmetStats, bodyArmorStats } from '../../data/uniformAndArmourTypes';

export const selectArmourList = armourType => (armourType === 'Helmet' ? helmetStats() : bodyArmorStats());

const BodyArmourCard = ({ helmet, vest, changeHelmet, changeVest }) => {
  const [showBodyArmour, toggleBodyArmourSelect] = useState(false);

  const getHelmetName = () => {
    if (!helmet) {
      return 'No Helmet';
    }
    return helmet.name;
  };

  const getHelmetWeight = () => {
    if (!helmet) {
      return '0';
    }
    return helmet.weight;
  };

  const getVestName = () => {
    if (!vest) {
      return 'No Vest';
    }
    return vest.name;
  };

  const getVestWeight = () => {
    if (!vest) {
      return '0';
    }
    return vest.weight;
  };

  const handleDispatch = (type, payload) => {
    if (type === 'Helmet') {
      changeHelmet(payload);
    }
    if (type === 'Vest') {
      changeVest(payload);
    }
    toggleBodyArmourSelect(false);
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
            <td>{getHelmetName()}</td>
            <td>{getHelmetWeight()}</td>
          </tr>
          <tr className="vestBodyArmour" onClick={() => toggleBodyArmourSelect('Vest')}>
            <td>{getVestName()}</td>
            <td>{getVestWeight()}</td>
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

BodyArmourCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  helmet: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  vest: PropTypes.object,
  changeHelmet: PropTypes.func,
  changeVest: PropTypes.func,
};

export default BodyArmourCard;
