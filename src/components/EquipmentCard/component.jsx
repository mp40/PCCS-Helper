import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gearShape } from '../../helpers/proptypeShapes';
import EquipmentDropdown from '../EquipmentDropdown';
import CustomEquipmentModal from '../CustomEquipmentModal';
import ButtonStandard from '../widgets/buttons/ButtonStandard';
import ButtonDeleteX from '../widgets/buttons/ButtonDeleteX';
import ButtonIncrementArrows from '../widgets/buttons/ButtonIncrementArrows';
import { findEquipmentWeight } from '../../helpers/actionHelpers';
import { toggleTagsInList } from '../../helpers/equipmentListFunctions';
import { handleIncrement } from '../../helpers/gaurds';

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

  toggleOffEquipmentCardViews = (viewToToggle) => {
    this.setState({ [viewToToggle]: false });
  }

  toggleOnEquipmentCardViews = (viewToToggle) => {
    this.setState({ [viewToToggle]: true });
  }

  toggleFilters = () => {
    const { showFilters } = this.state;
    this.setState({ showFilters: !showFilters });
  }

  closeShowEquipment = () => {
    this.setState({
      showEquipment: false,
      showFilters: false,
    });
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

  handleIncrementEquipmentQty = (equipmentObject, increment) => {
    const { increaseEquipmentQty, decreaseEquipmentQty } = this.props;
    handleIncrement(equipmentObject, increment, increaseEquipmentQty, decreaseEquipmentQty);
  }

  mapEquipment = () => {
    const { gear } = this.props;
    return gear.equipment.map(equipmentObject => (
      <tr key={equipmentObject.name} className="addedEqipRow">
        <td>
          <ButtonDeleteX
            id="removeEquip"
            onClick={this.handleRemoveEquipment.bind(this, equipmentObject)}
          />
          <span style={{ marginLeft: '1rem' }}>
            {equipmentObject.name}
          </span>
        </td>
        <td>
          {equipmentObject.weight}
        </td>
        <td>
          {equipmentObject.qty}
        </td>
        <td>
          {Math.round((equipmentObject.qty * equipmentObject.weight) * 1000) / 1000}
        </td>
        <td className="arrowBox">
          <ButtonIncrementArrows
            idUp="qtyUp"
            idDown="qtyDown"
            onClickUp={this.handleIncrementEquipmentQty.bind(this, equipmentObject, 'up')}
            onClickDown={this.handleIncrementEquipmentQty.bind(this, equipmentObject, 'down')}
          />
        </td>
      </tr>
    ));
  }

  renderEquipmentDropdown = () => {
    const { showEquipment, showFilters, filteredTags } = this.state;
    return showEquipment
    && (
    <EquipmentDropdown
      closeShowEquipment={this.closeShowEquipment}
      toggleFilters={this.toggleFilters}
      handleTags={this.handleTags}
      showFilters={showFilters}
      filteredTags={filteredTags}
    />
    );
  }

  renderCustomEquipmentModal = () => {
    const { showCustomInput } = this.state;
    return showCustomInput
      && (
        <CustomEquipmentModal
          toggleOffEquipmentCardViews={this.toggleOffEquipmentCardViews}
        />
      );
  }

  renderTableHead = totalEquipWeight => (
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
  )

  renderTableBody = () => (
    <tbody id="characterEquipmentList">
      <tr className="addEquipment">
        <td>
          <ButtonStandard
            id="addEquipment"
            name="Add Equipment"
            onClick={this.toggleOnEquipmentCardViews.bind(this, 'showEquipment')}
          />
          <ButtonStandard
            id="toggleCustomEquipment"
            name="Add Custom"
            onClick={this.toggleOnEquipmentCardViews.bind(this, 'showCustomInput')}
          />
          <ButtonStandard
            id="clearAllEquipment"
            name="Clear All"
            onClick={this.handleRemoveAllEquipment}
          />
        </td>
      </tr>
      {this.mapEquipment()}
    </tbody>
  )

  renderEquipmentCardTable = totalEquipWeight => (
    <table style={{ width: '100%' }} className="equipmentTable">
      {this.renderTableHead(totalEquipWeight)}
      {this.renderTableBody()}
    </table>
  )

  render() {
    const { gear } = this.props;
    const totalEquipWeight = findEquipmentWeight(gear.equipment);

    return (
      <div style={{ width: '40%' }} className="equipmentSelect">
        {this.renderEquipmentCardTable(totalEquipWeight)}
        {this.renderEquipmentDropdown()}
        {this.renderCustomEquipmentModal()}
      </div>
    );
  }
}

EquipmentCard.propTypes = {
  decreaseEquipmentQty: PropTypes.func,
  increaseEquipmentQty: PropTypes.func,
  removeAllEquipment: PropTypes.func,
  removeEquipment: PropTypes.func,
  gear: gearShape,
};

export default EquipmentCard;
