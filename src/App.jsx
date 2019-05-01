import React, { Component } from "react";
import { connect } from 'react-redux';
import NavBar from "./components/NavBar";
import HomePage from "./components/Home";
import CreateChar from "./components/CharacterGeneration";
import { updateWeight, modifyEquipment, updateAttributes} from './actions';
import "./App.css";

const { calculateStateObject } = require("./helpers/helperFunctions");

//TODO Uniform Weight/s
//TODO Body armour
//TODO Firearms
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  changeUniform = (uniformType)=>{
    //TODO
    console.log('JGH', uniformType)
    // this.setState({gear: {uniform: unifromType}})
    this.setState({
      gear:{uniform: 'Winter'}
    })
  }

  render() {
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
    characterStats: state.characterStats,
    conbatStats: state.combatStats,
    gear: state.gear
   });
}

export default connect(mapStateToProps, {updateWeight, modifyEquipment, updateAttributes})(App)