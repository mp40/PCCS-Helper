import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonStandard from '../widgets/buttons/ButtonStandard';
import '../WeaponsCard/WeaponsCard.css';

const renderTextInput = (heading, idRef, value, onChange) => (
  <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
    <div>{heading}</div>
    <input
      style={{ width: '30%' }}
      type="text"
      autoComplete="off"
      id={idRef}
      value={value}
      onChange={onChange}
    />
  </div>
);

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
    const { handleAddCustomMag } = this.props;
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
    handleAddCustomMag(newCustomMag);
  }

  render() {
    const { capacity, weight, type, warning } = this.state;

    return (
      <div className="customMagazineForm">
        <div>Custom Magazine Details</div>
        {renderTextInput('Capacity', 'customMagCapacityInput', capacity, this.handleCapacity)}
        {renderTextInput('Weight', 'customMagWeightInput', weight, this.handleWeight)}
        {renderTextInput('Type', 'customMagTypeInput', type, this.handleType)}
        <ButtonStandard
          name="Submit"
          id="submitCustomMag"
          onClick={this.handleSubmit}
        />
        {warning
          && <div style={{ color: 'red', fontWeight: 'bold' }}>Please Enter Valid Data</div>
        }
      </div>
    );
  }
}

WeaponsCardCustomMag.propTypes = {
  handleAddCustomMag: PropTypes.func,
};

export default WeaponsCardCustomMag;
