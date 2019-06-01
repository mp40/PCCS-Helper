import React, { Component } from 'react';
import { connect } from 'react-redux';
import { modifyEquipment } from '../actions';
import ButtonStandard from './buttons/ButtonStandard';
import './EquipmentDropdown.css';

import { createArrayOfEquipment, filterEquipment, createFilterSet } from '../helpers/equipmentListFunctions.js';
import { addEquipment } from '../helpers/actionHelpers';

const equipment = require('../helpers/equipmentList');


class EquipmentDropdown extends Component {
  handleAddEquipment(equipObj) {
    const arrayContainsObj = this.props.gear.equipment.filter(obj => obj.name === equipObj.name);
    if (arrayContainsObj.length) {
      return;
    }
    const newData = addEquipment(this.props.totalWeight, this.props.gear.equipment, equipObj);
    this.props.modifyEquipment(newData.totalWeight, newData.equipArray, this.props.characterStats);
  }

  render() {
    const filteredEquipment = filterEquipment(this.props.filteredTags);
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
              onClick={this.props.closeShowEquipment.bind(this)}
            />
            <ButtonStandard
              id="filterEquipmentList"
              name={this.props.showFilters
                ? 'Apply Filter'
                : 'Filter List'}
              onClick={this.props.toggleFilters.bind(this)}
            />
          </div>
          {this.props.showFilters
            ? (
              <div className="tagContainer">
                {equipmentTags.map((tag, index) => (
                  <div
                    className="equipTags"
                    style={{ fontWeight: this.props.filteredTags.includes(tag)
                      ? 'bold'
                      : null }}
                    onClick={this.props.handleTags.bind(this, tag)}
                    key={index}
                  >
                    {tag}

                  </div>
                ))}
              </div>
            )
            : (
              <div className="equipmentListBody">
                {equipmentArray.map((equipObj, index) => (
                  <div
                    className="equipmentEntry"
                    key={index}
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

const mapStateToProps = state => ({
  currentView: state.currentView,
  totalWeight: state.totalWeight,
  characterStats: state.characterStats,
  gear: {
    equipment: state.gear.equipment,
  },
});

export default connect(mapStateToProps, { modifyEquipment })(EquipmentDropdown);
