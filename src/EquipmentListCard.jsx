import React, { Component } from "react";
import EquipmentDropdown from "./EquipmentDropdown";
//TODO put this tag in charatercreation and pass props
class EquipmentListCard extends Component {

  render() {
    console.log(this.props)
    const charEquip = this.props.gear.equipment
    const totalEquipWeight = charEquip.reduce((accumulator,obj)=>{
      return accumulator + (obj.weight*obj.qty)
    },0)

    return (
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
                onClick={this.props.toggleShowEquipment.bind(this)}
              >Add Equipment</button>
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
        {this.props.showEquipment ?
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
        )
    }
}

export default EquipmentListCard
