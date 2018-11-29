import React, { Component } from "react";
import "./App.css";

const {
  calcBaseSpeed,
  findSAL,
  calcMaxSpeed,
  calcISF,
  calcCombatActions
} = require("./helperFunctions");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      equipmentWeight: 5,
      attributeStats: [14, 10, 10, 10, 12],
      baseSpeed: 2,
      maxSpeed: 3.5,
      skillLevels: [4, 2],
      combatStats: { SAL: 10, CE: 7, ISF: 24, ASF: 22 },
      combatActions: [5, 4, 1.5]
    };
  }

  addWeight() {
    this.setState({ equipmentWeight: this.state.equipmentWeight + 5 });
    this.updateBaseSpeed();
  }

  minusWeight() {
    if (this.state.equipmentWeight <= 5) {
      this.setState({ equipmentWeight: this.state.equipmentWeight });
    } else {
      this.setState({ equipmentWeight: this.state.equipmentWeight - 5 });
    }
    this.updateBaseSpeed();
  }

  addToSTR = () => {
    this.updateBaseSpeed();
    this.addToStat(0);
  };

  minusFromSTR = () => {
    this.updateBaseSpeed();
    this.minusFromStat(0);
  };

  addToINT = () => {
    this.addToStat(1);
    this.updateISFFromINT(1);
  };

  minusFromINT = () => {
    this.minusFromStat(1);
    this.updateISFFromINT(-1);
  };

  addToAGI = () => {
    this.addToStat(4);
    this.updateASFFromAGI(1);
  };

  minusFromAGI = () => {
    this.minusFromStat(4);
    this.updateASFFromAGI(-1);
  };

  updateASFFromAGI = adjust => {
    const newASF = calcISF(
      this.state.combatStats.CE,
      this.state.attributeStats[4],
      adjust
    );
    //XXXX need to trigger update HandCA
    //this.updateCombatActionsViaASFFromAGI(newASF);
    this.setState({
      combatStats: {
        SAL: this.state.combatStats.SAL,
        CE: this.state.combatStats.CE,
        ISF: this.state.combatStats.ISF,
        ASF: newASF
      }
    });
  };

  //this is new XXXX -> watch for issues due only did Gun CA before
  // updateCombatActionsViaASFFromAGI = updatedASF => {
  //   // console.log("MSarg", maxSp, "ISF?...", this.state.combatStats.ISF);
  //   const newHandActions = calcCombatActions(this.state.maxSpeed, updatedASF);
  //   if (newHandActions) {
  //     //console.log("triggered", newHandActions);
  //     this.setState({ combatActions: [newHandActions] });
  //   }
  // };

  updateISFFromINT = adjust => {
    const newISF = calcISF(
      this.state.combatStats.SAL,
      this.state.attributeStats[1],
      adjust
    );
    //this is new XXXX
    //console.log("newISF", newISF, "maxS", this.state.maxSpeed);
    this.updateCombatActionsViaISFFromINT(newISF);
    this.setState({
      combatStats: {
        SAL: this.state.combatStats.SAL,
        CE: this.state.combatStats.CE,
        ISF: newISF,
        ASF: this.state.combatStats.ASF
      }
    });
  };
  //this is new XXXX
  updateCombatActionsViaISFFromINT = updatedISF => {
    console.log("Array?..", this.state.maxSpeed, updatedISF);
    let tempMS = this.state.maxSpeed;
    if (Array.isArray(tempMS)) {
      tempMS = tempMS.filter(function(val) {
        return val;
      });
      tempMS = tempMS[0];
      console.log("temp", tempMS);
    }
    const newGunActions = calcCombatActions(tempMS, updatedISF);
    if (newGunActions) {
      //console.log("triggered", newGunActions);
      this.setState({ combatActions: [newGunActions] });
    }
  };

  // updateCombatActions = maxSp => {
  //   //console.log("MSarg", maxSp, "ISF?...", this.state.combatStats.ISF);
  //   const newGunActions = calcCombatActions(
  //     maxSp[0],
  //     this.state.combatStats.ISF
  //   );
  //   if (newGunActions) {
  //     //console.log("triggered", newGunActions);
  //     this.setState({ combatActions: [newGunActions] });
  //   }
  // };

  updateBaseSpeed = () => {
    const newBS = calcBaseSpeed(
      this.state.attributeStats[0],
      this.state.equipmentWeight
    );
    if (newBS) {
      const filteredNewBS = newBS.filter(val => {
        return val;
      });
      this.updateMS(filteredNewBS);
      this.setState({ baseSpeed: newBS });
    }
  };

  updateMS = newBS => {
    const newMS = calcMaxSpeed(this.state.attributeStats[4], newBS);
    if (newMS) {
      //console.log("newMS", newMS);
      const filteredNewMS = newMS.filter(val => {
        return val;
      });
      //console.log(filteredNewMS);
      this.updateCombatActions(filteredNewMS);
      this.setState({ maxSpeed: newMS });
    }
  };

  updateCombatActions = maxSp => {
    //console.log("MSarg", maxSp, "ISF?...", this.state.combatStats.ISF);
    const newGunActions = calcCombatActions(
      maxSp[0],
      this.state.combatStats.ISF
    );
    if (newGunActions) {
      //console.log("triggered", newGunActions);
      this.setState({ combatActions: [newGunActions] });
    }
    const newHandActions = calcCombatActions(
      maxSp[0],
      this.state.combatStats.ASF
    );
    if (newHandActions) {
      //console.log("triggered", newGunActions);
      this.setState({
        combatActions: [this.state.combatActions[0], newHandActions]
      });
    }
  };

  addToStat = index => {
    this.setState(state => {
      const attributeStats = state.attributeStats.map((item, dex) => {
        if (dex === index) {
          return item >= 20 ? 20 : item + 1;
        } else {
          return item;
        }
      });
      return { attributeStats };
    });
  };

  minusFromStat = index => {
    this.setState(state => {
      const attributeStats = state.attributeStats.map((item, dex) => {
        if (dex === index) {
          return item <= 3 ? 3 : item - 1;
        } else {
          return item;
        }
      });
      return { attributeStats };
    });
  };

  addToLevel = index => {
    this.setState(state => {
      const skillLevels = state.skillLevels.map((item, dex) => {
        if (dex === index) {
          return item >= 20 ? 20 : item + 1;
        } else {
          return item;
        }
      });
      const newSAL = skillLevels.map(level => {
        return findSAL(level);
      });
      //XXXX ISF to trigger GunCA and ASF to trigger HandCA
      this.updateCombatActionsViaISFFromINT(
        calcISF(newSAL[0], this.state.attributeStats[1])
      );
      const combatStats = {
        SAL: newSAL[0],
        CE: newSAL[1],
        ISF: calcISF(newSAL[0], this.state.attributeStats[1]),
        ASF: calcISF(newSAL[1], this.state.attributeStats[4])
      };
      return { skillLevels, combatStats };
    });
  };

  // updateCombatActionsViaISFFromINT = updatedISF => {
  //   console.log("Array?..", this.state.maxSpeed, updatedISF);
  //   let tempMS = this.state.maxSpeed;
  //   if (Array.isArray(tempMS)) {
  //     tempMS = tempMS.filter(function(val) {
  //       return val;
  //     });
  //     tempMS = tempMS[0];
  //     console.log("temp", tempMS);
  //   }
  //   const newGunActions = calcCombatActions(tempMS, updatedISF);
  //   if (newGunActions) {
  //     //console.log("triggered", newGunActions);
  //     this.setState({ combatActions: [newGunActions] });
  //   }
  // };

  // updateCombatActions = maxSp => {
  //   //console.log("MSarg", maxSp, "ISF?...", this.state.combatStats.ISF);
  //   const newGunActions = calcCombatActions(
  //     maxSp[0],
  //     this.state.combatStats.ISF
  //   );
  //   if (newGunActions) {
  //     //console.log("triggered", newGunActions);
  //     this.setState({ combatActions: [newGunActions] });
  //   }
  // };

  minusFromLevel = index => {
    this.setState(state => {
      const skillLevels = state.skillLevels.map((item, dex) => {
        if (dex === index) {
          return item <= 0 ? 0 : item - 1;
        } else {
          return item;
        }
      });

      const newSAL = skillLevels.map(level => {
        return findSAL(level);
      });
      //XXXX ISF to trigger GunCA and ASF to trigger HandCA
      const combatStats = {
        SAL: newSAL[0],
        CE: newSAL[1],
        ISF: calcISF(newSAL[0], this.state.attributeStats[1]),
        ASF: calcISF(newSAL[1], this.state.attributeStats[4])
      };
      return { skillLevels, combatStats };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Wrapper">
            <div className="Title">
              Phonix Command Character Generator *Mock Up*
            </div>
            <div className="Equipment-Weight">
              <span>Equipment Weight: {this.state.equipmentWeight}</span>
              <button className="Weight-Up" onClick={this.addWeight.bind(this)}>
                Add 5lbs
              </button>
              <button
                className="Weight-Down"
                onClick={this.minusWeight.bind(this)}
              >
                Minus 5lbs
              </button>
            </div>
            <div className="Stats">
              <div className="Stat-Text">
                <span>Strength</span>
                <span>Intelligence</span>
                <span>Willpower</span>
                <span>Health</span>
                <span>Agility</span>
              </div>
              <div className="Stat-Value">
                <span> (STR) {this.state.attributeStats[0]} </span>
                <span> (INT) {this.state.attributeStats[1]} </span>
                <span> (WIL) {this.state.attributeStats[2]} </span>
                <span> (HLT) {this.state.attributeStats[3]} </span>
                <span> (AGI) {this.state.attributeStats[4]} </span>
              </div>
              <div className="Stat-Adjust">
                <div className="STR-Adjust">
                  <button
                    className="Stat-Up"
                    onClick={this.addToSTR.bind(this)}
                  >
                    +1
                  </button>
                  <button
                    className="Stat-Down"
                    onClick={this.minusFromSTR.bind(this)}
                  >
                    -1
                  </button>
                </div>
                <div>
                  <button
                    className="Stat-Up"
                    onClick={this.addToINT.bind(this)}
                  >
                    +1
                  </button>
                  <button
                    className="Stat-Down"
                    onClick={this.minusFromINT.bind(this)}
                  >
                    -1
                  </button>
                </div>
                <div>
                  <button
                    className="Stat-Up"
                    onClick={this.addToStat.bind(this, 2)}
                  >
                    +1
                  </button>
                  <button
                    className="Stat-Down"
                    onClick={this.minusFromStat.bind(this, 2)}
                  >
                    -1
                  </button>
                </div>
                <div>
                  <button
                    className="Stat-Up"
                    onClick={this.addToStat.bind(this, 3)}
                  >
                    +1
                  </button>
                  <button
                    className="Stat-Down"
                    onClick={this.minusFromStat.bind(this, 3)}
                  >
                    -1
                  </button>
                </div>
                <div>
                  <button
                    className="Stat-Up"
                    onClick={this.addToAGI.bind(this)}
                  >
                    +1
                  </button>
                  <button
                    className="Stat-Down"
                    onClick={this.minusFromAGI.bind(this)}
                  >
                    -1
                  </button>
                </div>
              </div>
            </div>
            <div className="Speed">
              <p>
                Base Speed
                <span> BS {this.state.baseSpeed} </span>
              </p>
              <p>
                Maximum Speed
                <span> MS {this.state.maxSpeed}</span>
              </p>
            </div>
            <div className="Combat-Level">
              <p>
                <span>Gun Combat Skill Level {this.state.skillLevels[0]} </span>
                <button
                  className="Stat-Up"
                  onClick={this.addToLevel.bind(this, 0)}
                >
                  +1
                </button>
                <button
                  className="Stat-Down"
                  onClick={this.minusFromLevel.bind(this, 0)}
                >
                  -1
                </button>
              </p>
              <p>
                <span>
                  Hand To Hand Skill Level {this.state.skillLevels[1]} {""}
                </span>
                <button
                  className="Stat-Up"
                  onClick={this.addToLevel.bind(this, 1)}
                >
                  +1
                </button>
                <button
                  className="Stat-Down"
                  onClick={this.minusFromLevel.bind(this, 1)}
                >
                  -1
                </button>
              </p>
              <div className="Combat-Stats">
                <p>
                  Skill Accuracy Level
                  <span> (SAL) {this.state.combatStats.SAL} </span>
                </p>
                <p>
                  Combat Efficiency
                  <span> (CE) {this.state.combatStats.CE}</span>
                </p>
                <p>
                  INT Skill Factor
                  <span> (ISF) {this.state.combatStats.ISF} </span>
                </p>
                <p>
                  AGI Skill Factor
                  <span> (ASF) {this.state.combatStats.ASF} </span>
                </p>
              </div>
              <div className="Combat-Actions">
                Combat Actions
                <div className="Actions">
                  <p>
                    Gun Combat
                    <span> {this.state.combatActions[0]}</span>
                  </p>
                  <p>
                    Hand To Hand
                    <span> {this.state.combatActions[1]}</span>
                  </p>
                  <p>
                    Damage Bonus
                    <span> {this.state.combatActions[2]}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
export default App;
