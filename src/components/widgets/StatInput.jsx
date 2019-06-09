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
    const { action } = this.props;
    const parsedValue = parseInt(value, 10);
    action(parsedValue);
    this.setState({ toggleInput: false });
  }

  render() {
    const { statLevel, statName, idRef } = this.props;
    const { toggleInput } = this.state;

    return (
      <>
        <tr className="attributeRow">
          <td className="attName">{statName}</td>
          <td className="attValue" id={idRef} onClick={this.handleToggleInput}>
            {toggleInput
              ? (
                <input
                  type="text"
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
  action: PropTypes.func.isRequired,
  statLevel: PropTypes.number,
  statName: PropTypes.string.isRequired,
  idRef: PropTypes.string,
};

export default StatInput;
