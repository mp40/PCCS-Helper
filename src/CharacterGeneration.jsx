import React, { Component } from "react";
import AttributeCard from "./AttributeCard";
import CombatCard from "./CombatCard";
import './CharacterGeneration.css'
import ActionsCard from "./ActionsCard";

class CreateChar extends Component {

  render() {
    return (
      <div className="createCharContainer">
        <div className="dataCardContainer">
        <AttributeCard
          {...this.props}
        />
        <CombatCard
          {...this.props}
        />
        <ActionsCard
          {...this.props}
        />
        </div>
        <div style={{width:'50%'}} className="equipmentSelect">

          <table style={{width:'100%'}} className="equipmentTable">
            <thead>
              <tr className="equipmentHeader">
                <th>Equipment</th>
                <th>Weight</th>
                <th>Qty</th>
                <th>Total lbs</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td id="addEquipment">Add Equipment</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
      </div>  
    </div>    
    );
  }
}

export default CreateChar;