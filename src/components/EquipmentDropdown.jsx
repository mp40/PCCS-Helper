import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { modifyEquipment } from '../actions';
import ButtonStandard from '../helpers/buttons/ButtonStandard';
import './EquipmentDropdown.css';

import { createArrayOfEquipment, filterEquipment, createFilterSet } from '../helpers/equipmentListFunctions';
import { addEquipment } from '../helpers/actionHelpers';

const equipment = require('../helpers/equipmentList');


class EquipmentDropdown extends Component {
  handleAddEquipment(equipObj) {
    const { gear, totalWeight, characterStats } = this.props;
    const arrayContainsObj = gear.equipment.filter(obj => obj.name === equipObj.name);
    if (arrayContainsObj.length) {
      return;
    }
    const newData = addEquipment(totalWeight, gear.equipment, equipObj);
    this.props.modifyEquipment(newData.totalWeight, newData.equipArray, characterStats);
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
  toggleFilters: PropTypes.func,
  closeShowEquipment: PropTypes.func,
  handleTags: PropTypes.func,
  gear: PropTypes.shape({
    uniform: PropTypes.string,
    equipment: PropTypes.arrayOf(PropTypes.object),
    firearms: PropTypes.arrayOf(PropTypes.object),
  }),
  characterStats: PropTypes.objectOf(PropTypes.number),
  totalWeight: PropTypes.number,
  filteredTags: PropTypes.arrayOf(PropTypes.string),
  showFilters: PropTypes.bool,
};

const mapStateToProps = state => ({
  currentView: state.currentView,
  totalWeight: state.totalWeight,
  characterStats: state.characterStats,
  gear: {
    equipment: state.gear.equipment,
  },
});

export default connect(mapStateToProps, { modifyEquipment })(EquipmentDropdown);
