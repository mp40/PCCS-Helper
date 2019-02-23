import React, { Component } from "react";
import AttributeCard from "./AttributeCard";
import CombatCard from "./CombatCard";
import './CharacterGeneration.css'

class CreateChar extends Component {

  render() {
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
          
            <tbody>
              <tr>
                <th>Imp</th>
                <th className="impulse">1</th>
                <th className="impulse">2</th>
                <th className="impulse">3</th>
                <th className="impulse">4</th>
              </tr>
              <tr>
                <td>Gun</td>
                <td>?</td>
                <td>?</td>
                <td>?</td>
                <td>?</td>
              </tr>
              <tr>
                <td>Hand</td>
                <td>?</td>
                <td>?</td>
                <td>?</td>
                <td>?</td>
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