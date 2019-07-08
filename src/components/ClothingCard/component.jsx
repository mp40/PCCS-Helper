import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gearShape } from '../../helpers/proptypeShapes';
import { findUniformWeight } from '../../helpers/actionHelpers';

import './ClothingCard.css';

const renderTableHeading = () => (
  <tr className="uniformTableHeader">
    <th className="uniformHeading">Uniform</th>
    <th className="uniformValHeading">lbs</th>
  </tr>
);

class ClothingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUniformSelect: false,
    };
  }

    toggleSelectUniform = () => {
      this.setState({ showUniformSelect: true });
    }

    handleChangeUniform = (event) => {
      const { changeUniform } = this.props;
      const newUniform = event.target.value;
      changeUniform(newUniform);
      this.setState({ showUniformSelect: false });
    }

    renderUniformCard = (currentUniform, currentUniformWeight) => (
      <table className="uniformTableContainer">
        <thead>
          {renderTableHeading()}
          <tr
            className="uniformStats"
            onClick={this.toggleSelectUniform}
          >
            <td id="currentUniform">{currentUniform}</td>
            <td id="uniformWeight" style={{ textAlign: 'center' }}>{currentUniformWeight}</td>
          </tr>
        </thead>
      </table>
    )

    renderUniformSelection = () => (
      <div className="uniformTableContainer">
        <table>
          <thead>
            {renderTableHeading()}
          </thead>
        </table>
        <div>
          <select id="uniformDropdownSelector" onChange={this.handleChangeUniform}>
            <option>Select Uniform</option>
            <option>Normal</option>
            <option>Tropical</option>
            <option>Winter</option>
          </select>
        </div>
      </div>
    )

    render() {
      const { gear } = this.props;
      const { showUniformSelect } = this.state;
      const currentUniform = gear.uniform;
      const currentUniformWeight = findUniformWeight(currentUniform);

      if (!showUniformSelect) {
        return (
          this.renderUniformCard(currentUniform, currentUniformWeight)
        );
      }
      return (
        this.renderUniformSelection()
      );
    }
}

ClothingCard.propTypes = {
  changeUniform: PropTypes.func,
  gear: gearShape,
};

export default ClothingCard;
