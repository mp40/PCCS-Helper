import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BodyArmourSelection from '../BodyArmourSelection';
import { helmetStats, bodyArmorStats } from '../../data/uniformAndArmourTypes';

export const selectArmourList = armourType => (armourType === 'Helmet' ? helmetStats() : bodyArmorStats());

const BodyArmourCard = ({ helmet, changeHelmet }) => {
  const [showBodyArmour, toggleBodyArmourSelect] = useState(false);
  // const { helmet, changeHelmet } = props;

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

  const handleDispatch = (type, payload) => {
    if (type === 'Helmet') {
      changeHelmet(payload);
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

BodyArmourCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  helmet: PropTypes.object,
  changeHelmet: PropTypes.func,
};

export default BodyArmourCard;
