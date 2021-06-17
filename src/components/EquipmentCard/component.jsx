import React, { useState } from 'react';
import PropTypes from 'prop-types';

import EquipmentCardTable from './table';

import SelectEquipment from './select';
import EquipmentFilter from './filter';
import CustomEquipment from './custom';

import { findEquipmentWeight } from '../../helpers/actionHelpers';

import { toggleTagsInList } from './data';

const EquipmentCard = ({
  removeAllEquipment,
  equipment,
}) => {
  const [showEquipment, setShowEquipment] = useState(false);
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filteredTags, setFilteredTags] = useState([]);

  const handleSetShowEquipment = () => {
    setShowEquipment(!showEquipment);
  };

  const handleSetShowCustomInput = () => {
    setShowCustomInput(!showCustomInput);
  };

  const handleSetShowFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleTags = (tag) => {
    setFilteredTags(toggleTagsInList(filteredTags, tag));
  };

  const handleRemoveAllTags = () => {
    setFilteredTags([]);
  };

  const renderEquipmentModal = () => showEquipment
    && (
    <SelectEquipment
      equipment={equipment}
      handleSetShowEquipment={handleSetShowEquipment}
      handleSetShowFilters={handleSetShowFilters}
      handleRemoveAllTags={handleRemoveAllTags}
      filteredTags={filteredTags}
    />
    );

  const renderCustomEquipmentModal = () => showCustomInput
      && (
        <CustomEquipment
          equipment={equipment}
          handleSetShowCustomInput={handleSetShowCustomInput}
        />
      );

  return (
    <div className="--card --gearCard">
      <div>
        <button
          type="button"
          className="--button"
          onClick={() => handleSetShowEquipment()}
        >
          Add Equipment
        </button>
        <button
          type="button"
          className="--button"
          onClick={() => handleSetShowCustomInput()}
        >
          Add Custom
        </button>
        <button
          type="button"
          className="--button"
          onClick={() => removeAllEquipment([])}
        >
          Clear All
        </button>
      </div>
      <EquipmentCardTable equipment={equipment} />
      {renderEquipmentModal()}
      {renderCustomEquipmentModal()}
      {showFilters && (
      <EquipmentFilter
        filteredTags={filteredTags}
        handleTags={handleTags}
        handleSetShowFilters={handleSetShowFilters}
      />
      )}
    </div>
  );
};

EquipmentCard.propTypes = {
  removeAllEquipment: PropTypes.func,
  equipment: PropTypes.arrayOf(PropTypes.object),
};

export default EquipmentCard;
