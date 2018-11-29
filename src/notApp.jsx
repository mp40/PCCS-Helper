import React, { Component } from "react";
import "./App.css";

const { calcGunCAAtOnce } = require("./helperFunctions");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      equipmentWeight: 5,
      str: 14,
      int: 10,
      wil: 10,
      hlt: 10,
      agi: 12,
      baseSpeed: 2,
      maxSpeed: 3.5,
      skillLevels: [4, 2],
      combatStats: { SAL: 10, CE: 7, ISF: 24, ASF: 22 },
      combatActions: [5, 4, 1.5]
    };
  }

  addToSTR = () => {
    //this.updateBaseSpeed();
    //this.addToStat(0);
    const update = calcGunCAAtOnce(
      this.state.str,
      this.state.equipmentWeight,
      this.state.agi,
      this.state.gunLevel,
      this.state.int
    );
    console.log(update);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Wrapper">
            <div className="Stats">
              <div className="Stat-Text">
                <span>Strength</span>
              </div>
              <div className="Stat-Adjust">
                <div className="STR-Adjust">
                  <button
                    className="Stat-Up"
                    onClick={this.addToSTR.bind(this)}
                  >
                    +1
                  </button>
                  {/* <button
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
                  </button> */}
                </div>
                <div>
                  {/* <button
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
                </div>
                <div>
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
                  </button> */}
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
