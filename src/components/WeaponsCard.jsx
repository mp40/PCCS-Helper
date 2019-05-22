import React, { Component } from "react";
import { connect } from 'react-redux';
import WeaponsCardBody from "./WeaponsCardBody";
import {modifyFirearmList} from '../actions'
import WeaponsCardSelectModal from './WeaponsCardSelectModal'

import {
  calculateFirearmsArrayWeight,
  calculateObjectWeightDifference,
  modifyObjectQtyInArray,
  calculateGunAndAmmoWeight,
  removeObjectFromArray
} from '../helpers/actionHelpers'

import './WeaponsCard.css' 
import WeaponsCardWeaponStats from "./WeaponsCardWeaponStats";

export class WeaponsCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      showFirearms: false,
      modifyFirearm: false,
      firearmToModify: null,
    }
  }

  toggleShowFirearms(){
    this.setState({showFirearms: !this.state.showFirearms})
  }

  toggleModifyWeapon(gunObj){
    this.setState({modifyFirearm: !this.state.modifyFirearm, firearmToModify: gunObj})
  }

  handleIncrementGunQty(gunObj, modifier){
    if (gunObj.qty === 1 && modifier === -1){
      return
    }
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
    if (magObj.qty === 0 && modifier === -1){
      return
    }
    const newWeight = this.props.totalWeight + calculateObjectWeightDifference(magObj, modifier)
    gunObj.mag = modifyObjectQtyInArray(gunObj.mag, magObj, modifier)
    const newArray = modifyObjectQtyInArray(this.props.gear.firearms, gunObj)
    this.props.modifyFirearmList(newWeight, newArray, this.props.characterStats)
  }

  handleRemoveAllGuns(){
    const newWeight = this.props.totalWeight - calculateFirearmsArrayWeight(this.props.gear.firearms)
    this.props.modifyFirearmList(newWeight,[], this.props.characterStats)
  }

  modifyFirearm(){

  }

    render() {
      const selectedGuns = this.props.gear.firearms
      const weaponsWeight = calculateFirearmsArrayWeight(selectedGuns)

      return (
        <div style={{width:'33%'}} className="WeaponSelect">

          <WeaponsCardBody
            selectedGuns={selectedGuns}
            weaponsWeight={weaponsWeight}
            toggleShowFirearms={this.toggleShowFirearms.bind(this)}
            handleRemoveAllGuns={this.handleRemoveAllGuns.bind(this)}
            handleRemoveGun={this.handleRemoveGun.bind(this)}
            handleIncrementGunQty={this.handleIncrementGunQty.bind(this)}
            handleIncrementMagQty={this.handleIncrementMagQty.bind(this)}
            toggleModifyWeapon={this.toggleModifyWeapon.bind(this)}
          />

          {this.state.showFirearms ?
            <WeaponsCardSelectModal
              closeShowFirearms={this.toggleShowFirearms.bind(this)}
            /> :
            null}

          {this.state.modifyFirearm ? 
            <div className='equipmentModalContainer'>
              <WeaponsCardWeaponStats
                gunObj={this.state.firearmToModify}
              />
            </div> :
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
