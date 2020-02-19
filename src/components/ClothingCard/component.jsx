import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gearShape } from '../../helpers/proptypeShapes';
import { findUniformWeight } from '../../helpers/actionHelpers';

import './ClothingCard.css';

const renderTableHeading = () => (
  <tr className="uniformTableHeader">
    <th className="--tableHeading">Uniform</th>
    <th className="--tableValue">lbs</th>
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
      <table className="--tableContainer --card">
        <thead>
          {renderTableHeading()}
          <tr
            className="--selectableRow uniformStats"
            onClick={this.toggleSelectUniform}
          >
            <td className="currentUniform">{currentUniform}</td>
            <td className="uniformWeight">{currentUniformWeight}</td>
          </tr>
        </thead>
      </table>
    )

    renderUniformSelection = () => (
      <div className="--tableContainer --card">
        <table>
          <thead>
            {renderTableHeading()}
          </thead>
        </table>
        <div>
          <select className="uniformDropdownSelector" onChange={this.handleChangeUniform}>
            {['Select Uniform', 'Normal', 'Tropical', 'Winter'].map((value) => (
              <option key={value}>{value}</option>
            ))}
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
