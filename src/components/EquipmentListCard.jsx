import React, { Component } from "react";
import EquipmentDropdown from "./EquipmentDropdown";
import ButtonIncrementArrows from './buttons/ButtonIncrementArrows';
import ButtonDeleteX from './buttons/ButtonDeleteX'

class EquipmentListCard extends Component {

  render() {
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
              {charEquip.map((equipObj, index)=>{
                return <tr key={index} className="addedEqipRow">
                  <td>
                    <ButtonDeleteX
                      id="removeEquip"
                      onClick={this.props.removeEquipment.bind(this, equipObj)}
                    />
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
                    <ButtonIncrementArrows
                      idUp={'qtyUp'}
                      idDown={'qtyDown'}
                      onClickUp={this.props.incrementEquipmentQty.bind(this,equipObj,1)}
                      onClickDown={this.props.incrementEquipmentQty.bind(this,equipObj,-1)}
                    />
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
            addEquipment = {this.props.addEquipment.bind(this)}
           /> :
          null}
    </div>
        )
    }
}

export default EquipmentListCard
