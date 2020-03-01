/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import WeaponsModalFilterSelection from '../WeaponsModalFilterSelection';
// import WeaponsCardWeaponStats from '../WeaponsCardWeaponStats';
import FirearmNotes from '../FirearmNotes';
import ButtonStandard from '../widgets/buttons/ButtonStandard';
import ButtonInfo from '../widgets/buttons/ButtonInfo';
import ButtonDeleteX from '../widgets/buttons/ButtonDeleteX';

import WeaponsCardWeaponStats from '../WeaponsCardWeaponStatsNew';

import { rifles, pistols, smgs, mgs, sniperRifles, shotguns, filterableCalibers } from '../../data/firearms';

import GearModalContents from '../GearModalContents';

import GearCard from '../GearCard';

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
    return typeArray.filter((firearm) => !filterableCalibers().includes(firearm.calibre));
  }
  return typeArray.filter((firearm) => firearm.calibre === caliber);
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
      <GearCard name="modalCard firearmSelectModal">
        <div className="equipmentListHeader">
          <span>Select firearms</span>
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
        <GearModalContents>
          {gunArrayFilteredByType.map((gunObj) => (
            <div key={gunObj.name} style={{ display: 'flex', width: '30%', paddingLeft: '.2rem', paddingRight: '.2rem' }}>
              <ButtonInfo
                id={`view${gunObj.name.replace(/\s+/g, '')}`}
                onClick={() => handleShowStatCard(gunObj)}
              />
              <div
                className="firearmEntry"
                id={gunObj.name}
                onClick={() => addFirearmToList(gunObj)}
              >
                <span>{gunObj.name}</span>
                <span>{`${gunObj.weight} lbs`}</span>
              </div>
            </div>
          ))}
        </GearModalContents>
      </GearCard>
      <div className={filterClassName}>
        <WeaponsModalFilterSelection
          handleSetFilterByType={handleSetFilterByType}
        />
      </div>

      {firearmToInspect && (
        <div className={statBoxClassName} style={{ fontSize: 'medium' }}>
          <div>
            <ButtonDeleteX
              id="closeGunStatView"
              onClick={() => handleCloseStatCard()}
            />
          </div>
          <div style={{ display: 'flex' }}>
            <div>
              <WeaponsCardWeaponStats gunObj={firearmToInspect} />
            </div>
            { firearmToInspect.list !== 'shotguns'
          && (
          <div className="firearm-notes-wrapper">
            <FirearmNotes gunObj={firearmToInspect} viewSpareAmmo={false} />
          </div>
          )}
          </div>
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
