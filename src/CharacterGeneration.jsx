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
      showEquipment: false,
      showFilters: false,
      requiredEquipment: [],
      filteredTags: []
    }
  }

  toggleShowEquipment(){
    this.setState({showEquipment: !this.state.showEquipment})
  }

  closeShowEquipment(){
    this.setState({
      showEquipment: false,
      showFilters: false
    })
  }

  toggleFilters(){
    this.setState({showFilters: !this.state.showFilters})
  }

  handleTags(tag) {
      if(this.state.filteredTags.includes(tag)){
        this.unfilterTag(tag)
      } else {
        this.filterTag(tag)
      }
  }

  filterTag(tag) {
    const tags = this.state.filteredTags
    tags.push(tag)
    this.setState({filteredTags: tags})
  }

  unfilterTag(tag){
    let tags = this.state.filteredTags
    tags = tags.filter((element)=>{
      return element !== tag
    })
    this.setState({filteredTags: tags})
  }

  render() {

    const charEquip = this.props.gear.equipment

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
            <tbody id="characterEquipmentList">
              <tr className="addEquipment">
              <td>
                <button 
                  id="addEquipment" 
                  className="equipmentButton" 
                  onClick={this.toggleShowEquipment.bind(this)}
                >Add Equipment</button>
              </td>
              </tr>
                {charEquip.map((equipObj, index)=>{
                  return <tr key={index}>
                    <td>
                      {equipObj.name}
                    </td>
                  </tr>
                })}
            </tbody>
          </table>
          {this.state.showEquipment ?
             <EquipmentDropdown
              closeShowEquipment={this.closeShowEquipment.bind(this)}
              toggleFilters={this.toggleFilters.bind(this)}
              handleTags={this.handleTags.bind(this)}
              requiredEquipment = {this.state.requiredEquipment}
              showFilters = {this.state.showFilters}
              filteredTags = {this.state.filteredTags}
              // addEquipmentToCharacter = {this.props.addEquipmentToCharacter.bind(this)}
              addEquipment = {this.props.addEquipment.bind(this)}
              // toggleShowEquipment = {this.state.toggleShowEquipment.bind(this)}
             /> :
            null}
      </div>  
    </div>    
    );
  }
}

export default CreateChar;