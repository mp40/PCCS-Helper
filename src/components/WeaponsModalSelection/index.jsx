import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import WeaponsModalFilterSelection from '../WeaponsModalFilterSelection';
import WeaponsCardWeaponStats from '../WeaponsCardWeaponStats';
import ButtonStandard from '../widgets/buttons/ButtonStandard';
import ButtonInfo from '../widgets/buttons/ButtonInfo';
import ButtonDeleteX from '../widgets/buttons/ButtonDeleteX';

import './WeaponsModalSelection.css';

export const promiseTransitionClose = () => new Promise(((resolve) => {
  setTimeout(() => {
    resolve();
  }, 1001);
}));

const WeaponsModalSelection = ({ firearmsArray, toggleOffWeaponCardViews, handleAddFirearm }) => {
  const [firearmToInspect, setFirearmToInspect] = useState(null);
  const newFirearmsArray = firearmsArray;

  const handleToggleViewFilters = () => {
    const transitioned = document.getElementsByClassName('filterCardWrapper trans')[0];
    console.log(transitioned);
    const filterWrapper = document.getElementsByClassName('filterCardWrapper')[0];
    if (transitioned) {
      transitioned.classList.remove('trans');
    } else if (filterWrapper) {
      filterWrapper.classList.add('trans');
    }
  };

  useEffect(() => {
    const statCard = document.getElementsByClassName('WeaponStatTableContainer')[0];
    const transitioned = document.getElementsByClassName('WeaponStatTableContainer trans')[0];
    if (statCard && !transitioned) {
      statCard.classList.add('trans');
    }
  });

  const handleCloseStatCard = () => {
    const statWrapper = document.getElementsByClassName('WeaponStatTableContainer trans')[0];
    if (statWrapper) {
      document.getElementsByClassName('WeaponStatTableContainer trans')[0].classList.remove('trans');
    }
    promiseTransitionClose().then(() => setFirearmToInspect(null));
  };

  const addFirearmToList = (gunObj) => {
    handleAddFirearm(gunObj);
  };

  return (
    <>
      <div className="FirearmSelectionListCard" style={{ zIndex: 10 }}>
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
                // onClick={handleShowGunStats.bind(this, gunObj)}
                // onClick={handleToggleShowGunStats(gunObj)}
                onClick={() => setFirearmToInspect(gunObj)}
              />
              <div
                className="equipmentEntry"
                style={{ width: '100%' }}
                id={gunObj.name}
                onClick={() => addFirearmToList(gunObj)} // <--- this!!!!!
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

      {firearmToInspect && (
      <div className="WeaponStatTableContainer" style={{ fontSize: 'medium' }}>
        <div style={{ marginTop: '2px', marginLeft: '2px' }}>
          <ButtonDeleteX
            id="closeGunStatView"
            // onClick={this.handleShowGunStats}
            // onClick={() => setFirearmToInspect(null)}
            onClick={() => handleCloseStatCard()}
          />
        </div>
        <WeaponsCardWeaponStats
          gunObj={firearmToInspect}
        />
      </div>
      )}

)
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

// const loadRifle = function () {
//   return new Promise(function (resolve, reject) {
//       const rifle = createRifle()
//       setTimeout(function(){
//           resolve("loaded")
//       },500*rifle.reloadTime)
//   })
// }
