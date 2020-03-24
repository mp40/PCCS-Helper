/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GearModalContents from '../GearModalContents';
import GearCard from '../GearCard';
import FirearmFilter from '../FirearmFilter';
import ButtonStandard from '../widgets/buttons/ButtonStandard';

import FirearmInspection from './FirearmInspection';

import { rifles, pistols, smgs, mgs, sniperRifles, shotguns, filterableCalibers } from '../../data/firearms';

import { firearmLists } from './data';

import './WeaponsModalSelection.css';

const getAllFirearmsArray = () => [
  ...rifles(),
  ...pistols(),
  ...smgs(),
  ...mgs(),
  ...sniperRifles(),
  ...shotguns(),
];

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
    filterCalibersFromType(firearmLists[type], calibre),
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
              <button
                type="button"
                className={`--infoButton --button view${gunObj.name.replace(/\s+/g, '')}`}
                onClick={() => handleShowStatCard(gunObj)}
              />
              <div
                className="firearmEntry"
                id={gunObj.name}
                onClick={() => handleAddFirearm(gunObj)}
              >
                <span>{gunObj.name}</span>
                <span>{`${gunObj.weight} lbs`}</span>
              </div>
            </div>
          ))}
        </GearModalContents>
      </GearCard>
      <div className={filterClassName}>
        <FirearmFilter
          handleSetFilterByType={handleSetFilterByType}
        />
      </div>

      {firearmToInspect && (
        <FirearmInspection
          statBoxClassName={statBoxClassName}
          firearmToInspect={firearmToInspect}
          handleCloseStatCard={handleCloseStatCard}
        />
      )}
    </>
  );
};

WeaponsModalSelection.propTypes = {
  toggleOffWeaponCardViews: PropTypes.func,
  handleAddFirearm: PropTypes.func,
};

export default WeaponsModalSelection;
