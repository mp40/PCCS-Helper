import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar";
import HomePage from "./Home";
import CreateChar from "./CharacterGeneration";

const { calculateStateObject } = require("./helperFunctions");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'home',
      toggleEditValue: false,
      equipmentWeight: 5,
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
        baseSpeed: 0,
        maxSpeed: 0,
        SAL: 0, 
        CE: 0, 
        ISF: 0, 
        ASF: 0,
        knockoutValue: 0,
        damageBonus: 0,
        combatActions: [4, 4],
      },
    }
  }

  setDisplay(view){
    this.setState({currentView: view})
  }

  weightWarningOn() {
    this.setState({ weightWarningMsg: true });
  }

  weightWarningOff() {
    this.setState({ weightWarningMsg: false });
  }
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
    }

    const newData = calculateStateObject(playerObject, weight);
    if (newData.baseSpeed === 0) {
      this.weightWarningOn();
    } else {
      this.weightWarningOff();
    }
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
    });
  }

  updateAttribute = (attribute, value)=>{
      this.setState({characterStats:{...this.state.characterStats,[attribute]: value}}, ()=>{
        this.updateAllStats();
      })
  };

  settingAttribute(key){
    this.setState({toggleEditValue: key})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar/>
          {this.state.currentView === 'home' ?
          <HomePage
            setDisplay={this.setDisplay.bind(this)}
          /> :
          null}
          {this.state.currentView === 'createChar' ?
          <CreateChar
            {...this.state}
            updateAttribute={this.updateAttribute.bind(this)}
            settingAttribute={this.settingAttribute.bind(this)}
          /> :
          null}
        </header>
      </div>
    );
  }
}

export default App;
