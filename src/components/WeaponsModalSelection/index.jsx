import React from 'react';
import PropTypes from 'prop-types';
import WeaponsModalFilterSelection from '../WeaponsModalFilterSelection';
import ButtonStandard from '../widgets/buttons/ButtonStandard';
import ButtonInfo from '../widgets/buttons/ButtonInfo';


import './WeaponsModalSelection.css';

const WeaponsModalSelection = ({ firearmsArray, toggleOffWeaponCardViews, handleShowGunStats, handleAddFirearm }) => {
  const newFirearmsArray = firearmsArray;

  const handleToggleViewFilters = () => {
    const transitioned = document.getElementsByClassName('trans')[0];
    const filterWrapper = document.getElementsByClassName('filterCardWrapper')[0];
    if (transitioned) {
      transitioned.classList.remove('trans');
    } else {
      filterWrapper.classList.add('trans');
    }
  };

  return (
    <>
      <div className="equipmentListCard" style={{ zIndex: 10 }}>
        <div className="equipmentListHeader">
        Select firearms
          <ButtonStandard
            id="closeFirearmModal"
            name="Close List"
            onClick={toggleOffWeaponCardViews.bind(this, 'showFirearms')}
          />
          <ButtonStandard
            id="showFirearmFilters"
            name="Filters"
            onClick={handleToggleViewFilters}
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

      <div className="filterCardWrapper">
        <WeaponsModalFilterSelection />
      </div>
    </>
  );
};

WeaponsModalSelection.propTypes = {
  firearmsArray: PropTypes.arrayOf(
    PropTypes.object,
  ),
  toggleOffWeaponCardViews: PropTypes.func,
  handleShowGunStats: PropTypes.func,
  handleAddFirearm: PropTypes.func,
};

export default WeaponsModalSelection;
