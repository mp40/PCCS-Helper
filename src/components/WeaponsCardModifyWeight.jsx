import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonStandard from './buttons/ButtonStandard';

class WeaponsCardModifyWeight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modWeightNote: '',
      modWeightNumber: '',
      warning: false,
    };
  }

  handleWeightNote = (event) => {
    this.setState({ modWeightNote: event.target.value });
  }

  handleWeightNumber = (event) => {
    this.setState({ modWeightNumber: event.target.value });
  }

  handleSubmit = () => {
    const { modWeightNumber, modWeightNote } = this.state;
    const { handleModifyFirearmWeight } = this.props;

    if (!Number(modWeightNumber)) {
      this.setState({ warning: true });
      return;
    }
    if (modWeightNote.length < 1) {
      this.setState({ warning: true });
      return;
    }
    const modNote = {
      note: modWeightNote,
      weightMod: Number(modWeightNumber),
    };
    handleModifyFirearmWeight(modNote);
  }

  render() {
    const { capacity, weight, warning } = this.state;

    return (
      <div className="modifyWeightForm">
        <div>Modify Weapon Weight</div>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
          <div style={{ width: '50%' }}>Note</div>
          <input
            style={{ width: '30%' }}
            type="text"
            autoComplete="off"
            id="modifyWeightNoteInput"
            value={capacity}
            onChange={this.handleWeightNote.bind(this)}
          />
        </div>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
          <div>Weight</div>
          <input
            style={{ width: '30%' }}
            type="text"
            autoComplete="off"
            id="modifyWeightValueInput"
            value={weight}
            onChange={this.handleWeightNumber.bind(this)}
          />
        </div>
        <ButtonStandard
          name="Submit"
          id="submitModifiedWeight"
          onClick={this.handleSubmit}
        />
        {warning
          ? <div style={{ color: 'red', fontWeight: 'bold' }}>Please Enter Valid Data</div>
          : null}
      </div>
    );
  }
}


WeaponsCardModifyWeight.propTypes = {
  handleModifyFirearmWeight: PropTypes.func,
};

export default WeaponsCardModifyWeight;
