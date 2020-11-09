import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GearCard from '../GearCard';
import GearTable from '../GearTable';
import GearRow from '../GearRow';
import EquipmentModal from './modal';
import EquipmentFilter from './filter';

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

  handleRemoveAllTags = () => {
    this.setState({ filteredTags: [] });
  }

  renderEquipmentModal = () => {
    const { equipment } = this.props;
    const { showEquipment, filteredTags } = this.state;

    return showEquipment
    && (
    <EquipmentModal
      equipment={equipment}
      closeShowEquipment={this.closeShowEquipment}
      toggleFilters={this.toggleFilters}
      handleRemoveAllTags={this.handleRemoveAllTags}
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
    const { equipment, removeEquipment, increaseEquipmentQty, decreaseEquipmentQty } = this.props;
    return (
      <tbody>
        <GearRow gear={{ type: 'Equipment', remove: removeEquipment, up: increaseEquipmentQty, down: decreaseEquipmentQty, array: equipment }} />
      </tbody>
    );
  }

  render() {
    const { equipment, removeAllEquipment } = this.props;
    const { showFilters, filteredTags } = this.state;

    const totalEquipWeight = findEquipmentWeight(equipment);
    return (
      <GearCard gearType="equipment" hasButtonFunctions buttonFunctions={[() => this.toggleOnEquipmentCardViews('showEquipment'), () => this.toggleOnEquipmentCardViews('showCustomInput'), () => removeAllEquipment([])]}>
        <GearTable gearHeading="Equipment" totalWeight={Math.round(totalEquipWeight * 1000) / 1000}>
          {this.renderTableBody()}
        </GearTable>
        {this.renderEquipmentModal()}
        {this.renderCustomEquipmentModal()}
        {showFilters && (
        <EquipmentFilter
          filteredTags={filteredTags}
          handleTags={this.handleTags}
          toggleFilters={this.toggleFilters}
        />
        )}
      </GearCard>
    );
  }
}

EquipmentCard.propTypes = {
  decreaseEquipmentQty: PropTypes.func,
  increaseEquipmentQty: PropTypes.func,
  removeAllEquipment: PropTypes.func,
  removeEquipment: PropTypes.func,
  equipment: PropTypes.arrayOf(PropTypes.object),
};

export default EquipmentCard;
