import React, { Component } from "react";

import AttributeCard from "./AttributeCard";
import CombatCard from "./CombatCard";
import ActionsCard from "./ActionsCard";
import EquipmentDropdown from "./EquipmentDropdown";
import CustomEquipmentModal from "./CustomEquipmentModal";
import ClothingAndArmourCard from "./ClothingAndArmourCard";

import './CharacterGeneration.css'

class CreateChar extends Component {
  constructor(props){
    super(props)
    this.state = {
      showEquipment: false,
      showCustomInput: false,
      showFilters: false,
      requiredEquipment: [],
      filteredTags: []
    }
  }

  toggleShowEquipment(){
    this.setState({showEquipment: !this.state.showEquipment})
  }

  toggleCustomEquipment(){
    this.setState({showCustomInput: !this.state.showCustomInput})
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
    const totalEquipWeight = charEquip.reduce((accumulator,obj)=>{
      return accumulator + (obj.weight*obj.qty)
    },0)

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
        <ClothingAndArmourCard
          {...this.props}
          // TODO
        />
        </div>
        <div style={{width:'40%'}} className="equipmentSelect">

          <table style={{width:'100%'}} className="equipmentTable">
            <thead>
              <tr className="equipmentHeader">
                <th>Equipment</th>
                <th style={{width:'9%'}}>Weight</th>
                <th style={{width:'9%'}}>Qty</th>
                <th style={{width:'9%'}}>lbs</th>
                <th style={{width:'9%'}}>
                  {Math.round(totalEquipWeight*1000)/1000}
                </th>
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

                <button 
                  id="toggleCustomEquipment" 
                  className="equipmentButton" 
                  onClick={this.toggleCustomEquipment.bind(this)}
                >Add Custom</button>

                <button
                  id="clearAllEquipment"
                  className="equipmentButton"
                  onClick={this.props.removeAllEquipment.bind(this, charEquip)}
                  >Clear All</button>

              </td>
              </tr>
                {charEquip.map((equipObj, index)=>{
                  return <tr key={index} className="addedEqipRow">
                    <td>
                      <button
                        id="removeEquip" 
                        className="equipmentButton"
                        onClick={this.props.removeEquipment.bind(this, equipObj)}
                        >
                          X
                        </button>
                      {equipObj.name}
                    </td>
                    <td>
                      {equipObj.weight}
                    </td>
                    <td>
                      {equipObj.qty}
                    </td>
                    <td>
                      {Math.round((equipObj.qty * equipObj.weight)*100)/100}
                    </td>
                    <td className="arrowBox">
                      <button 
                        id="qtyUp" 
                        className="equipmentButton"
                        onClick={this.props.incrementEquipmentQty.bind(this,equipObj,1)}>
                        {String.fromCharCode(8593)}
                      </button>
                      <button 
                        id="qtyDown" 
                        className="equipmentButton"
                        onClick={this.props.incrementEquipmentQty.bind(this,equipObj,-1)}>
                        {String.fromCharCode(8595)}
                      </button>
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
              addEquipment = {this.props.addEquipment.bind(this)}
             /> :
            null}
          {this.state.showCustomInput ?
            <CustomEquipmentModal
              toggleCustomEquipment={this.toggleCustomEquipment.bind(this)}
              addEquipment = {this.props.addEquipment.bind(this)}
            /> :
            null  
          }  
      </div>  
    </div>    
    );
  }
}

export default CreateChar;