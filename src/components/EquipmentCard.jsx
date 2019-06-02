import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EquipmentDropdown from './EquipmentDropdown';
import CustomEquipmentModal from './CustomEquipmentModal';
import ButtonStandard from './buttons/ButtonStandard';
import ButtonDeleteX from './buttons/ButtonDeleteX';
import ButtonIncrementArrows from './buttons/ButtonIncrementArrows';

import { modifyEquipment, updateAttributes } from '../actions';
import { removeEquipment, removeAllEquipment, incrementEquipmentQty } from '../helpers/actionHelpers';

class EquipmentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEquipment: false,
      showCustomInput: false,
      showFilters: false,
      filteredTags: [],
    };
  }

  toggleShowEquipment() {
    const { showEquipment } = this.state;
    this.setState({ showEquipment: !showEquipment });
  }

  toggleCustomEquipment() {
    const { showCustomInput } = this.state;
    this.setState({ showCustomInput: !showCustomInput });
  }

  closeShowEquipment() {
    this.setState({
      showEquipment: false,
      showFilters: false,
    });
  }

  toggleFilters() {
    const { showFilters } = this.state;
    this.setState({ showFilters: !showFilters });
  }

  handleTags(tag) {
    const { filteredTags } = this.state;
    if (filteredTags.includes(tag)) {
      this.unfilterTag(tag);
    } else {
      this.filterTag(tag);
    }
  }

  filterTag(tag) {
    const { filteredTags } = this.state;
    const tags = filteredTags;
    tags.push(tag);
    this.setState({ filteredTags: tags });
  }

  unfilterTag(tag) {
    const { filteredTags } = this.state;
    let tags = filteredTags;
    tags = tags.filter(element => element !== tag);
    this.setState({ filteredTags: tags });
  }

  handleRemoveEquipment(equipObj) {
    const { totalWeight, gear, characterStats } = this.props;
    const newData = removeEquipment(totalWeight, gear.equipment, equipObj);
    this.props.modifyEquipment(newData.totalWeight, newData.equipArray, characterStats);
  }

  handleRemoveAllEquipment() {
    const { totalWeight, gear, characterStats } = this.props;
    const newWeight = removeAllEquipment(totalWeight, gear.equipment);
    this.props.modifyEquipment(newWeight, [], characterStats);
  }

  handleIncrementEquipmentQty(equipObj, modifier) {
    const { totalWeight, gear, characterStats } = this.props;
    const newData = incrementEquipmentQty(totalWeight, gear.equipment, equipObj, modifier);
    this.props.modifyEquipment(newData.totalWeight, newData.equipArray, characterStats);
  }


  render() {
    const { showEquipment, showCustomInput, showFilters, filteredTags } = this.state;
    const { gear } = this.props;
    const charEquip = gear.equipment;
    const totalEquipWeight = charEquip.reduce((accumulator, obj) => accumulator + (obj.weight * obj.qty), 0);

    return (
      <div style={{ width: '40%' }} className="equipmentSelect">
        <table style={{ width: '100%' }} className="equipmentTable">
          <thead>
            <tr className="equipmentHeader">
              <th>Equipment</th>
              <th style={{ width: '9%' }}>Weight</th>
              <th style={{ width: '9%' }}>Qty</th>
              <th style={{ width: '9%' }}>lbs</th>
              <th style={{ width: '9%' }}>
                {Math.round(totalEquipWeight * 1000) / 1000}
              </th>
            </tr>
          </thead>
          <tbody id="characterEquipmentList">
            <tr className="addEquipment">
              <td>
                <ButtonStandard
                  id="addEquipment"
                  name="Add Equipment"
                  onClick={this.toggleShowEquipment.bind(this)}
                />
                <ButtonStandard
                  id="toggleCustomEquipment"
                  name="Add Custom"
                  onClick={this.toggleCustomEquipment.bind(this)}
                />
                <ButtonStandard
                  id="clearAllEquipment"
                  name="Clear All"
                  onClick={this.handleRemoveAllEquipment.bind(this)}
                />
              </td>
            </tr>
            {charEquip.map(equipObj => (
              <tr key={equipObj.name} className="addedEqipRow">
                <td>
                  <ButtonDeleteX
                    id="removeEquip"
                    onClick={this.handleRemoveEquipment.bind(this, equipObj)}
                  />
                  <span style={{ marginLeft: '1rem' }}>
                    {equipObj.name}
                  </span>
                </td>
                <td>
                  {equipObj.weight}
                </td>
                <td>
                  {equipObj.qty}
                </td>
                <td>
                  {Math.round((equipObj.qty * equipObj.weight) * 100) / 100}
                </td>
                <td className="arrowBox">
                  <ButtonIncrementArrows
                    idUp="qtyUp"
                    idDown="qtyDown"
                    onClickUp={this.handleIncrementEquipmentQty.bind(this, equipObj, 1)}
                    onClickDown={this.handleIncrementEquipmentQty.bind(this, equipObj, -1)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showEquipment
          ? (
            <EquipmentDropdown
              closeShowEquipment={this.closeShowEquipment.bind(this)}
              toggleFilters={this.toggleFilters.bind(this)}
              handleTags={this.handleTags.bind(this)}
              showFilters={showFilters}
              filteredTags={filteredTags}
            />
          )
          : null}
        {showCustomInput
          ? (
            <CustomEquipmentModal
              toggleCustomEquipment={this.toggleCustomEquipment.bind(this)}
            />
          )
          : null
            }
      </div>
    );
  }
}

EquipmentCard.propTypes = {
  gear: PropTypes.shape({
    uniform: PropTypes.string,
    equipment: PropTypes.arrayOf(PropTypes.object),
    firearms: PropTypes.arrayOf(PropTypes.object),
  }),
  characterStats: PropTypes.objectOf(PropTypes.number),
  totalWeight: PropTypes.number,
};

const mapStateToProps = state => ({
  totalWeight: state.totalWeight,
  characterStats: state.characterStats,
  gear: state.gear,
});


export default connect(mapStateToProps, { modifyEquipment, updateAttributes })(EquipmentCard);
