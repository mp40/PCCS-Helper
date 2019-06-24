/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { gearShape } from '../../helpers/proptypeShapes';
import ButtonStandard from '../widgets/buttons/ButtonStandard';
import { filterEquipment, createFilterSet } from '../../helpers/equipmentListFunctions';
import { isNotValidObjectToAdd } from '../../helpers/gaurds';
import { equipment } from '../../data/equipmentList';
import './EquipmentDropdown.css';

class EquipmentDropdown extends Component {
mapEquipmentFilterTags = () => {
  const { filteredTags, handleTags } = this.props;
  return createFilterSet(equipment()).map(tag => (
    <div
      className="equipTags"
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
  return filterEquipment(filteredTags).map(equipObj => (
    <div
      className="equipmentEntry"
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
  <div className="equipmentListBody">
    {this.mapFilteredEquipment()}
  </div>
)

renderContent = () => {
  const { showFilters } = this.props;
  return showFilters ? this.renderFilterList() : this.renderEquipment();
}

render() {
  const { showFilters, closeShowEquipment, toggleFilters } = this.props;

  return (
    <div className="equipmentModalContainer">

      <div className="equipmentListCard">
        <div className="equipmentListHeader">
                    Select Equipment
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
      </div>
    </div>
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
