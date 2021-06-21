import React from 'react';
import { PropTypes } from 'prop-types';

import { isNotValidObjectToAdd } from '../../../helpers/gaurds';

import { filterEquipment } from './data';

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
    // <div className={styles.listWrapper}>
    <div className={`${styles.contents}`}>
      {filterEquipment(filteredTags).map((equipObj) => (
        <button
          type="button"
          className="button-clickable-item-row"
          key={equipObj.name}
          onClick={() => handleAddEquipment(equipObj)}
        >
          <span>
            {equipObj.name}
          </span>
          <span>
            {`${equipObj.weight} lbs`}
          </span>
        </button>
      ))}
    </div>
  );

  return (
    <>
      <div className="modal-background" />
      <div className="card-standard card-select-gear-modal">

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
