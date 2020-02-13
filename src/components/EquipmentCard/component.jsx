import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gearShape } from '../../helpers/proptypeShapes';
import EquipmentDropdown from '../EquipmentDropdown';
import CustomEquipmentModal from '../CustomEquipmentModal';
import ButtonDeleteX from '../widgets/buttons/ButtonDeleteX';
import ButtonIncrementArrows from '../widgets/buttons/ButtonIncrementArrows';
import { findEquipmentWeight } from '../../helpers/actionHelpers';
import { toggleTagsInList } from '../../helpers/equipmentListFunctions';
import { handleIncrement } from '../../helpers/gaurds';

import GearCard from '../GearCard';
import GearTable from '../GearTable';

import './EquipmentCard.css';

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
            onClick={() => this.handleRemoveEquipment(equipmentObject)}
          />
          <span>
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
            onClickUp={() => this.handleIncrementEquipmentQty(equipmentObject, 'up')}
            onClickDown={() => this.handleIncrementEquipmentQty(equipmentObject, 'down')}
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

  renderTableBody = () => (
    <tbody id="characterEquipmentList">
      <tr className="addEquipment" />
      {this.mapEquipment()}
    </tbody>
  )

  render() {
    const { gear } = this.props;
    const totalEquipWeight = findEquipmentWeight(gear.equipment);
    return (
      <GearCard gearType="equipment" buttonFunctions={[() => this.toggleOnEquipmentCardViews('showEquipment'), () => this.toggleOnEquipmentCardViews('showCustomInput'), () => this.handleRemoveAllEquipment()]}>
        <GearTable gearHeading="Equipment" totalWeight={Math.round(totalEquipWeight * 1000) / 1000}>
          {this.renderTableBody()}
        </GearTable>
        {this.renderEquipmentDropdown()}
        {this.renderCustomEquipmentModal()}
      </GearCard>
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
