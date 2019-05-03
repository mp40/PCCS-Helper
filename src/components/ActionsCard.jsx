import React, { Component } from "react";
import {connect} from 'react-redux';
 
const {actionsPerImpulse} = require('../helpers/helperFunctions');

class ActionsCard extends Component {

  render() {
    const gunActions = actionsPerImpulse(this.props.combatStats.combatActions[0]);
    const handActions = actionsPerImpulse(this.props.combatStats.combatActions[1]);
    return (
      <div>
        <div className = "combatDataContainer">

          <table style={{width:'100%'}} className="combatActions">
            <thead>
              <tr className = "actionsHeader">
                <th className="actionType" style = {{width:'32%'}}> Imp</th>
                <th style={{width:'17%'}}>1</th>
                <th style={{width:'17%'}}>2</th>
                <th style={{width:'17%'}}>3</th>
              <th style={{width:'17%'}}>4</th>
              </tr>
            </thead>
            <tbody>
              
              <tr id="gunActionTable" className="actionsTable">
                <td className="actionType">Gun</td>
                <td className="actions">{gunActions[0]}</td>
                <td className="actions">{gunActions[1]}</td>
                <td className="actions">{gunActions[2]}</td>
                <td className="actions">{gunActions[3]}</td>
              </tr>
              <tr id="handActionTable" className="actionsTable">
                <td className="actionType">Hand</td>
                <td className="actions">{handActions[0]}</td>
                <td className="actions">{handActions[1]}</td>
                <td className="actions">{handActions[2]}</td>
                <td className="actions">{handActions[3]}</td>
              </tr>
            </tbody>
            
          </table>

          <table className="additionalCombatData">
            <tbody>
              <tr>
              <td style = {{width: '33.33%'}}>BS {this.props.combatStats.baseSpeed}</td>
              <td style = {{width: '33.33%'}}>MS {this.props.combatStats.maxSpeed}</td>
              <td style = {{width: '33.33%'}}>DB {this.props.combatStats.damageBonus}</td>
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
    combatStats: {
      baseSpeed: state.combatStats.baseSpeed,
      maxSpeed: state.combatStats.maxSpeed,
      SAL: state.combatStats.SAL, 
      CE: state.combatStats.CE, 
      ISF: state.combatStats.ISF, 
      ASF: state.combatStats.ASF,
      knockoutValue: state.combatStats.knockoutValue,
      damageBonus: state.combatStats.damageBonus,
      combatActions: state.combatStats.combatActions,
  },
    gear: {
      equipment: state.gear.equipment
    }
   });
}

export default connect(mapStateToProps)(ActionsCard);