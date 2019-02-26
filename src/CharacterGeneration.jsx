import React, { Component } from "react";
import AttributeCard from "./AttributeCard";
import CombatCard from "./CombatCard";
import './CharacterGeneration.css'
import ActionsCard from "./ActionsCard";

class CreateChar extends Component {
  constructor(props){
    super(props)
    this.state = {
      showEquipment: false
    }
  }

  toggleShowEquipment(){
    this.setState({showEquipment: !this.state.showEquipment})
    console.log(this.state)
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
              <td>
                {this.state.ShowEquipment ?
                <div className="equipmentDropdown">
                  <p>
                    TODO add dropdown equipment list
                  </p>
                  <p>
                    TODO add dropdown equipment list
                  </p>
                </div> :
                null}
              </td>  
              </tr>
            </tbody>
          </table>
      </div>  
    </div>    
    );
  }
}

export default CreateChar;