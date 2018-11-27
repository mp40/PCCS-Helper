import React, { Component } from "react";
import "./App.css";
//import db from './base'

// import { ReactRadial } from "react-radial";

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <h1>
            <form onSubmit={this.props.handleSubmit}>
              <label>
                New Name:
                <input
                  type="text"
                  value={this.props.value}
                  onChange={this.props.handleChange}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </h1>
          <button onClick={this.props.closePopup}>done</button>
        </div>
      </div>
    );
  }
}
// Stackoverflow example
// class Parent extends React.Component {
//   constructor(props) {
//     super(props)

//     this.handler = this.handler.bind(this)
//   }

//   handler(e) {
//     e.preventDefault()
//     this.setState({
//       someVar: someValue
//     })
//   }

//   render() {
//     return <Child handler = {this.handler} />
//   }
// }

// class Child extends React.Component {
//   render() {
//     return <Button onClick = {this.props.handler}/ >
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
      CombatActions: [],
      showPopup: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log("handleChange fired");
    console.log(this.state);
  }
  handleSubmit(event) {
    alert("submited name: ", this.state.characterName);
    console.log("handleSubmit ran");
    event.preventDefault();
  }
  togglePopup() {
    this.setState({ showPopup: !this.state.showPopup });
  }

  render() {
    console.log("Render Ran");
    return (
      <div className="App">
        <header className="App-header">
          <div className="Wrapper">
            <div className="Title">
              Phonix Command Character Generator *Mock Up*
            </div>
            <div className="Character-Name">
              <button
                className="Name-Button"
                onClick={this.togglePopup.bind(this)}
              >
                Name: {this.state.characterName}
              </button>
              {this.state.showPopup ? (
                <Popup closePopup={this.togglePopup.bind(this)} />
              ) : null}
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
                <button
                  className="STR-Button"
                  // onClick={this.SelectSTR.bind(this)}
                >
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
