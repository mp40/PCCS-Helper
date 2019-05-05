import React, { Component } from "react";
import { connect } from 'react-redux';
import {modifyFirearmList} from '../actions'
import FirearmsSelectModal from './FirearmsSelectModal'

import {removeEquipment, removeAllEquipment, incrementEquipmentQty} from '../helpers/actionHelpers'

// import { modifyEquipment, updateAttributes } from '../actions';
// import {removeEquipment, removeAllEquipment, incrementEquipmentQty} from '../helpers/actionHelpers'

import './WeaponsCard.css' 

export class WeaponsCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      showFirearms: false,
      // showCustomInput: false,
      // showFilters: false,
      // filteredTags: []
    }
  }

  toggleShowFirearms(){
    this.setState({showFirearms: !this.state.showFirearms})
  }

  handleIncrementGunQty(gunObj, modifier){
    const newData = incrementEquipmentQty(this.props.totalWeight,this.props.gear.firearms, gunObj, modifier)
    this.props.modifyFirearmList(newData.totalWeight, newData.equipArray, this.props.characterStats)
  }

  handleRemoveGun(gunObj){
    const newData = removeEquipment(this.props.totalWeight,this.props.gear.firearms, gunObj)
    this.props.modifyFirearmList(newData.totalWeight, newData.equipArray, this.props.characterStats)
  }

    render() {
      const selectedGuns = this.props.gear.firearms
      const weaponsWeight = selectedGuns.reduce((accumulator, obj)=>{
        return accumulator + (obj.weight*obj.qty)
      },0)

      return (
        <div style={{width:'33%'}} className="WeaponSelect">
             <table style={{width:'100%'}} className="equipmentTable">
                <thead>
                  <tr className="equipmentHeader" id='weaponsHeader'>
                    <th>Weapons</th>
                    <th style={{width:'9%'}}>Weight</th>
                    <th style={{width:'9%'}}>Qty</th>
                    <th style={{width:'9%'}}>lbs</th>
                    <th style={{width:'9%'}}>
                      {weaponsWeight}
                    </th>
                  </tr>
                </thead>
                {/* TODO confirm if below id has css */}
                {/* <tbody id="characterEquipmentList"> */}
                <tbody id="characterWeaponList">
                  <tr className="addEquipment">
                  <td>
                    <button 
                      id="addFirearm" 
                      className="equipmentButton" 
                      onClick={this.toggleShowFirearms.bind(this)}
                    >Add Firearm</button>
  
                    {/* <button 
                      id="toggleCustomEquipment" 
                      className="equipmentButton" 
                      onClick={this.toggleCustomEquipment.bind(this)}
                    >Add Custom</button> */}
  
                    <button
                      id="clearAllFirearms"
                      className="equipmentButton"
                      // onClick={this.handleRemoveAllEquipment.bind(this)}
                    >Clear All</button>
                </td>
                </tr>

                {selectedGuns.map((gunObj, index)=>{
                    return <tr key={index} className="addedEqipRow">
                      <td>
                        <button
                          id="removeGun" 
                          className="equipmentButton"
                          onClick={this.handleRemoveGun.bind(this, gunObj)}
                          >
                            X
                          </button>
                        {gunObj.name}
                      </td>
                      <td>
                        {gunObj.weight}
                      </td>
                      <td>
                        {gunObj.qty}
                      </td>
                      <td>
                        {Math.round((gunObj.qty * gunObj.weight)*100)/100}
                      </td>
                      <td className="arrowBox">
                        <button 
                          id="qtyUpGun"
                          className="equipmentButton"
                          onClick={this.handleIncrementGunQty.bind(this,gunObj,1)}
                          >
                          {String.fromCharCode(8593)}
                        </button>
                        <button 
                          id="qtyDownGun" 
                          className="equipmentButton"
                          onClick={this.handleIncrementGunQty.bind(this,gunObj,-1)}
                          >
                          {String.fromCharCode(8595)}
                        </button>
                      </td>
                    </tr>
                  })}                          
                
                </tbody>
             </table>

             {this.state.showFirearms ?
               <FirearmsSelectModal
                closeShowFirearms={this.toggleShowFirearms.bind(this)}
               /> :
              null}

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
  
  
  export default connect(mapStateToProps,{modifyFirearmList})(WeaponsCard)

