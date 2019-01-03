import React, { Component } from "react";
import "./App.css";
import StatBox from "./StatBox";

const { calculateStateObject } = require("./helperFunctions");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      equipmentWeight: 10,
      str: 10,
      int: 10,
      wil: 10,
      hlt: 10,
      agi: 10,
      baseSpeed: 0,
      maxSpeed: 0,
      gunLevel: 0,
      handLevel: 0,
      combatStats: { SAL: 0, CE: 0, ISF: 0, ASF: 0 },
      combatActions: [0, 0],
      knockoutValue: 0,
      damageBonus: 0
    };
  }

  componentDidMount() {
    // (STR, Weight, AGI, Gun Level, INT, Hand Level, wil)
    const seedData = calculateStateObject(10, 10, 10, 0, 10, 0, 10);
    console.log(seedData);
    this.setState({
      equipmentWeight: 10,
      baseSpeed: seedData.baseSpeed,
      maxSpeed: seedData.maxSpeed,
      combatStats: {
        SAL: seedData.sal,
        CE: seedData.ce,
        ISF: seedData.isf,
        ASF: seedData.asf
      },
      combatActions: [seedData.gunActions, seedData.handActions],
      knockoutValue: seedData.knockoutValue,
      damageBonus: seedData.damageBonus
    });
  }

  weightWarningOn() {
    this.setState({ weightWarningMsg: true });
  }

  weightWarningOff() {
    this.setState({ weightWarningMsg: false });
  }
  updateAllStats() {
    // (STR, Weight, AGI, Gun Level, INT, Hand Level)
    const str = this.state.str;
    const weight = this.state.equipmentWeight;
    const agi = this.state.agi;
    const gun = this.state.gunLevel;
    const int = this.state.int;
    const hand = this.state.handLevel;
    const wil = this.state.wil;
    const newData = calculateStateObject(str, weight, agi, gun, int, hand, wil);
    if (newData.baseSpeed === 0) {
      this.weightWarningOn();
    } else {
      this.weightWarningOff();
    }
    this.setState({
      baseSpeed: newData.baseSpeed,
      maxSpeed: newData.maxSpeed,
      combatStats: {
        SAL: newData.sal,
        CE: newData.ce,
        ISF: newData.isf,
        ASF: newData.asf
      },
      combatActions: [newData.gunActions, newData.handActions],
      knockoutValue: newData.knockoutValue,
      damageBonus: newData.damageBonus
    });
  }

  addWeight() {
    this.setState({ equipmentWeight: this.state.equipmentWeight + 5 }, () => {
      this.updateAllStats();
    });
  }

  minusWeight() {
    if (this.state.equipmentWeight <= 10) {
      this.setState({ equipmentWeight: this.state.equipmentWeight });
    } else {
      this.setState({ equipmentWeight: this.state.equipmentWeight - 5 }, () => {
        this.updateAllStats();
      });
    }
  }

  addToStat = key => {
    this.setState({ [key]: this.state[key] + 1 }, () => {
      this.updateAllStats();
    });
  };

  minusFromStat = key => {
    this.setState({ [key]: this.state[key] - 1 }, () => {
      this.updateAllStats();
    });
  };

  addToLevel = key => {
    this.setState({ [key]: this.state[key] + 1 }, () => {
      this.updateAllStats();
    });
  };

  minusFromLevel = key => {
    this.setState({ [key]: this.state[key] - 1 }, () => {
      this.updateAllStats();
    });
  };

  calcPreset = (newStr, newInt, newWil, newHlt, newAgi, newGun, newHand) => {
    this.setState(
      {
        str: newStr,
        int: newInt,
        wil: newWil,
        hlt: newHlt,
        agi: newAgi,
        gunLevel: newGun,
        handLevel: newHand
      },
      () => {
        this.updateAllStats();
      }
    );
  };

  calcRandom = () => {
    this.setState(
      {
        str: Math.floor(Math.random() * 13 + 4),
        int: Math.floor(Math.random() * 13 + 4),
        wil: Math.floor(Math.random() * 13 + 4),
        hlt: Math.floor(Math.random() * 13 + 4),
        agi: Math.floor(Math.random() * 13 + 4)
      },
      () => {
        this.updateAllStats();
      }
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1
            className="App-title"
            onClick={() => this.setState({ button: !this.state.button })}
          >
            Phoenix Command Tools
          </h1>
          <div className="Wrapper">
            <StatBox
              str={this.state.str}
              int={this.state.int}
              wil={this.state.wil}
              hlt={this.state.hlt}
              agi={this.state.agi}
              gunLevel={this.state.gunLevel}
              handLevel={this.state.handLevel}
              addToStat={this.addToStat.bind(this)}
              minusFromStat={this.minusFromStat.bind(this)}
              addToLevel={this.addToLevel.bind(this)}
              minusFromLevel={this.minusFromLevel.bind(this)}
            />

            <div className="Game-Info">
              <h1>Attributes</h1>
              <div className="Equipment-Weight">
                <div className="Weight-Box">
                  <span className="Weight-Tag">
                    Equipment Weight: {this.state.equipmentWeight}
                  </span>
                  <button
                    className="Weight-Up"
                    onClick={this.minusWeight.bind(this)}
                  >
                    Minus 5lbs
                  </button>
                  <button
                    className="Weight-Down"
                    onClick={this.addWeight.bind(this)}
                  >
                    Add 5lbs
                  </button>
                  <div
                    className="Warning-Box"
                    style={{
                      backgroundColor: this.state.weightWarningMsg
                        ? "#f44336"
                        : "#d1f0bf"
                    }}
                  >
                    {this.state.weightWarningMsg
                      ? "Weight Capacity Reached"
                      : null}
                  </div>
                </div>
              </div>

              <div className="Game-Info2">
                <div className="Combat-Actions-Container">
                  <div className="Combat-Actions">
                    <div className="Skill-Box">
                      <p>
                        Skill Accuracy Level
                        <span> (SAL) {this.state.combatStats.SAL} </span>
                      </p>
                      <p>
                        Combat Efficiency
                        <span> (CE) {this.state.combatStats.CE}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="Combat-Actions-Container">
                  <div className="Combat-Actions">
                    <div className="Factor-Box">
                      <p>
                        INT Skill Factor
                        <span> (ISF) {this.state.combatStats.ISF} </span>
                      </p>
                      <p>
                        AGI Skill Factor
                        <span> (ASF) {this.state.combatStats.ASF} </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="Combat-Actions-Container">
                  <div className="Combat-Actions">
                    <p
                      style={{
                        backgroundColor: this.state.weightWarningMsg
                          ? "#f44336"
                          : "#d1f0bf"
                      }}
                    >
                      Gun Combat Actions
                      <span
                        style={{
                          color:
                            this.state.combatActions[0] < 1
                              ? "white"
                              : this.state.combatActions[0] < 3
                              ? "red"
                              : this.state.combatActions[0] < 4
                              ? "orange"
                              : this.state.combatActions[0] > 6
                              ? "blue"
                              : this.state.combatActions[0] > 4
                              ? "dodgerblue"
                              : "#30362c"
                        }}
                      >
                        {" "}
                        {this.state.combatActions[0]}
                      </span>
                    </p>
                    <p
                      style={{
                        backgroundColor: this.state.weightWarningMsg
                          ? "#f44336"
                          : "#d1f0bf"
                      }}
                    >
                      Hand To Hand Actions
                      <span
                        style={{
                          color:
                            this.state.combatActions[1] < 1
                              ? "white"
                              : this.state.combatActions[1] < 3
                              ? "red"
                              : this.state.combatActions[1] < 4
                              ? "orange"
                              : this.state.combatActions[1] > 6
                              ? "blue"
                              : this.state.combatActions[1] > 4
                              ? "dodgerblue"
                              : "#30362c"
                        }}
                      >
                        {" "}
                        {this.state.combatActions[1]}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="Combat-Actions-Container">
                  <div className="Combat-Actions">
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
                  </div>
                </div>
              </div>
              <div>
                {/* <h1
                  onClick={() => this.setState({ button: !this.state.button })}
                >
                  Phoenix Command Helper
                </h1> */}
                <div className="Line-Spacer" />
                {this.state.button ? (
                  <button
                    className="Turbo"
                    onClick={() => this.setState({ done: !this.state.done })}
                  >
                    Turbo Mode
                  </button>
                ) : null}
                <div className="Button-Spacer" />
                {this.state.button ? (
                  <button
                    className="SelectPreset"
                    onClick={() =>
                      this.setState({ showPresets: !this.state.showPresets })
                    }
                  >
                    Presets
                  </button>
                ) : null}
                <div />
                <div />
                {this.state.done ? <h2>TDD - Go Fast!</h2> : null}
              </div>
            </div>
          </div>
          {this.state.showPresets ? (
            <div className="Presets">
              <div className="Stats">
                <div ClassName="Stat-Text">
                  {" "}
                  <button
                    className="Preset-Button"
                    onClick={this.calcPreset.bind(
                      this,
                      14,
                      10,
                      10,
                      10,
                      12,
                      4,
                      2
                    )}
                  >
                    Military
                  </button>
                  {/* <button className="Preset-Button">Military Police</button> */}
                  <button
                    className="Preset-Button"
                    onClick={this.calcPreset.bind(
                      this,
                      14,
                      12,
                      10,
                      10,
                      12,
                      5,
                      2
                    )}
                  >
                    Veteran
                  </button>
                  <button
                    className="Preset-Button"
                    onClick={this.calcPreset.bind(
                      this,
                      14,
                      13,
                      10,
                      10,
                      13,
                      4,
                      2
                    )}
                  >
                    SWAT
                  </button>
                  <button
                    className="Preset-Button"
                    onClick={this.calcPreset.bind(
                      this,
                      13,
                      12,
                      10,
                      10,
                      12,
                      2,
                      2
                    )}
                  >
                    Police
                  </button>
                  <button
                    className="Preset-Button"
                    onClick={this.calcPreset.bind(
                      this,
                      10,
                      10,
                      10,
                      10,
                      10,
                      0,
                      0
                    )}
                  >
                    Civilian
                  </button>
                  {/* <button className="Preset-Button">Secret Service</button> */}
                  <button
                    className="Preset-Button"
                    onClick={this.calcRandom.bind(this)}
                  >
                    Random
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </header>
      </div>
    );
  }
}

export default App;
