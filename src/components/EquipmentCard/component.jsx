import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gearShape } from '../../helpers/proptypeShapes';
import EquipmentDropdown from '../EquipmentDropdown';
import CustomEquipmentModal from '../CustomEquipmentModal';
import ButtonStandard from '../widgets/buttons/ButtonStandard';
import ButtonDeleteX from '../widgets/buttons/ButtonDeleteX';
import ButtonIncrementArrows from '../widgets/buttons/ButtonIncrementArrows';
import { incrementEquipmentQty, findEquipmentWeight } from '../../helpers/actionHelpers';
import { toggleTagsInList } from '../../helpers/equipmentListFunctions';

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

  toggleShowEquipment = () => {
    const { showEquipment } = this.state;
    this.setState({ showEquipment: !showEquipment });
  }

  toggleCustomEquipment = () => {
    const { showCustomInput } = this.state;
    this.setState({ showCustomInput: !showCustomInput });
  }

  closeShowEquipment = () => {
    this.setState({
      showEquipment: false,
      showFilters: false,
    });
  }

  toggleFilters = () => {
    const { showFilters } = this.state;
    this.setState({ showFilters: !showFilters });
  }

  handleTags = (tag) => {
    const { filteredTags } = this.state;
    this.setState({ filteredTags: toggleTagsInList(filteredTags, tag) });
  }

  handleRemoveEquipment = (equipmentToRemove) => {
    const { removeEquipment } = this.props;
    removeEquipment(equipmentToRemove);
  }

  handleRemoveAllEquipment = () => {
    const { removeAllEquipment } = this.props;
    removeAllEquipment([]);
  }

  handleIncrementEquipmentQty = (equipObj, modifier) => {
    const { totalWeight, gear, characterStats, modifyEquipment } = this.props;
    const newData = incrementEquipmentQty(totalWeight, gear.equipment, equipObj, modifier);
    modifyEquipment(newData.totalWeight, newData.equipArray, characterStats);
  }


  render() {
    const { showEquipment, showCustomInput, showFilters, filteredTags } = this.state;
    const { gear } = this.props;
    const charEquip = gear.equipment;
    const totalEquipWeight = findEquipmentWeight(gear.equipment);

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
                  onClick={this.toggleShowEquipment}
                />
                <ButtonStandard
                  id="toggleCustomEquipment"
                  name="Add Custom"
                  onClick={this.toggleCustomEquipment}
                />
                <ButtonStandard
                  id="clearAllEquipment"
                  name="Clear All"
                  onClick={this.handleRemoveAllEquipment}
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
          && (
          <EquipmentDropdown
            closeShowEquipment={this.closeShowEquipment}
            toggleFilters={this.toggleFilters}
            handleTags={this.handleTags}
            showFilters={showFilters}
            filteredTags={filteredTags}
          />
          )
        }
        {showCustomInput
          && (
            <CustomEquipmentModal
              toggleCustomEquipment={this.toggleCustomEquipment}
            />
          )
        }
      </div>
    );
  }
}

EquipmentCard.propTypes = {
  removeAllEquipment: PropTypes.func,
  removeEquipment: PropTypes.func,
  modifyEquipment: PropTypes.func,
  gear: gearShape,
  characterStats: PropTypes.objectOf(PropTypes.number),
  totalWeight: PropTypes.number,
};

export default EquipmentCard;
