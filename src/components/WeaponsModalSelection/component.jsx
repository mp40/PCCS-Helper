/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import GearModalContents from '../GearModalContents';
import FirearmInspection from './FirearmInspection';
import FirearmFilter from './FirearmFilter';

import { gunObjShape } from '../../helpers/proptypeShapes';

import { isNotValidObjectToAdd } from '../../helpers/gaurds';
import { firearmLists, filterCalibersFromType } from './data';

import styles from './styles.module.css';

const WeaponsModalSelection = ({ toggleOffWeaponCardViews, addFirearm, firearms }) => {
  const [firearmToInspect, setFirearmToInspect] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [gunArrayFilteredByType, setFilteredGunArray] = useState(firearmLists('All'));

  const handleAddFirearm = (gunObj) => {
    if (isNotValidObjectToAdd(firearms, gunObj)) {
      return;
    }
    addFirearm(gunObj);
  };

  const handleSetFilterByType = (type, calibre) => setFilteredGunArray(
    filterCalibersFromType(firearmLists(type), calibre),
  );

  const handleSetShowFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleShowStatCard = (gunObj) => {
    setFirearmToInspect(gunObj);
  };

  return (
    <>
      <div className={styles.modal} />
      <div className={`--card ${styles.card}`}>
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
        <GearModalContents>
          {gunArrayFilteredByType.map((gunObj) => (
            <div key={gunObj.name} style={{ display: 'flex', width: '30%', paddingLeft: '.2rem', paddingRight: '.2rem' }}>
              <button
                type="button"
                aria-label="info"
                className={`--infoButton --button view${gunObj.name.replace(/\s+/g, '')}`}
                onClick={() => handleShowStatCard(gunObj)}
              />
              <div
                className={styles.firearmEntry}
                onClick={() => handleAddFirearm(gunObj)}
              >
                <span>{gunObj.name}</span>
                <span>{`${gunObj.weight} lbs`}</span>
              </div>
            </div>
          ))}
        </GearModalContents>

      </div>
      <div className={styles.mask}>

        {showFilters && (
        <FirearmFilter
          handleSetFilterByType={handleSetFilterByType}
          setShowFilters={() => setShowFilters(false)}
        />
        )}

        {firearmToInspect && (
        <FirearmInspection
          firearmToInspect={firearmToInspect}
          setFirearmToInspect={setFirearmToInspect}
          handleCloseStatCard={() => setFirearmToInspect(null)}
        />
        )}
      </div>
    </>
  );
};

WeaponsModalSelection.propTypes = {
  toggleOffWeaponCardViews: PropTypes.func.isRequired,
  addFirearm: PropTypes.func.isRequired,
  firearms: PropTypes.arrayOf(gunObjShape).isRequired,
};

export default WeaponsModalSelection;
