import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gearShape } from '../../helpers/proptypeShapes';

import ButtonStandard from '../widgets/buttons/ButtonStandard';
import TextInput from '../widgets/TextInput';
import { isNotValidObjectToAdd, isValidCustomEquipmentInput } from '../../helpers/gaurds';
import { correctFloatingPoint } from '../../reducers/reducerHelpers';

import './CustomEquipmentModal.css';

export const createValidEqipmentObject = (name, weight) => ({
  name,
  weight,
  qty: 1,
  tags: ['Custom'],
});

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

  handleChange = (keyToChange, event) => {
    if (keyToChange === 'name') {
      this.setState({ equipmentName: event.target.value });
    }
    if (keyToChange === 'weight') {
      this.setState({ equipmentWeight: event.target.value });
    }
  }

  submitEquipment = () => {
    const { gear, toggleOffEquipmentCardViews, addEquipment } = this.props;
    const { equipmentName, equipmentWeight } = this.state;
    const name = equipmentName;
    const weight = correctFloatingPoint(parseFloat(equipmentWeight));

    if (!isValidCustomEquipmentInput(name, weight)) {
      this.setState({ errorMsgInvalidEntry: true });
      return;
    }

    if (isNotValidObjectToAdd(gear.equipment, { name })) {
      this.setState({ errorMsgExistsInArray: true });
      return;
    }

    addEquipment(createValidEqipmentObject(name, weight));
    toggleOffEquipmentCardViews('showCustomInput');
  }

renderHeading = (toggleOffEquipmentCardViews) => (
  <div className="subContainer">
    <div className="customEquipmentListHeader">
      Add Equipment To List
    </div>
    <ButtonStandard
      style={{ marginTop: '.5rem' }}
      name="Cancel"
      onClick={() => toggleOffEquipmentCardViews('showCustomInput')}
      className="cancelCustomInput"
    />
  </div>
)

  renderTextInput = (heading, idRef, equipmentValue, onChange) => (
    <TextInput
      heading={heading}
      idRef={idRef}
      equipmentValue={equipmentValue}
      onChange={onChange}
    />
  )

  render() {
    const { toggleOffEquipmentCardViews } = this.props;
    const { equipmentName, equipmentWeight, errorMsgInvalidEntry, errorMsgExistsInArray } = this.state;

    return (
      <div className="customEquipmentModalContainer">
        <div className="--card customEquipmentListCard">
          <div className="customContainer">
            {this.renderHeading(toggleOffEquipmentCardViews)}
            {this.renderTextInput('Equipment Name', 'equipNameInput', equipmentName, this.handleChange.bind(this, 'name'))}
            {this.renderTextInput('Equipment Weight (lbs)', 'equipWeightInput', equipmentWeight, this.handleChange.bind(this, 'weight'))}

            <ButtonStandard
              id="submitCustomEquipButton"
              name="Submit"
              onClick={this.submitEquipment}
            />

            {errorMsgInvalidEntry
              && <div style={{ color: 'red' }}>Please Enter Valid Equipment Name and Weight</div>}

            {errorMsgExistsInArray
              && <div style={{ color: 'red' }}>Already In List, Please Enter Valid Equipment Name</div>}

          </div>
        </div>
      </div>
    );
  }
}

CustomEquipmentModal.propTypes = {
  addEquipment: PropTypes.func,
  gear: gearShape,
  toggleOffEquipmentCardViews: PropTypes.func,

};

export default CustomEquipmentModal;
