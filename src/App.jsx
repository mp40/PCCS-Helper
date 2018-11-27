import React, { Component } from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characterName: "Default",
      equipmentWeight: 5,
      attributeStats: [14, 10, 10, 10, 12],
      speed: [],
      skillLevels: [4, 2],
      combatStats: [],
      CombatActions: []
    };
  }

  addWeight() {
    this.setState({ equipmentWeight: this.state.equipmentWeight + 5 });
  }

  minusWeight() {
    if (this.state.equipmentWeight <= 5) {
      this.setState({ equipmentWeight: this.state.equipmentWeight });
    } else {
      this.setState({ equipmentWeight: this.state.equipmentWeight - 5 });
    }
  }

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
      return { skillLevels };
    });
  };

  minusFromLevel = index => {
    this.setState(state => {
      const skillLevels = state.skillLevels.map((item, dex) => {
        if (dex === index) {
          return item <= 0 ? 0 : item - 1;
        } else {
          return item;
        }
      });
      return { skillLevels };
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
            <div className="Equipment Weight">
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
              <p>
                Strength
                <span> (STR) {this.state.attributeStats[0]} </span>
                <button
                  className="Stat-Up"
                  onClick={this.addToStat.bind(this, 0)}
                >
                  +1
                </button>
                <button
                  className="Stat-Down"
                  onClick={this.minusFromStat.bind(this, 0)}
                >
                  -1
                </button>
              </p>
              <p>
                Intelligence
                <span> (INT) {this.state.attributeStats[1]} </span>
                <button
                  className="Stat-Up"
                  onClick={this.addToStat.bind(this, 1)}
                >
                  +1
                </button>
                <button
                  className="Stat-Down"
                  onClick={this.minusFromStat.bind(this, 1)}
                >
                  -1
                </button>
              </p>
              <p>
                Willpower
                <span> (WIL) {this.state.attributeStats[2]} </span>
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
              </p>
              <p>
                Health
                <span> (HLT) {this.state.attributeStats[3]} </span>
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
              </p>
              <p>
                Agility
                <span> (AGI) {this.state.attributeStats[4]} </span>
                <button
                  className="Stat-Up"
                  onClick={this.addToStat.bind(this, 4)}
                >
                  +1
                </button>
                <button
                  className="Stat-Down"
                  onClick={this.minusFromStat.bind(this, 4)}
                >
                  -1
                </button>
              </p>
            </div>
            <div className="Speed">
              <p>
                Base Speed
                <span> BS </span>
                <span>1337 //to be rendered</span>
              </p>
              <p>
                Maximum Speed
                <span> MS </span>
                <span>1337 //to be rendered</span>
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
                  <span> SAL </span>
                  <span>1337 //to be rendered</span>
                </p>
                <p>
                  Combat Efficiency
                  <span> CE </span>
                  <span>1337 //to be rendered</span>
                </p>
                <p>
                  INT Skill Factor
                  <span> ISF </span>
                  <span>1337 //to be rendered</span>
                </p>
                <p>
                  AGI Skill Factor
                  <span> ASF </span>
                  <span>1337 //to be rendered</span>
                </p>
              </div>
              <div className="Combat-Actions">
                Combat Actions
                <div className="Actions">
                  <p>
                    Gun Combat
                    <span> 1337 //to be rendered</span>
                  </p>
                  <p>
                    Hand To Hand
                    <span> 1337 //to be rendered</span>
                  </p>
                  <p>
                    DB
                    <span> 1337 //to be rendered</span>
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
