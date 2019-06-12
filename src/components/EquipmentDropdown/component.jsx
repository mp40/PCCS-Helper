import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { gearShape } from '../../helpers/proptypeShapes';
import ButtonStandard from '../widgets/buttons/ButtonStandard';
import { createArrayOfEquipment, filterEquipment, createFilterSet } from '../../helpers/equipmentListFunctions';
import { addEquipment } from '../../helpers/actionHelpers';
import './EquipmentDropdown.css';

const equipment = require('../../data/equipmentList');


class EquipmentDropdown extends Component {
  handleAddEquipment(equipObj) {
    const { gear, totalWeight, characterStats, modifyEquipment } = this.props;
    const arrayContainsObj = gear.equipment.filter(obj => obj.name === equipObj.name);
    if (arrayContainsObj.length) {
      return;
    }
    const newData = addEquipment(totalWeight, gear.equipment, equipObj);
    modifyEquipment(newData.totalWeight, newData.equipArray, characterStats);
  }

  render() {
    const { filteredTags, showFilters, handleTags, closeShowEquipment, toggleFilters } = this.props;
    const filteredEquipment = filterEquipment(filteredTags);
    const equipmentArray = createArrayOfEquipment(filteredEquipment);
    const equipmentTags = createFilterSet(equipment);

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
          {showFilters
            ? (
              <div className="tagContainer">
                {equipmentTags.map(tag => (
                  <div
                    className="equipTags"
                    style={{ fontWeight: this.props.filteredTags.includes(tag)
                      ? 'bold'
                      : null }}
                    onClick={handleTags.bind(this, tag)}
                    key={tag}
                  >
                    {tag}

                  </div>
                ))}
              </div>
            )
            : (
              <div className="equipmentListBody">
                {equipmentArray.map(equipObj => (
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
                ))}
              </div>
            )}
        </div>
      </div>
    );
  }
}

EquipmentDropdown.propTypes = {
  modifyEquipment: PropTypes.func,
  toggleFilters: PropTypes.func,
  closeShowEquipment: PropTypes.func,
  handleTags: PropTypes.func,
  gear: gearShape,
  characterStats: PropTypes.objectOf(PropTypes.number),
  totalWeight: PropTypes.number,
  filteredTags: PropTypes.arrayOf(PropTypes.string),
  showFilters: PropTypes.bool,
};

export default EquipmentDropdown;
