import React, { Component } from "react";
import AttributeCard from "./AttributeCard";
import CombatCard from "./CombatCard";
import './CharacterGeneration.css'
import ActionsCard from "./ActionsCard";
import EquipmentDropdown from "./EquipmentDropdown";


class CreateChar extends Component {
  constructor(props){
    super(props)
    this.state = {
      showEquipment: false
    }
  }

  toggleShowEquipment(){
    this.setState({showEquipment: !this.state.showEquipment})
  }

  closeShowEquipment(){
    this.setState({showEquipment: false})
  }

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
              <tr className="addEquipment">
              <td>
                <button 
                  id="addEquipment" 
                  className="equipmentButton" 
                  onClick={this.toggleShowEquipment.bind(this)}
                >Add Equipment</button>
              </td>
              </tr>
            </tbody>
          </table>
          {this.state.showEquipment ?
             <EquipmentDropdown
              closeShowEquipment={this.closeShowEquipment.bind(this)}
             /> :
            null}
      </div>  
    </div>    
    );
  }
}

export default CreateChar;