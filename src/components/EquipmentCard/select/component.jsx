/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import { PropTypes } from 'prop-types';

import { filterEquipment } from '../../../helpers/equipmentListFunctions';
import { isNotValidObjectToAdd } from '../../../helpers/gaurds';

import styles from './styles.module.css';

const SelectEquipment = ({
  addEquipment,
  handleSetShowFilters,
  handleRemoveAllTags,
  handleSetShowEquipment,
  equipment,
  filteredTags,
}) => {
  const handleAddEquipment = (equipmentToAdd) => {
    if (isNotValidObjectToAdd(equipment, equipmentToAdd)) {
      return;
    }

    addEquipment(equipmentToAdd);
  };

  const renderEquipment = () => (
    <div className={styles.listWrapper}>
      {filterEquipment(filteredTags).map((equipObj) => (
        <div
          className="--selectableRow equipmentEntry"
          key={equipObj.name}
          onClick={() => handleAddEquipment(equipObj)}
        >
          <div>
            {equipObj.name}
          </div>
          <div>
            {`${equipObj.weight} lbs`}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className={styles.modal} />
      <div className={`--card ${styles.card}`}>

        <div className={styles.header}>
          <div>
            <span>Select Equipment</span>
            <button
              type="button"
              onClick={() => handleSetShowFilters()}
            >
              Filter List
            </button>
            {filteredTags.length > 0 && (
            <button
              type="button"
              onClick={() => handleRemoveAllTags()}
            >
              Clear Filters
            </button>
            )}
          </div>
          <button
            aria-label="close"
            className={styles.close}
            type="button"
            onClick={() => handleSetShowEquipment()}
          />
        </div>

        {renderEquipment()}
      </div>
    </>
  );
};

SelectEquipment.propTypes = {
  addEquipment: PropTypes.func.isRequired,
  handleSetShowFilters: PropTypes.func.isRequired,
  handleRemoveAllTags: PropTypes.func.isRequired,
  handleSetShowEquipment: PropTypes.func.isRequired,
  equipment: PropTypes.arrayOf(PropTypes.object).isRequired,
  filteredTags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectEquipment;
