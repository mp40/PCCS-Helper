import React, { Component } from "react";
import { connect } from 'react-redux';
import WeaponsCardBody from "./WeaponsCardBody";
import {modifyFirearmList} from '../actions'
import WeaponsCardSelectModal from './WeaponsCardSelectModal';

import {rifles, smgs, mgs, pistols, sniperRifles, shotguns} from '../helpers/firearms'

import {
  calculateFirearmsArrayWeight,
  calculateObjectWeightDifference,
  modifyObjectQtyInArray,
  calculateGunAndAmmoWeight,
  removeObjectFromArray,
  calculateTotalWeight
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
      createCustomMag: false,
      modifyFirearmWeight: false
    }
  }

  toggleShowFirearms(){
    this.setState({showFirearms: !this.state.showFirearms})
  }

  toggleModifyWeapon(gunObj){
    this.setState({firearmToModify: gunObj.name})
    this.setState({modifyFirearm: !this.state.modifyFirearm})
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

  handleModifyFirearm(newGun){

    const newGunArray = this.props.gear.firearms.map((gunObj)=>{
      return gunObj.name === newGun.name ? newGun : gunObj
    })

    const newWeight = calculateTotalWeight(this.props.gear.uniform, this.props.gear.equipment, newGunArray)

    this.props.modifyFirearmList(newWeight, newGunArray, this.props.characterStats)
  }

  handleAddCustomMag(newCustomMag){

    const newGunArray = this.props.gear.firearms.map((gunObj)=>{
      if(gunObj.name === this.state.firearmToModify){
        gunObj.mag.push(newCustomMag)
      }
      return gunObj
    })

    const newWeight = calculateTotalWeight(this.props.gear.uniform, this.props.gear.equipment, newGunArray)
    this.props.modifyFirearmList(newWeight, newGunArray, this.props.characterStats)
    this.toggleCreateCustomMag()
  }

  toggleCreateCustomMag(){
    this.setState({createCustomMag: !this.state.createCustomMag})
  }

  toggleModifyFirearmWeight(){
    this.setState({modifyFirearmWeight: !this.state.modifyFirearmWeight})
  }

  handleModifyFirearmWeight(noteObj){

    // TODO

    // const newGun = this.state.firearmToModify <- replace this in other places to

    const newGunArray = this.props.gear.firearms.map((gunObj)=>{
      if(gunObj.name === this.state.firearmToModify){
        gunObj.weight = Math.round((gunObj.weight + noteObj.weightMod)*1000)/1000
        if(gunObj.modNotes){
          gunObj.modNotes.push(noteObj)
        } else {
          gunObj.modNotes = [noteObj]
        }
      }
      
      return gunObj
    })
    
    const newWeight = calculateTotalWeight(this.props.gear.uniform, this.props.gear.equipment, newGunArray)
    this.props.modifyFirearmList(newWeight, newGunArray, this.props.characterStats)
  }

  removeAllGunMods(gunObj){
    const firearmsList = [...rifles(), ...smgs(), ...mgs(), ...pistols(), ...sniperRifles(), ...shotguns()]
    const originalGunObj = firearmsList.filter((gun)=>{
      return gun.name === gunObj.name
    })[0]
    this.handleModifyFirearm(originalGunObj)
    this.setState({firearmToModify: originalGunObj})
  }

    render() {
      const selectedGuns = this.props.gear.firearms
      const weaponsWeight = calculateFirearmsArrayWeight(selectedGuns)
      const firearmToModify = selectedGuns.filter((gunObj)=>{
        return gunObj.name === this.state.firearmToModify
      })[0]

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
                  gunObj={firearmToModify}
                  modifyFirearm={this.state.modifyFirearm}
                  createCustomMag={this.state.createCustomMag}
                  modifyFirearmWeight={this.state.modifyFirearmWeight}
                  handleModifyFirearm={this.handleModifyFirearm.bind(this)}
                  toggleCreateCustomMag={this.toggleCreateCustomMag.bind(this)}
                  handleAddCustomMag={this.handleAddCustomMag.bind(this)}
                  toggleModifyFirearmWeight={this.toggleModifyFirearmWeight.bind(this)}
                  handleModifyFirearmWeight={this.handleModifyFirearmWeight.bind(this)}
                  removeAllGunMods={this.removeAllGunMods.bind(this)}
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
