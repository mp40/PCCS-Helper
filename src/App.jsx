import React, { Component } from "react";
import "./App.css";
//import db from './base'

// const updateName = function() {
//   setState({ characterName: "test" });
// };

// class NameForm extends React.Component {
//   render() {
//     <form onSubmit={updateName}>
//       <label>
//         Name:
//         <imput type="text" />
//       </label>
//       <button type="submit">Submit</button>
//     </form>;
//   }
// }

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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Wrapper">
            <div className="Title">
              Phonix Command Character Generator *Mock Up*
            </div>
            <div className="Character-Name">
              <button className="Name-Button" onClick="">
                Name: {this.state.characterName}
              </button>
              <span>
                <button className="Weight-Button">
                  Equipment Weight: {this.state.equipmentWeight}
                </button>
              </span>
            </div>
            <div className="Stats">
              <p>
                Strength
                <span> STR </span>
                <button className="STR-Button">
                  {this.state.attributeStats[0]}
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
