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

  handleUpdateValue = () => {
    /*
    // create action/reducer for update str, ect and pass it here as prop
    const { updateStat } = this.props;
    updateStat();
    this.setState({ toggleInput: !this.setState.toggleInput });
    */
  }

  render() {
    const { statLevel, statName, id } = this.props;
    const { toggleInput } = this.state;

    return (
      <>
        <tr className="attributeRow">
          <td className="attName">{statName}</td>
          <td className="attValue" id={id} onClick={this.handleToggleInput}>
            {toggleInput
              ? (
                <input
                  type="number"
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
  statLevel: PropTypes.number.isRequired,
  statName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default StatInput;
