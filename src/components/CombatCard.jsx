import React, { Component } from "react";
import { connect } from "react-redux";
import {updateAttributes} from '../actions'

class CombatCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleEditValue: false,
    }
  }

  settingAttribute(key){
    this.setState({toggleEditValue: key})
  };


  handleUpdateAttributes(attribute, value){
    value = parseInt(value)
    if(value < 0 || typeof value !== 'number' || isNaN(value)) {
      this.setState({toggleEditValue: false})
      return
    }

    const attributeObj = this.props.characterStats
    attributeObj[attribute] = value

    updateAttributes(attributeObj)
    this.setState({toggleEditValue: false})
  }

  render() {
    return (
      <div>
        <div className="tableContainerCombat">
          <table className="attributeContainer">
            <tbody>
              <tr>
                <th className="attHeading">Combat</th>
                <th className="attValHeading">Level</th>
              </tr>
              <tr className="attributeRow">
                <td className="attName">Gun</td>
              <td className="attValue" id="updateGun" onClick={this.settingAttribute.bind(this,'toggleGun')}>
                {this.state.toggleEditValue === 'toggleGun' ?
                <input type="text" className="attInput" onKeyUp={event => {
                  if (event.keyCode === 13) {
                      this.handleUpdateAttributes('gunLevel',event.target.value)
                  }
                }}
                /> :
                this.props.characterStats.gunLevel}
              </td>
              </tr>
              <tr className="attributeRow">
                <td className="attName">Hand</td>
                <td className="attValue" id="updateHand" onClick={this.settingAttribute.bind(this,'toggleHand')}>
                {this.state.toggleEditValue === 'toggleHand' ?
                <input type="text" className="attInput" onKeyUp={event => {
                  if (event.keyCode === 13) {
                      this.handleUpdateAttributes('handLevel',event.target.value)
                  }
                }}
                /> :
                this.props.characterStats.handLevel}
              </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({ 
    currentView: state.currentView,
    totalWeight: state.totalWeight,
    characterStats: {
      str: state.characterStats.str,
      int: state.characterStats.int,
      wil: state.characterStats.wil,
      hlt: state.characterStats.hlt,
      agi: state.characterStats.agi,
      gunLevel: state.characterStats.gunLevel,
      handLevel: state.characterStats.handLevel,
    },
    gear: {
      equipment: state.gear.equipment
    }
   });
}

export default connect(mapStateToProps,{updateAttributes})(CombatCard)