import React from 'react';
import PropTypes from 'prop-types';

import ButtonStandard from '../../helpers/buttons/ButtonStandard';
import ButtonInfo from '../../helpers/buttons/ButtonInfo';

const WeaponsModalSelection = ({ firearmsArray, closeShowFirearms, handleShowGunStats, handleAddFirearm }) => {
  const newFirearmsArray = firearmsArray;

  return (
    <div className="equipmentListCard">
      <div className="equipmentListHeader">
        Select firearms
        <ButtonStandard
          id="closeFirearmModal"
          name="Close List"
          onClick={closeShowFirearms}
        />
      </div>

      <div className="equipmentListBody">
        {newFirearmsArray.map(gunObj => (
          <div key={gunObj.name} style={{ display: 'flex', width: '30%', paddingLeft: '.2rem', paddingRight: '.2rem' }}>
            <ButtonInfo
              id={`view${gunObj.name}`}
              onClick={handleShowGunStats.bind(this, gunObj)}
            />
            <div
              className="equipmentEntry"
              style={{ width: '100%' }}
              id={gunObj.name}
              onClick={handleAddFirearm.bind(this, gunObj)}
            >
              <div>
                {gunObj.name}
              </div>
              <div>
                {`${gunObj.weight} lbs`}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

WeaponsModalSelection.propTypes = {
  firearmsArray: PropTypes.arrayOf(
    PropTypes.object,
  ),
  closeShowFirearms: PropTypes.func,
  handleShowGunStats: PropTypes.func,
  handleAddFirearm: PropTypes.func,
};

export default WeaponsModalSelection;
