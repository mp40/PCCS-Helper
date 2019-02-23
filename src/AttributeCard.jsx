import React, { Component } from "react";

class AttributeCard extends Component {

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
              <td onClick={this.props.settingAttribute.bind(this,'toggleStr')}>
                {this.props.toggleEditValue === 'toggleStr' ?
                <input id="updateStr" type="text" className="attInput" onKeyUp={event => {
                  if (event.keyCode === 13) {
                      this.props.updateAttribute('str',event.target.value)
                  }
                }}
                /> :
                this.props.str}
              </td>
            </tr>
            <tr className="attributeRow">
              <td className="attName">Intelligence</td>
              <td onClick={this.props.settingAttribute.bind(this,'toggleInt')}>
                {this.props.toggleEditValue === 'toggleInt' ?
                <input id="updateInt" type="text" className="attInput" onKeyUp={event => {
                  if (event.keyCode === 13) {
                      this.props.updateAttribute('int',event.target.value)
                  }
                }}
                /> :
                this.props.int}
              </td>
            </tr>
            <tr className="attributeRow">
              <td className="attName">Health</td>
              <td onClick={this.props.settingAttribute.bind(this,'toggleHlt')}>
                {this.props.toggleEditValue === 'toggleHlt' ?
                <input id="updateHlt" type="text" className="attInput" onKeyUp={event => {
                  if (event.keyCode === 13) {
                      this.props.updateAttribute('hlt',event.target.value)
                  }
                }}
                /> :
                this.props.hlt}
              </td>
            </tr>
            <tr className="attributeRow">
              <td className="attName">Willpower</td>
              <td onClick={this.props.settingAttribute.bind(this,'toggleWil')}>
                {this.props.toggleEditValue === 'toggleWil' ?
                <input id="updateWil" type="text" className="attInput" onKeyUp={event => {
                  if (event.keyCode === 13) {
                      this.props.updateAttribute('wil',event.target.value)
                  }
                }}
                /> :
                this.props.wil}
              </td>
            </tr>
            <tr className="attributeRow">
              <td className="attName">Agility</td>
              <td onClick={this.props.settingAttribute.bind(this,'toggleAgi')}>
                {this.props.toggleEditValue === 'toggleAgi' ?
                <input id="updateAgi" type="text" className="attInput" onKeyUp={event => {
                  if (event.keyCode === 13) {
                      this.props.updateAttribute('agi',event.target.value)
                  }
                }}
                /> :
                this.props.agi}
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