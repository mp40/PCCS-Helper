import React, { Component } from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characterName: "Default",
      equipmentWeight: 5,
      attributeStats: [14, 10, 10, 10, 12],
      // str: 14,
      // int: 10,
      // wil: 10,
      // hlt: 10,
      // agi: 12,
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

  // addSTR() {
  //   if (this.state.str < 20) {
  //     let attributes = [...this.state.attributeStats];
  //     let attribute = [...attributes[0]];
  //     attribute++;
  //     attributes[0] = attribute;
  //     this.setState({ attributes });
  //   }
  // }

  addSTR = index => {
    this.setState(state => {
      const attributeStats = state.attributeStats.map((item, dex) => {
        if (dex === index) {
          return item + 1;
        } else {
          return item;
        }
      });
      return { attributeStats };
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
                <span> STR {this.state.attributeStats[0]}</span>
                {/* <span> STR {this.state.str}</span> */}
                <button className="Stat-Up" onClick={this.addSTR.bind(this, 0)}>
                  +1
                </button>
                <button
                  className="Weight-Down"
                  //onClick={this.minusSTR.bind(this)}
                >
                  -1
                </button>
              </p>
              <p>
                Intelligence
                <span> INT </span>
                <button className="INT-Button">
                  {this.state.attributeStats[1]}
                </button>
              </p>
              <p>
                Willpower
                <span> WIL </span>
                <button className="WIL-Button">
                  {this.state.attributeStats[2]}
                </button>
              </p>
              <p>
                Health
                <span> HLT </span>
                <button className="STR-Button">
                  {this.state.attributeStats[3]}
                </button>
              </p>
              <p>
                Agility
                <span> AGI </span>
                <button className="AGI-Button">
                  {this.state.attributeStats[4]}
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
                Gun Combat Skill Level
                <button className="GunLevel-Button">
                  {this.state.skillLevels[0]}
                </button>
              </p>
              <p>
                Hand To Hand Skill Level
                <button className="HandLevel-Button">
                  {this.state.skillLevels[1]}
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
