import React, { Component } from "react";
import {connect} from 'react-redux';
import {updateAttributes} from '../actions';

class AttributeCard extends Component {
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
    if(value < 3 || value > 18 || typeof value !== 'number' || isNaN(value)) {
      this.setState({toggleEditValue: false})
      return
    }
    updateAttributes(this.props.characterStats, attribute, value)
    this.setState({toggleEditValue: false})
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
              <td className="attValue" id="updateStr" onClick={this.settingAttribute.bind(this,'toggleStr')}>
                {this.state.toggleEditValue === 'toggleStr' ?
                <input type="text" className="attInput" onKeyUp={event => {
                  if (event.keyCode === 13) {
                      this.handleUpdateAttributes('str',event.target.value)
                  }
                }}
                /> :
                this.props.characterStats.str}
              </td>
            </tr>
            <tr className="attributeRow">
              <td className="attName">Intelligence</td>
              <td className="attValue" id="updateInt" onClick={this.settingAttribute.bind(this,'toggleInt')}>
                {this.state.toggleEditValue === 'toggleInt' ?
                <input type="text" className="attInput" onKeyUp={event => {
                  if (event.keyCode === 13) {
                    this.handleUpdateAttributes('int',event.target.value)
                  }
                }}
                /> :
                this.props.characterStats.int}
              </td>
            </tr>
            <tr className="attributeRow">
              <td className="attName">Health</td>
              <td className="attValue" id="updateHlt" onClick={this.settingAttribute.bind(this,'toggleHlt')}>
                {this.state.toggleEditValue === 'toggleHlt' ?
                <input type="text" className="attInput" onKeyUp={event => {
                  if (event.keyCode === 13) {
                    this.handleUpdateAttributes('hlt',event.target.value)
                  }
                }}
                /> :
                this.props.characterStats.hlt}
              </td>
            </tr>
            <tr className="attributeRow">
              <td className="attName">Willpower</td>
              <td className="attValue" id="updateWil" onClick={this.settingAttribute.bind(this,'toggleWil')}>
                {this.state.toggleEditValue === 'toggleWil' ?
                <input type="text" className="attInput" onKeyUp={event => {
                  if (event.keyCode === 13) {
                    this.handleUpdateAttributes('wil',event.target.value)
                  }
                }}
                /> :
                this.props.characterStats.wil}
              </td>
            </tr>
            <tr className="attributeRow">
              <td className="attName">Agility</td>
              <td className="attValue" id="updateAgi" onClick={this.settingAttribute.bind(this,'toggleAgi')}>
                {this.state.toggleEditValue === 'toggleAgi' ?
                <input type="text" className="attInput" onKeyUp={event => {
                  if (event.keyCode === 13) {
                    this.handleUpdateAttributes('agi',event.target.value)
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

export default connect(mapStateToProps,{updateAttributes})(AttributeCard)