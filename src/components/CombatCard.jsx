import React, { Component } from "react";

class CombatCard extends Component {

  handleUpdateAttribute(attribute, value){
    if(value < 0){
      return
    }
    this.props.updateAttribute(attribute, value)
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
              <td className="attValue" id="updateGun" onClick={this.props.settingAttribute.bind(this,'toggleGun')}>
                {this.props.toggleEditValue === 'toggleGun' ?
                <input type="text" className="attInput" onKeyUp={event => {
                  if (event.keyCode === 13) {
                      this.handleUpdateAttribute('gunLevel',event.target.value)
                  }
                }}
                /> :
                this.props.characterStats.gunLevel}
              </td>
              </tr>
              <tr className="attributeRow">
                <td className="attName">Hand</td>
                <td className="attValue" id="updateHand" onClick={this.props.settingAttribute.bind(this,'toggleHand')}>
                {this.props.toggleEditValue === 'toggleHand' ?
                <input type="text" className="attInput" onKeyUp={event => {
                  if (event.keyCode === 13) {
                      this.handleUpdateAttribute('handLevel',event.target.value)
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

export default CombatCard;