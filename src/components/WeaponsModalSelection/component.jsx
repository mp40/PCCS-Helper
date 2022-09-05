/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FirearmInspection from './FirearmInspection';
import FirearmFilter from './FirearmFilter';

import { firearmLists, filterCalibersFromType } from './data';

import { getFullFirearmSystemWeightByName } from '../../data/firearms';

import styles from './styles.module.css';

const WeaponsModalSelection = ({ toggleOffWeaponCardViews, addFirearm, firearms }) => {
  const [firearmToInspect, setFirearmToInspect] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [gunArrayFilteredByType, setFilteredGunArray] = useState(firearmLists('All'));

  const handleAddFirearm = (firearm) => {
    if (firearms.filter((gun) => gun.name === firearm).length) {
      return;
    }

    addFirearm(firearm);
    toggleOffWeaponCardViews('showFirearms');
  };

  const handleSetFilterByType = (type, calibre) => setFilteredGunArray(
    filterCalibersFromType(type, calibre),
  );

  const handleSetShowFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleShowStatCard = (firearm) => {
    setFirearmToInspect(firearm);
  };

  return (
    <>
      <div className="modal-background" />

      <div className={`card-standard card-select-gear-modal ${styles.wrapper}`}>

        <div className={styles.header}>
          <div>
            <span>Select Firearms</span>
            <button
              type="button"
              onClick={handleSetShowFilters}
            >
              Filters
            </button>
          </div>

          <button
            aria-label="close"
            className={styles.close}
            type="button"
            onClick={() => toggleOffWeaponCardViews('showFirearms')}
          />
        </div>
        <div className={`select-weapon-body-wrapper ${styles.contents}`}>
          {gunArrayFilteredByType.map((firearm) => (
            <div key={firearm} className={styles.firearmRow}>
              <button
                type="button"
                aria-label="info"
                className="button--standard button--question"
                onClick={() => handleShowStatCard(firearm)}
              />
              <button
                type="button"
                className={`button-clickable-item-row ${styles.firearmEntry}`}
                onClick={() => handleAddFirearm(firearm)}
              >
                <span>{firearm}</span>
                <span>{`${getFullFirearmSystemWeightByName(firearm)} lbs`}</span>
              </button>
            </div>
          ))}

        </div>
        <div className={styles.fade} />

        <div className={styles.mask}>

          {showFilters && (
          <FirearmFilter
            handleSetFilterByType={handleSetFilterByType}
            handleSetShowFilters={handleSetShowFilters}
          />
          )}

          {firearmToInspect && (
          <FirearmInspection
            firearmToInspect={firearmToInspect}
            setFirearmToInspect={setFirearmToInspect}
          />
          )}
        </div>

      </div>
    </>
  );
};

WeaponsModalSelection.propTypes = {
  toggleOffWeaponCardViews: PropTypes.func.isRequired,
  addFirearm: PropTypes.func.isRequired,
  firearms: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default WeaponsModalSelection;
