import React, { Component } from "react";
 
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
              
              <tr className="actionsTable">
                <td className="actionType">Gun</td>
                <td className="actions">{gunActions[0]}</td>
                <td className="actions">{gunActions[1]}</td>
                <td className="actions">{gunActions[2]}</td>
                <td className="actions">{gunActions[3]}</td>
              </tr>
              <tr className="actionsTable">
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

export default ActionsCard;