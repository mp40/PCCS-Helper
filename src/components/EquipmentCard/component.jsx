import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SelectEquipment from './select';
import EquipmentFilter from './filter';
import CustomEquipment from './custom';

import GearCard from '../GearCard';
import GearTable from '../GearTable';
import GearRow from '../GearRow';

import { findEquipmentWeight } from '../../helpers/actionHelpers';

import { toggleTagsInList } from './data';

import './EquipmentCard.css';

const EquipmentCard = ({
  decreaseEquipmentQty,
  increaseEquipmentQty,
  removeAllEquipment,
  removeEquipment,
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
  const renderTableBody = () => (
    <tbody>
      <GearRow gear={{ type: 'Equipment', remove: removeEquipment, up: increaseEquipmentQty, down: decreaseEquipmentQty, array: equipment }} />
    </tbody>
  );

  const totalEquipWeight = findEquipmentWeight(equipment);
  return (
    <GearCard gearType="equipment" hasButtonFunctions buttonFunctions={[() => handleSetShowEquipment(), () => handleSetShowCustomInput(), () => removeAllEquipment([])]}>
      <GearTable gearHeading="Equipment" totalWeight={Math.round(totalEquipWeight * 1000) / 1000}>
        {renderTableBody()}
      </GearTable>
      {renderEquipmentModal()}
      {renderCustomEquipmentModal()}
      {showFilters && (
        <EquipmentFilter
          filteredTags={filteredTags}
          handleTags={handleTags}
          handleSetShowFilters={handleSetShowFilters}
        />
      )}
    </GearCard>
  );
};

EquipmentCard.propTypes = {
  decreaseEquipmentQty: PropTypes.func,
  increaseEquipmentQty: PropTypes.func,
  removeAllEquipment: PropTypes.func,
  removeEquipment: PropTypes.func,
  equipment: PropTypes.arrayOf(PropTypes.object),
};

export default EquipmentCard;
