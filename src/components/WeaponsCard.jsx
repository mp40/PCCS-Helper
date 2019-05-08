import React, { Component } from "react";
import { connect } from 'react-redux';
import WeaponsCardHeader from './WeaponsCardHeader'
import WeaponsCardBody from "./WeaponsCardBody";
import {modifyFirearmList} from '../actions'
import FirearmsSelectModal from './FirearmsSelectModal'

import {
  removeEquipment, 
  removeAllEquipment, 
  incrementEquipmentQty, 
  incrementMagQty, 
  calculateFirearmsArrayWeight,
  calculateObjectWeightDifference,
  modifyObjectQtyInArray,
  calculateAmmoWeight,
  calculateGunAndAmmoWeight,
  removeObjectFromArray
} from '../helpers/actionHelpers'

// import { modifyEquipment, updateAttributes } from '../actions';
// import {removeEquipment, removeAllEquipment, incrementEquipmentQty} from '../helpers/actionHelpers'

import './WeaponsCard.css' 

export class WeaponsCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      showFirearms: false,
    }
  }

  toggleShowFirearms(){
    this.setState({showFirearms: !this.state.showFirearms})
  }

  handleIncrementGunQty(gunObj, modifier){
    const newWeight = this.props.totalWeight + calculateObjectWeightDifference(gunObj, modifier)
    const newArray = modifyObjectQtyInArray(this.props.gear.firearms, gunObj, modifier)
    this.props.modifyFirearmList(newWeight, newArray, this.props.characterStats)
  }

  handleRemoveGun(gunObj){
    const newWeight = this.props.totalWeight - calculateGunAndAmmoWeight(gunObj)
    const newArray = removeObjectFromArray(this.props.gear.firearms, gunObj)
    this.props.modifyFirearmList(newWeight, newArray, this.props.characterStats)
  }

  handleIncrementMagQty(gunObj, magObj, modifier){
    const newWeight = this.props.totalWeight + calculateObjectWeightDifference(magObj, modifier)
    gunObj.mag = modifyObjectQtyInArray(gunObj.mag, magObj, modifier)
    const newArray = modifyObjectQtyInArray(this.props.gear.firearms, gunObj)
    this.props.modifyFirearmList(newWeight, newArray, this.props.characterStats)
  }

    render() {
      const selectedGuns = this.props.gear.firearms
      const weaponsWeight = calculateFirearmsArrayWeight(selectedGuns)

      return (
        <div style={{width:'33%'}} className="WeaponSelect">
          <WeaponsCardHeader
            weaponsWeight={weaponsWeight}
            toggleShowFirearms={this.toggleShowFirearms.bind(this)}
            // handleRemoveAllEquipment={this.handleRemoveAllEquipment.bind(this)}
          />

          <WeaponsCardBody
            selectedGuns={selectedGuns}
            handleRemoveGun={this.handleRemoveGun.bind(this)}
            handleIncrementGunQty={this.handleIncrementGunQty.bind(this)}
            handleIncrementMagQty={this.handleIncrementMagQty.bind(this)}
          />

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
