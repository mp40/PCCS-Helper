import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonStandard from '../../helpers/buttons/ButtonStandard';
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
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
          <div style={{ width: '50%' }}>Capacity</div>
          <input
            style={{ width: '30%' }}
            type="text"
            autoComplete="off"
            id="customMagCapacityInput"
            value={capacity}
            onChange={this.handleCapacity}
          />
        </div>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
          <div>Weight</div>
          <input
            style={{ width: '30%' }}
            type="text"
            autoComplete="off"
            id="customMagWeightInput"
            value={weight}
            onChange={this.handleWeight}
          />
        </div>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
          <div>Type</div>
          <input
            style={{ width: '30%' }}
            type="text"
            autoComplete="off"
            id="customMagTypeInput"
            value={type}
            onChange={this.handleType}
          />
        </div>
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
