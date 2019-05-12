import React, { Component } from "react";
import { connect } from 'react-redux';
import EquipmentDropdown from "./EquipmentDropdown";
import CustomEquipmentModal from "./CustomEquipmentModal";
import ButtonStandard from './buttons/ButtonStandard'
import ButtonDeleteX from './buttons/ButtonDeleteX'
import ButtonIncrementArrows from './buttons/ButtonIncrementArrows'

import { modifyEquipment, updateAttributes } from '../actions';
import {removeEquipment, removeAllEquipment, incrementEquipmentQty} from '../helpers/actionHelpers'

export class EquipmentCard extends Component {
    constructor(props){
      super(props)
      this.state = {
        showEquipment: false,
        showCustomInput: false,
        showFilters: false,
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
  
    handleRemoveEquipment(equipObj){
      const newData = removeEquipment(this.props.totalWeight,this.props.gear.equipment, equipObj)
      this.props.modifyEquipment(newData.totalWeight, newData.equipArray, this.props.characterStats)
    }
  
    handleRemoveAllEquipment(){
      const newWeight = removeAllEquipment(this.props.totalWeight, this.props.gear.equipment)
      this.props.modifyEquipment(newWeight, [], this.props.characterStats)
    }
  
    handleIncrementEquipmentQty(equipObj, modifier){
      const newData = incrementEquipmentQty(this.props.totalWeight,this.props.gear.equipment, equipObj, modifier)
      this.props.modifyEquipment(newData.totalWeight, newData.equipArray, this.props.characterStats)
    }
  
  
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
                <tr className="addEquipment">
                <td>
                  <ButtonStandard
                    id="addEquipment"
                    name={'Add Equipment'}
                    onClick={this.toggleShowEquipment.bind(this)}
                  />
                  <ButtonStandard
                    id="toggleCustomEquipment"
                    name={'Add Custom'}
                    onClick={this.toggleCustomEquipment.bind(this)}
                  />
                  <ButtonStandard
                    id="clearAllEquipment"
                    name={'Clear All'}
                    onClick={this.handleRemoveAllEquipment.bind(this)}
                  />
                </td>
                </tr>
                  {charEquip.map((equipObj, index)=>{
                    return <tr key={index} className="addedEqipRow">
                      <td>
                        <ButtonDeleteX
                          id="removeEquip"
                          onClick={this.handleRemoveEquipment.bind(this, equipObj)}
                        />
                        <span style={{marginLeft:'1rem'}}>
                          {equipObj.name}
                        </span>
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
                          idDown={"qtyDown"}
                          onClickUp={this.handleIncrementEquipmentQty.bind(this,equipObj,1)}
                          onClickDown={this.handleIncrementEquipmentQty.bind(this,equipObj,-1)}
                        />
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
                showFilters = {this.state.showFilters}
                filteredTags = {this.state.filteredTags}
               /> :
              null}
            {this.state.showCustomInput ?
              <CustomEquipmentModal
                toggleCustomEquipment={this.toggleCustomEquipment.bind(this)}
              /> :
              null  
            }  
        </div>  
      );
    }
  }
  
  const mapStateToProps = (state) => {
    return ({ 
      totalWeight: state.totalWeight,
      characterStats: state.characterStats,
      gear: state.gear
     });
  }
  
  
  export default connect(mapStateToProps, {modifyEquipment, updateAttributes})(EquipmentCard)
  