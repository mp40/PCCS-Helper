import React, { Component } from "react";

class CombatCard extends Component {

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
              <td id="updateGun" onClick={this.props.settingAttribute.bind(this,'toggleGun')}>
                {this.props.toggleEditValue === 'toggleGun' ?
                <input type="text" className="attInput" onKeyUp={event => {
                  if (event.keyCode === 13) {
                      this.props.updateAttribute('gunLevel',event.target.value)
                  }
                }}
                /> :
                this.props.gunLevel}
              </td>
              </tr>
              <tr className="attributeRow">
                <td className="attName">Hand</td>
                <td id="updateHand" onClick={this.props.settingAttribute.bind(this,'toggleHand')}>
                {this.props.toggleEditValue === 'toggleHand' ?
                <input type="text" className="attInput" onKeyUp={event => {
                  if (event.keyCode === 13) {
                      this.props.updateAttribute('handLevel',event.target.value)
                  }
                }}
                /> :
                this.props.handLevel}
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