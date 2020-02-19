/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { gearShape } from '../../helpers/proptypeShapes';
import ButtonStandard from '../widgets/buttons/ButtonStandard';
import { filterEquipment, createFilterSet } from '../../helpers/equipmentListFunctions';
import { isNotValidObjectToAdd } from '../../helpers/gaurds';
import { equipment } from '../../data/equipmentList';

import GearModal from '../GearModal';
import GearCard from '../GearCard';
import GearModalContents from '../GearModalContents';

import './EquipmentDropdown.css';

class EquipmentDropdown extends Component {
mapEquipmentFilterTags = () => {
  const { filteredTags, handleTags } = this.props;
  return createFilterSet(equipment()).map((tag) => (
    <div
      className="--selectableRow equipTags"
      style={{ fontWeight: filteredTags.includes(tag)
        ? 'bold'
        : null }}
      onClick={handleTags.bind(this, tag)}
      key={tag}
    >
      {tag}
    </div>
  ));
}

mapFilteredEquipment = () => {
  const { filteredTags } = this.props;
  return filterEquipment(filteredTags).map((equipObj) => (
    <div
      className="--selectableRow equipmentEntry"
      key={equipObj.name}
      onClick={this.handleAddEquipment.bind(this, equipObj)}
    >
      <div>
        {equipObj.name}
      </div>
      <div>
        {`${equipObj.weight} lbs`}
      </div>
    </div>
  ));
}

handleAddEquipment = (equipmentToAdd) => {
  const { addEquipment, gear } = this.props;
  if (isNotValidObjectToAdd(gear.equipment, equipmentToAdd)) {
    return;
  }
  addEquipment(equipmentToAdd);
}

renderFilterList = () => (
  <div className="tagContainer">
    {this.mapEquipmentFilterTags()}
  </div>
)

renderEquipment = () => (
  <GearModalContents name="equipmentListBody">
    {this.mapFilteredEquipment()}
  </GearModalContents>
)

renderContent = () => {
  const { showFilters } = this.props;
  return showFilters ? this.renderFilterList() : this.renderEquipment();
}

render() {
  const { showFilters, closeShowEquipment, toggleFilters } = this.props;

  return (
    <GearModal>
      <GearCard name="modalCard">
        <div className="equipmentListHeader">
          <span>Select Equipment</span>
          <ButtonStandard
            id="closeEquipmentModal"
            name="Close List"
            onClick={closeShowEquipment}
          />
          <ButtonStandard
            id="filterEquipmentList"
            name={showFilters
              ? 'Apply Filter'
              : 'Filter List'}
            onClick={toggleFilters}
          />
        </div>
        {this.renderContent()}
      </GearCard>
    </GearModal>
  );
}
}

EquipmentDropdown.propTypes = {
  addEquipment: PropTypes.func,
  toggleFilters: PropTypes.func,
  closeShowEquipment: PropTypes.func,
  handleTags: PropTypes.func,
  gear: gearShape,
  filteredTags: PropTypes.arrayOf(PropTypes.string),
  showFilters: PropTypes.bool,
};

export default EquipmentDropdown;
