/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleInput: false,
    };
  }

  handleToggleInput = () => {
    this.setState({ toggleInput: !this.setState.toggleInput });
  }

  handleUpdateValue = (value) => {
    const { action, isValid } = this.props;
    const parsedValue = parseInt(value, 10);
    if (isValid(parsedValue)) {
      action(parsedValue);
    }
    this.setState({ toggleInput: false });
  }

  render() {
    const { statLevel, statName, idRef } = this.props;
    const { toggleInput } = this.state;

    return (
      <>
        <tr className="--tableRow statInputTableRow">
          <td className="--tableHeading attName">{statName}</td>
          <td className="attValue" id={idRef} onClick={this.handleToggleInput}>
            {toggleInput
              ? (
                <input
                  type="text"
                  autoFocus
                  className="attInput"
                  onKeyUp={(event) => {
                    if (event.key === 'Enter') {
                      this.handleUpdateValue(event.target.value);
                    }
                  }}
                />
              )
              : statLevel}
          </td>
        </tr>

      </>
    );
  }
}


StatInput.propTypes = {
  isValid: PropTypes.func,
  action: PropTypes.func,
  statLevel: PropTypes.number,
  statName: PropTypes.string,
  idRef: PropTypes.string,
};

export default StatInput;
