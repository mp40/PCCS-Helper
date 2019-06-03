import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeUniform } from '../actions';
import { calculateTotalWeight, findUniformWeight } from '../helpers/actionHelpers';

import './ClothingCard.css';

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
      const { gear, characterStats } = this.props;
      const newUniform = event.target.value;
      const newWeight = calculateTotalWeight(newUniform, gear.equipment, gear.firearms);
      const attributeObj = characterStats;

      this.props.changeUniform(newUniform, newWeight, attributeObj);
      this.setState({ showUniformSelect: false });
    }

    render() {
      const { gear } = this.props;
      const { showUniformSelect } = this.state;
      const currentUniform = gear.uniform;
      const currentUniformWeight = findUniformWeight(currentUniform);

      if (!showUniformSelect) {
        return (
          <table className="uniformTableContainer">
            <thead>
              <tr className="uniformTableHeader">
                <th className="uniformHeading">Uniform</th>
                <th className="uniformValHeading">lbs</th>
              </tr>

              <tr
                className="uniformStats"
                onClick={this.toggleSelectUniform}
              >
                <td id="currentUniform">{currentUniform}</td>
                <td id="uniformWeight" style={{ textAlign: 'center' }}>{currentUniformWeight}</td>
              </tr>
            </thead>
          </table>
        );
      }

      if (showUniformSelect) {
        return (
          <div className="uniformTableContainer">
            <table>
              <thead>
                <tr className="uniformTableHeader">
                  <th className="uniformHeading">Uniform</th>
                  <th className="uniformValHeading">lbs</th>
                </tr>
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
        );
      }
      return null;
    }
}

ClothingCard.propTypes = {
  gear: PropTypes.shape({
    uniform: PropTypes.string,
    equipment: PropTypes.arrayOf(PropTypes.object),
    firearms: PropTypes.arrayOf(PropTypes.object),
  }),
  characterStats: PropTypes.objectOf(PropTypes.number),
};

const mapStateToProps = state => ({
  totalWeight: state.totalWeight,
  characterStats: state.characterStats,
  gear: state.gear,
});

export default connect(mapStateToProps, { changeUniform })(ClothingCard);
