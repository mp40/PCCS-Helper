import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { modifyEquipment } from '../actions';
import { addEquipment } from '../helpers/actionHelpers';

import ButtonStandard from '../helpers/buttons/ButtonStandard';

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

  handleChange = (keyToChange, event) => {
    if (keyToChange === 'name') {
      this.setState({ equipmentName: event.target.value });
    }
    if (keyToChange === 'weight') {
      this.setState({ equipmentWeight: event.target.value });
    }
  }

  submitEquipment = () => {
    const { gear, totalWeight, characterStats } = this.props;
    const { equipmentName, equipmentWeight } = this.state;
    const name = equipmentName;
    const weight = equipmentWeight * 1;

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

    const arrayContainsObj = gear.equipment.filter(obj => obj.name === name);

    if (arrayContainsObj.length) {
      this.setState({ errorMsgExistsInArray: true });
      return;
    }
    const equipObj = {
      name,
      weight,
      tags: ['Custom'],
    };

    const newData = addEquipment(totalWeight, gear.equipment, equipObj);
    this.props.modifyEquipment(newData.totalWeight, newData.equipArray, characterStats);
    this.props.toggleCustomEquipment();
  }

  render() {
    const { toggleCustomEquipment } = this.props;
    const { equipmentName, equipmentWeight, errorMsgInvalidEntry, errorMsgExistsInArray } = this.state;

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
                onClick={toggleCustomEquipment}
              />
            </div>

            <div className="subContainer">
              <div>Equipment Name</div>
              <input
                type="text"
                autoComplete="off"
                id="equipNameInput"
                className="equipInput"
                value={equipmentName}
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
                value={equipmentWeight}
                onChange={this.handleChange.bind(this, 'weight')}
              />
            </div>

            <ButtonStandard
              id="submitCustomEquipButton"
              name="Submit"
              onClick={this.submitEquipment}
            />

            {errorMsgInvalidEntry
              && <div style={{ color: 'red' }}>Please Enter Valid Equipment Name and Weight</div>
            }

            {errorMsgExistsInArray
              && <div style={{ color: 'red' }}>Already In List, Please Enter Valid Equipment Name</div>
            }

          </div>
        </div>
      </div>
    );
  }
}

CustomEquipmentModal.propTypes = {
  gear: PropTypes.shape({
    uniform: PropTypes.string,
    equipment: PropTypes.arrayOf(PropTypes.object),
    firearms: PropTypes.arrayOf(PropTypes.object),
  }),
  characterStats: PropTypes.objectOf(PropTypes.number),
  totalWeight: PropTypes.number,
  toggleCustomEquipment: PropTypes.func,

};

const mapStateToProps = state => ({
  totalWeight: state.totalWeight,
  characterStats: state.characterStats,
  gear: state.gear,
});

export default connect(mapStateToProps, { modifyEquipment })(CustomEquipmentModal);
