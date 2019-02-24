import React, { Component } from "react";
import AttributeCard from "./AttributeCard";
import CombatCard from "./CombatCard";
import './CharacterGeneration.css'

const {actionsPerImpulse} = require('./helperFunctions')

class CreateChar extends Component {

  render() {
    const gunActions = actionsPerImpulse(this.props.combatStats.combatActions[0])
    const handActions = actionsPerImpulse(this.props.combatStats.combatActions[1])
    return (
      <div>
        <AttributeCard
          {...this.props}
        />
        <CombatCard
          {...this.props}
        />
        <div className="combatDataContainer">

        <div>
            Actions
          </div>

          <table className="combatActions">
            <thead>
              <tr>
                <th>Imp</th>
                <th className="impulse">1</th>
                <th className="impulse">2</th>
                <th className="impulse">3</th>
                <th className="impulse">4</th>
              </tr>
            </thead>
            <tbody>
              
              <tr>
                <td>Gun</td>
                <td>{gunActions[0]}</td>
                <td>{gunActions[1]}</td>
                <td>{gunActions[2]}</td>
                <td>{gunActions[3]}</td>
              </tr>
              <tr>
                <td>Hand</td>
                <td>{handActions[0]}</td>
                <td>{handActions[1]}</td>
                <td>{handActions[2]}</td>
                <td>{handActions[3]}</td>
              </tr>
            </tbody>
            
          </table>

          <div>
              <span>BS</span>
              <span>MS</span>
              <span>DB</span>
            </div>

        </div>  
      </div>
    );
  }
}

export default CreateChar;