import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { renderModificationTextInput } from '../widgets/renderWidgets';
import ButtonStandard from '../widgets/buttons/ButtonStandard';

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
    const { handleModification } = this.props;

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
    handleModification(modNote);
  }

  render() {
    const { capacity, weight, warning } = this.state;

    return (
      <div className="modifyWeightForm">
        <div>Modify Weapon Weight</div>
        {renderModificationTextInput('Note', 'modifyWeightNoteInput', capacity, this.handleWeightNote.bind(this))}
        {renderModificationTextInput('Weight', 'modifyWeightValueInput', weight, this.handleWeightNumber.bind(this))}
        <ButtonStandard
          name="Submit"
          id="submitModifiedWeight"
          onClick={this.handleSubmit}
        />
        {warning
          && <div style={{ color: 'red', fontWeight: 'bold' }}>Please Enter Valid Data</div>
        }
      </div>
    );
  }
}


WeaponsCardModifyWeight.propTypes = {
  handleModification: PropTypes.func,
};

export default WeaponsCardModifyWeight;
