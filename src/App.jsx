import React, { Component } from "react";
import { connect } from 'react-redux';
import NavBar from "./components/NavBar";
import HomePage from "./components/Home";
import CreateChar from "./components/CharacterGeneration";
import { updateWeight, addEquipment } from './actions';
import "./App.css";

const { calculateStateObject } = require("./helpers/helperFunctions");

//TODO Uniform Weight/s
//TODO Body armour
//TODO Firearms
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleEditValue: false,
      // equipmentWeight: 5,//TODO add this to store //change equipmentWeight to totalWeight
      characterStats:{
          str: 10,
          int: 10,
          wil: 10,
          hlt: 10,
          agi: 10,
          gunLevel: 0,
          handLevel: 0,
      },
      combatStats: {
        baseSpeed: 3,
        maxSpeed: 6,
        SAL: 0, 
        CE: 0, 
        ISF: 0, 
        ASF: 0,
        knockoutValue: 0,
        damageBonus: 1,
        combatActions: [4, 4],
      },
      gear:{
        uniform: 'Normal',
        helmet: 'None',
        bodyArmour: 'None',
        // equipment: [],
        firearms: [],
        grenades: [],
      }
    }
  }

  //TODO WIRE THIS UP
  weightWarningOn() {
    this.setState({ weightWarningMsg: true });
  };

  weightWarningOff() {
    this.setState({ weightWarningMsg: false });
  };

  //TODO update - equipmentWeight now totalWeight and handled by store, accepts new weight not a modifier to weight
  // updateWeight(weightToAdd) {
  //   const weight = this.state.equipmentWeight;
  //   const newWeight = Math.round((weight + weightToAdd)*1000)/1000
  //   this.setState({equipmentWeight: newWeight}, ()=>{
  //     this.updateAllStats()
  //   })
  // }

  updateAllStats() {
    const weight = this.state.equipmentWeight;

    const playerObject = {
      str: this.state.characterStats.str,
      int: this.state.characterStats.int,
      wil: this.state.characterStats.wil,
      hlt: this.state.characterStats.hlt,
      agi: this.state.characterStats.agi,
      gunLevel: this.state.characterStats.gunLevel,
      handLevel: this.state.characterStats.handLevel,
    };

    const newData = calculateStateObject(playerObject, weight);
    if (newData.baseSpeed === 0) {
      this.weightWarningOn();
    } else {
      this.weightWarningOff();
    };

    this.setState({
      combatStats: {
        baseSpeed: newData.baseSpeed,
        maxSpeed: newData.maxSpeed,
        SAL: newData.sal,
        CE: newData.ce,
        ISF: newData.isf,
        ASF: newData.asf,
        knockoutValue: newData.knockoutValue,
        damageBonus: newData.damageBonus,
        combatActions: [newData.gunActions, newData.handActions],
      },
      toggleEditValue: false
    })
  };

  updateAttribute = (attribute, value)=>{
    this.setState({characterStats:{...this.state.characterStats,[attribute]: value}}, ()=>{
      this.updateAllStats();
    })
  };

  settingAttribute(key){
    this.setState({toggleEditValue: key})
  };

  changeUniform = (uniformType)=>{
    //TODO
    console.log('JGH', uniformType)
    // this.setState({gear: {uniform: unifromType}})
    this.setState({
      gear:{uniform: 'Winter'}
    })
  }

  //TODO redo this to use actions/reducers
  addEquipment(obj){
    console.log(this.props)
    this.props.addEquipment(this.props, obj)

    // const equip = this.state.gear.equipment
    // if(equip.find(exisitingObj=>exisitingObj.name === obj.name)) {
    //     return
    //   }

    // obj.qty = 1
    // this.setState({
    //   gear:{equipment: [...equip, obj]}}, ()=>{
    //     const newWeight = Math.round((this.props.totalWeight + obj.weight)*1000)/1000
    //     this.props.updateWeight(newWeight)//TODO this is temp fix - massive refactor of weight stuff needed
    // })
  };

  removeEquipment(objToRemove){
    const weightToRemove = Math.round((objToRemove.weight * objToRemove.qty)*1000)/1000
    const newList = this.state.gear.equipment.filter((obj)=>{
      return obj.name !== objToRemove.name
    })
    this.setState({gear:{equipment: newList}}, ()=>{
      const newWeight = this.props.totalWeight - weightToRemove
      this.props.updateWeight(newWeight) //TODO this is temp fix - massive refactor of weight stuff needed
    })
  }

  removeAllEquipment(allEquip){
    //TODO simplify when convert to action/reducers
    const equipWeight = allEquip.reduce((sum, obj)=>{
      const totalObjWeight = Math.round((obj.weight * obj.qty)*1000)/1000
      return sum + totalObjWeight
    },0)
    this.setState({
      gear:{equipment: []}
    }, this.props.updateWeight(this.props.totalWeight - equipWeight)) //TODO this is temp fix - massive refactor of weight stuff needed
  }

  incrementEquipmentQty(equipObj, modifier){
    //TODO simplify when convert to action/reducers
    const gear = this.state.gear.equipment
    const updated = gear.map((obj)=>{
      if(obj.name === equipObj.name){
        obj.qty = obj.qty + modifier
      }
      return obj
    })
    this.setState({
      gear:{equipment: updated}
    }, ()=>{
      this.props.updateWeight(this.props.totalWeight - (equipObj.weight * modifier)) // TODO this is a temp fix
    })
  };

  render() {
    console.log('App Props',this.props)
    console.log('App State', this.state)
    return (
      <div className="App">
        <header className="App-header">
          <NavBar
            {...this.state}
          />
          {this.props.currentView === 'home' ?
          <HomePage/> :
          null}
          {this.props.currentView === 'createChar' ?
          <CreateChar
            {...this.state}
            updateAttribute={this.updateAttribute.bind(this)}
            settingAttribute={this.settingAttribute.bind(this)}
            addEquipment={this.addEquipment.bind(this)}
            removeEquipment={this.removeEquipment.bind(this)}
            incrementEquipmentQty={this.incrementEquipmentQty.bind(this)}
            removeAllEquipment={this.removeAllEquipment.bind(this)}
            changeUniform={this.changeUniform.bind(this)}
          /> :
          null}
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({ 
    currentView: state.currentView,
    totalWeight: state.totalWeight,
    gear: {
      equipment: state.gear.equipment
    }
   });
}

export default connect(mapStateToProps, {updateWeight, addEquipment})(App)