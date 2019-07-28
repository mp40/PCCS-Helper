import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { renderModificationTextInput } from '../widgets/renderWidgets';
import ButtonStandard from '../widgets/buttons/ButtonStandard';
import '../WeaponsCard/WeaponsCard.css';

class WeaponsCardCustomMag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capacity: '',
      weight: '',
      type: '',
      warning: false,
    };
  }

  handleCapacity = (event) => {
    this.setState({ capacity: event.target.value });
  }

  handleWeight = (event) => {
    this.setState({ weight: event.target.value });
  }

  handleType = (event) => {
    this.setState({ type: event.target.value });
  }

  handleSubmit = () => {
    const { handleModification } = this.props;
    const { weight, capacity, type } = this.state;
    if (!Number(weight)) {
      this.setState({ warning: true });
      return;
    }
    if (!Number(capacity) || capacity % 1 !== 0) {
      this.setState({ warning: true });
      return;
    }
    if (type.length < 2) {
      this.setState({ warning: true });
      return;
    }

    const newCustomMag = {
      type,
      weight: Number(weight),
      cap: Number(capacity),
      qty: 0,
      custom: true,
    };
    handleModification(newCustomMag);
  }

  render() {
    const { capacity, weight, type, warning } = this.state;
    const { toggleOffWeaponCardViews } = this.props;

    return (
      <div className="customMagazineForm">
        <div>Custom Magazine Details</div>
        {renderModificationTextInput('Capacity', 'customMagCapacityInput', capacity, this.handleCapacity)}
        {renderModificationTextInput('Weight', 'customMagWeightInput', weight, this.handleWeight)}
        {renderModificationTextInput('Type', 'customMagTypeInput', type, this.handleType)}
        <ButtonStandard
          name="Submit"
          id="submitCustomMag"
          onClick={this.handleSubmit}
        />
        <ButtonStandard
          name="Back"
          id="backCustomMag"
          onClick={() => toggleOffWeaponCardViews('createCustomMag')}
        />
        {warning
          && <div style={{ color: 'red', fontWeight: 'bold' }}>Please Enter Valid Data</div>
        }
      </div>
    );
  }
}

WeaponsCardCustomMag.propTypes = {
  handleModification: PropTypes.func,
  toggleOffWeaponCardViews: PropTypes.func,
};

export default WeaponsCardCustomMag;
