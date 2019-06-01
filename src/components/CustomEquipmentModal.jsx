import React, { Component } from 'react';
import { connect } from 'react-redux';
import { modifyEquipment } from '../actions';
import { addEquipment } from '../helpers/actionHelpers';

import ButtonStandard from './buttons/ButtonStandard';

import './CustomEquipmentModal.css';

class CustomEquipmentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equipmentName: '',
      equipmentWeight: '',
      errorMsgInvalidEntry: false,
      errorMsgExistsInArray: false,
    };
  }

  handleChange(keyToChange, event) {
    if (keyToChange === 'name') {
      this.setState({ equipmentName: event.target.value });
    }
    if (keyToChange === 'weight') {
      this.setState({ equipmentWeight: event.target.value });
    }
  }

  submitEquipment() {
    const name = this.state.equipmentName;
    const weight = this.state.equipmentWeight * 1;

    const isValidInput = (
      name.length > 0
            && weight > 0
            && typeof name === 'string'
            && typeof weight === 'number'
    );

    if (isValidInput === false) {
      this.setState({ errorMsgInvalidEntry: true });
      return;
    }

    const arrayContainsObj = this.props.gear.equipment.filter(obj => obj.name === name);

    if (arrayContainsObj.length) {
      this.setState({ errorMsgExistsInArray: true });
      return;
    }
    const equipObj = {
      name,
      weight,
      tags: ['Custom'],
    };

    const newData = addEquipment(this.props.totalWeight, this.props.gear.equipment, equipObj);
    this.props.modifyEquipment(newData.totalWeight, newData.equipArray, this.props.characterStats);
    this.props.toggleCustomEquipment();
  }

  render() {
    return (
      <div className="customEquipmentModalContainer">
        <div className="customEquipmentListCard">
          <div className="customContainer">

            <div className="subContainer">
              <div className="customEquipmentListHeader">
                            Add Equipment To List
              </div>
              <ButtonStandard
                style={{ marginTop: '.5rem' }}
                name="Cancel"
                onClick={this.props.toggleCustomEquipment.bind(this)}
              />
            </div>

            <div className="subContainer">
              <div>Equipment Name</div>
              <input
                type="text"
                autoComplete="off"
                id="equipNameInput"
                className="equipInput"
                value={this.state.equipmentName}
                onChange={this.handleChange.bind(this, 'name')}
              />
            </div>

            <div className="subContainer">
              <div>Equipment Weight (lbs)</div>
              <input
                type="text"
                autoComplete="off"
                id="equipWeightInput"
                className="equipInput"
                value={this.state.equipmentWeight}
                onChange={this.handleChange.bind(this, 'weight')}
              />
            </div>

            <ButtonStandard
              id="submitCustomEquipButton"
              name="Submit"
              onClick={this.submitEquipment.bind(this)}
            />

            {this.state.errorMsgInvalidEntry
              ? <div style={{ color: 'red' }}>Please Enter Valid Equipment Name and Weight</div>
              : null
                    }

            {this.state.errorMsgExistsInArray
              ? <div style={{ color: 'red' }}>Already In List, Please Enter Valid Equipment Name</div>
              : null
                    }

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  totalWeight: state.totalWeight,
  characterStats: state.characterStats,
  gear: state.gear,
});

export default connect(mapStateToProps, { modifyEquipment })(CustomEquipmentModal);
