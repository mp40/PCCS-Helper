import React, { Component } from "react";
import { connect } from 'react-redux';
import WeaponsCardHeader from './WeaponsCardHeader'
import WeaponsCardBody from "./WeaponsCardBody";
import {modifyFirearmList} from '../actions'
import FirearmsSelectModal from './FirearmsSelectModal'

import {removeEquipment, removeAllEquipment, incrementEquipmentQty, incrementMagQty} from '../helpers/actionHelpers'

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
    const newData = incrementEquipmentQty(this.props.totalWeight,this.props.gear.firearms, gunObj, modifier)
    this.props.modifyFirearmList(newData.totalWeight, newData.equipArray, this.props.characterStats)
  }

  handleRemoveGun(gunObj){
    const newData = removeEquipment(this.props.totalWeight,this.props.gear.firearms, gunObj)
    this.props.modifyFirearmList(newData.totalWeight, newData.equipArray, this.props.characterStats)
  }

  handleIncrementMagQty(gunObj, magObj, modifier){
    const newData = incrementMagQty(this.props.totalWeight,this.props.gear.firearms, gunObj, magObj, modifier)
    this.props.modifyFirearmList(newData.totalWeight, newData.equipArray, this.props.characterStats)
  }

    render() {
      const selectedGuns = this.props.gear.firearms
      const gunWeight = selectedGuns.reduce((accumulator, obj)=>{
        return accumulator + (obj.weight*obj.qty)
      },0)

      const ammoWeight = selectedGuns.reduce((total, gunObj)=>{
        const ammo = gunObj.mag.reduce((accumulator, magObj)=>{
          return accumulator + (magObj.weight*magObj.qty)
        },0)
        return total + ammo
      },0)
      const weaponsWeight = Math.round((gunWeight + ammoWeight)*1000)/1000

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
