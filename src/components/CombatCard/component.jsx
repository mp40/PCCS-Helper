import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CombatCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleEditValue: false,
    };
  }

  settingAttribute = (key) => {
    this.setState({ toggleEditValue: key });
  }

  handleUpdateAttributes = (attribute, value) => {
    const parsedValue = parseInt(value, 10);
    const { characterStats, totalWeight, updateAttributes } = this.props;
    if (parsedValue < 0 || typeof parsedValue !== 'number' || Number.isNaN(parsedValue)) {
      this.setState({ toggleEditValue: false });
      return;
    }

    const attributeObj = characterStats;
    attributeObj[attribute] = parsedValue;

    updateAttributes(attributeObj, totalWeight);
    this.setState({ toggleEditValue: false });
  }

  render() {
    const { characterStats } = this.props;
    const { toggleEditValue } = this.state;

    return (
      <div>
        <div id="combatLevelInputContainer" className="tableContainerCombat">
          <table className="attributeContainer">
            <tbody>
              <tr>
                <th className="attHeading">Combat</th>
                <th className="attValHeading">Level</th>
              </tr>
              <tr className="attributeRow">
                <td className="attName">Gun</td>
                <td className="attValue" id="updateGun" onClick={this.settingAttribute.bind(this, 'toggleGun')}>
                  {toggleEditValue === 'toggleGun'
                    ? (
                      <input
                        type="text"
                        className="attInput"
                        onKeyUp={(event) => {
                          if (event.keyCode === 13) {
                            this.handleUpdateAttributes('gunLevel', event.target.value);
                          }
                        }}
                      />
                    )
                    : characterStats.gunLevel}
                </td>
              </tr>
              <tr className="attributeRow">
                <td className="attName">Hand</td>
                <td className="attValue" id="updateHand" onClick={this.settingAttribute.bind(this, 'toggleHand')}>
                  {toggleEditValue === 'toggleHand'
                    ? (
                      <input
                        type="text"
                        className="attInput"
                        onKeyUp={(event) => {
                          if (event.keyCode === 13) {
                            this.handleUpdateAttributes('handLevel', event.target.value);
                          }
                        }}
                      />
                    )
                    : characterStats.handLevel}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

CombatCard.propTypes = {
  updateAttributes: PropTypes.func,
  characterStats: PropTypes.objectOf(PropTypes.number),
  totalWeight: PropTypes.number,
};

export default CombatCard;
