/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import WeaponsModalFilterSelection from '../WeaponsModalFilterSelection';
import WeaponsCardWeaponStats from '../WeaponsCardWeaponStats';
import ButtonStandard from '../widgets/buttons/ButtonStandard';
import ButtonInfo from '../widgets/buttons/ButtonInfo';
import ButtonDeleteX from '../widgets/buttons/ButtonDeleteX';

import { rifles, pistols, smgs, mgs, sniperRifles, shotguns, filterableCalibers } from '../../data/firearms';

import './WeaponsModalSelection.css';

const getAllFirearmsArray = () => [
  ...rifles(),
  ...pistols(),
  ...smgs(),
  ...mgs(),
  ...sniperRifles(),
  ...shotguns(),
];

const getFirearmList = {
  Rifles: rifles(),
  Pistols: pistols(),
  SMGs: smgs(),
  MGs: mgs(),
  'Sniper Rifles': sniperRifles(),
  Shotguns: shotguns(),
  All: getAllFirearmsArray(),
};

const promiseTransitionClose = () => new Promise(((resolve) => {
  setTimeout(() => {
    resolve();
  }, 1001);
}));

const promiseTransitionOpen = () => new Promise(((resolve) => {
  setTimeout(() => {
    resolve();
  }, 0);
}));

export const filterCalibersFromType = (typeArray, caliber) => {
  if (caliber === 'All') {
    return typeArray;
  }
  if (caliber === 'Other') {
    return typeArray.filter(firearm => !filterableCalibers().includes(firearm.calibre));
  }
  return typeArray.filter(firearm => firearm.calibre === caliber);
};

const WeaponsModalSelection = ({ toggleOffWeaponCardViews, handleAddFirearm }) => {
  const [firearmToInspect, setFirearmToInspect] = useState(null);
  const [statBoxClassName, toggleStatCard] = useState('WeaponStatTableContainer');
  const [filterClassName, toggleFilterCard] = useState('filterCardWrapper');
  const [gunArrayFilteredByType, setFilteredGunArray] = useState(getAllFirearmsArray());

  const handleSetFilterByType = (type, calibre) => setFilteredGunArray(
    filterCalibersFromType(getFirearmList[type], calibre),
  );

  const handleToggleViewFilters = () => {
    if (filterClassName === 'filterCardWrapper') {
      toggleFilterCard('filterCardWrapper trans');
      setTimeout(() => {
        toggleFilterCard('filterCardWrapper trans final');
      }, 1001);
    }
    if (filterClassName === 'filterCardWrapper trans final' || filterClassName === 'filterCardWrapper trans') {
      toggleFilterCard('filterCardWrapper');
    }
  };

  const handleShowStatCard = (gunObj) => {
    setFirearmToInspect(gunObj);
    promiseTransitionOpen().then(() => toggleStatCard('WeaponStatTableContainer trans'));
  };

  const handleCloseStatCard = () => {
    toggleStatCard('WeaponStatTableContainer');
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
            onClick={() => toggleOffWeaponCardViews('showFirearms')}
          />
          <ButtonStandard
            id="showFirearmFilters"
            name="Filters"
            onClick={handleToggleViewFilters}
          />
        </div>

        <div className="equipmentListBody">
          {gunArrayFilteredByType.map(gunObj => (
            <div key={gunObj.name} style={{ display: 'flex', width: '30%', paddingLeft: '.2rem', paddingRight: '.2rem' }}>
              <ButtonInfo
                id={`view${gunObj.name}`}
                onClick={() => handleShowStatCard(gunObj)}
              />
              <div
                className="equipmentEntry"
                style={{ width: '100%' }}
                id={gunObj.name}
                onClick={() => addFirearmToList(gunObj)}
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

      <div className={filterClassName}>
        <WeaponsModalFilterSelection
          handleSetFilterByType={handleSetFilterByType}
        />
      </div>

      {firearmToInspect && (
      <div className={statBoxClassName} style={{ fontSize: 'medium' }}>
        <div style={{ marginTop: '2px', marginLeft: '2px' }}>
          <ButtonDeleteX
            id="closeGunStatView"
            onClick={() => handleCloseStatCard()}
          />
        </div>
        <WeaponsCardWeaponStats
          gunObj={firearmToInspect}
        />
      </div>
      )}
    </>
  );
};

WeaponsModalSelection.propTypes = {
  toggleOffWeaponCardViews: PropTypes.func,
  handleAddFirearm: PropTypes.func,
};

export default WeaponsModalSelection;
