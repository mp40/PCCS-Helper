import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gearShape } from '../../helpers/proptypeShapes';
import GearCard from '../GearCard';
import GearTable from '../GearTable';
import GearRow from '../GearRow';
import EquipmentDropdown from '../EquipmentDropdown';
import CustomEquipmentModal from '../CustomEquipmentModal';
import { findEquipmentWeight } from '../../helpers/actionHelpers';
import { toggleTagsInList } from '../../helpers/equipmentListFunctions';

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

  renderTableBody = () => {
    const { gear, removeEquipment, increaseEquipmentQty, decreaseEquipmentQty } = this.props;
    return (
      <tbody id="characterEquipmentList">
        <GearRow gear={{ type: 'Equipment', remove: removeEquipment, up: increaseEquipmentQty, down: decreaseEquipmentQty, array: gear.equipment }} />
      </tbody>
    );
  }

  render() {
    const { gear, removeAllEquipment } = this.props;
    const totalEquipWeight = findEquipmentWeight(gear.equipment);
    return (
      <GearCard gearType="equipment" buttonFunctions={[() => this.toggleOnEquipmentCardViews('showEquipment'), () => this.toggleOnEquipmentCardViews('showCustomInput'), () => removeAllEquipment([])]}>
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
