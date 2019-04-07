import React, { Component } from "react";

class AttributeCard extends Component {

  handleUpdateAttribute(attribute, value){
    if(value < 3 || value > 19){
      return
    }
    this.props.updateAttribute(attribute, value)
  }

  render() {
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
              <td className="attValue" id="updateStr" onClick={this.props.settingAttribute.bind(this,'toggleStr')}>
                {this.props.toggleEditValue === 'toggleStr' ?
                <input type="text" className="attInput" onKeyUp={event => {
                  if (event.keyCode === 13) {
                      this.handleUpdateAttribute('str',event.target.value)
                  }
                }}
                /> :
                this.props.characterStats.str}
              </td>
            </tr>
            <tr className="attributeRow">
              <td className="attName">Intelligence</td>
              <td className="attValue" id="updateInt" onClick={this.props.settingAttribute.bind(this,'toggleInt')}>
                {this.props.toggleEditValue === 'toggleInt' ?
                <input type="text" className="attInput" onKeyUp={event => {
                  if (event.keyCode === 13) {
                      this.handleUpdateAttribute('int',event.target.value)
                  }
                }}
                /> :
                this.props.characterStats.int}
              </td>
            </tr>
            <tr className="attributeRow">
              <td className="attName">Health</td>
              <td className="attValue" id="updateHlt" onClick={this.props.settingAttribute.bind(this,'toggleHlt')}>
                {this.props.toggleEditValue === 'toggleHlt' ?
                <input type="text" className="attInput" onKeyUp={event => {
                  if (event.keyCode === 13) {
                      this.handleUpdateAttribute('hlt',event.target.value)
                  }
                }}
                /> :
                this.props.characterStats.hlt}
              </td>
            </tr>
            <tr className="attributeRow">
              <td className="attName">Willpower</td>
              <td className="attValue" id="updateWil" onClick={this.props.settingAttribute.bind(this,'toggleWil')}>
                {this.props.toggleEditValue === 'toggleWil' ?
                <input type="text" className="attInput" onKeyUp={event => {
                  if (event.keyCode === 13) {
                      this.handleUpdateAttribute('wil',event.target.value)
                  }
                }}
                /> :
                this.props.characterStats.wil}
              </td>
            </tr>
            <tr className="attributeRow">
              <td className="attName">Agility</td>
              <td className="attValue" id="updateAgi" onClick={this.props.settingAttribute.bind(this,'toggleAgi')}>
                {this.props.toggleEditValue === 'toggleAgi' ?
                <input type="text" className="attInput" onKeyUp={event => {
                  if (event.keyCode === 13) {
                      this.handleUpdateAttribute('agi',event.target.value)
                  }
                }}
                /> :
                this.props.characterStats.agi}
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AttributeCard;