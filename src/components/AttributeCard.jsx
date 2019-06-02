import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateAttributes } from '../actions';

class AttributeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleEditValue: false,
    };
  }

  settingAttribute(key) {
    this.setState({ toggleEditValue: key });
  }

  handleUpdateAttributes(attribute, value) {
    const { characterStats, totalWeight } = this.props;
    const parsedValue = parseInt(value, 10);

    if (parsedValue < 3 || parsedValue > 18) {
      this.setState({ toggleEditValue: false });
      return;
    }
    if (typeof parsedValue !== 'number' || Number.isNaN(parsedValue)) {
      this.setState({ toggleEditValue: false });
      return;
    }
    const attributeObj = characterStats;
    attributeObj[attribute] = parsedValue;

    this.props.updateAttributes(attributeObj, totalWeight);
    this.setState({ toggleEditValue: false });
  }

  render() {
    const { characterStats } = this.props;
    const { toggleEditValue } = this.state;

    return (
      <div>
        <div className="tableContainer">
          <table className="attributeContainer">
            <tbody>
              <tr>
                <th className="attHeading">Attribute</th>
                <th className="attValHeading">Value</th>
              </tr>
              <tr className="attributeRow">
                <td className="attName">Strength</td>
                <td className="attValue" id="updateStr" onClick={this.settingAttribute.bind(this, 'toggleStr')}>
                  {toggleEditValue === 'toggleStr'
                    ? (
                      <input
                        type="text"
                        className="attInput"
                        onKeyUp={(event) => {
                          if (event.keyCode === 13) {
                            this.handleUpdateAttributes('str', event.target.value);
                          }
                        }}
                      />
                    )
                    : characterStats.str}
                </td>
              </tr>
              <tr className="attributeRow">
                <td className="attName">Intelligence</td>
                <td className="attValue" id="updateInt" onClick={this.settingAttribute.bind(this, 'toggleInt')}>
                  {toggleEditValue === 'toggleInt'
                    ? (
                      <input
                        type="text"
                        className="attInput"
                        onKeyUp={(event) => {
                          if (event.keyCode === 13) {
                            this.handleUpdateAttributes('int', event.target.value);
                          }
                        }}
                      />
                    )
                    : characterStats.int}
                </td>
              </tr>
              <tr className="attributeRow">
                <td className="attName">Health</td>
                <td className="attValue" id="updateHlt" onClick={this.settingAttribute.bind(this, 'toggleHlt')}>
                  {toggleEditValue === 'toggleHlt'
                    ? (
                      <input
                        type="text"
                        className="attInput"
                        onKeyUp={(event) => {
                          if (event.keyCode === 13) {
                            this.handleUpdateAttributes('hlt', event.target.value);
                          }
                        }}
                      />
                    )
                    : characterStats.hlt}
                </td>
              </tr>
              <tr className="attributeRow">
                <td className="attName">Willpower</td>
                <td className="attValue" id="updateWil" onClick={this.settingAttribute.bind(this, 'toggleWil')}>
                  {toggleEditValue === 'toggleWil'
                    ? (
                      <input
                        type="text"
                        className="attInput"
                        onKeyUp={(event) => {
                          if (event.keyCode === 13) {
                            this.handleUpdateAttributes('wil', event.target.value);
                          }
                        }}
                      />
                    )
                    : characterStats.wil}
                </td>
              </tr>
              <tr className="attributeRow">
                <td className="attName">Agility</td>
                <td className="attValue" id="updateAgi" onClick={this.settingAttribute.bind(this, 'toggleAgi')}>
                  {toggleEditValue === 'toggleAgi'
                    ? (
                      <input
                        type="text"
                        className="attInput"
                        onKeyUp={(event) => {
                          if (event.keyCode === 13) {
                            this.handleUpdateAttributes('agi', event.target.value);
                          }
                        }}
                      />
                    )
                    : characterStats.agi}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

AttributeCard.propTypes = {
  characterStats: PropTypes.objectOf(PropTypes.number),
  totalWeight: PropTypes.number,
  updateAttributes: PropTypes.func,
};

const mapStateToProps = state => ({
  totalWeight: state.totalWeight,
  characterStats: state.characterStats,
  gear: {
    equipment: state.gear.equipment,
  },
});

export default connect(mapStateToProps, { updateAttributes })(AttributeCard);
