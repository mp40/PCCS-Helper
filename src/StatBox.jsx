import React, { Component } from "react";
class StatBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Stats">
        <div className="Stat-Text">
          <span>Strength</span>
          <span>Intelligence</span>
          <span>Willpower</span>
          <span>Health</span>
          <span>Agility</span>
          <span>Gun Combat</span>
          <span>Hand to Hand</span>
        </div>
        <div className="Stat-Value">
          <span> (STR) {this.props.str} </span>
          <span> (INT) {this.props.int} </span>
          <span> (WIL) {this.props.wil} </span>
          <span> (HLT) {this.props.hlt} </span>
          <span> (AGI) {this.props.agi} </span>
          <span className="Level"> Level {this.props.gunLevel}</span>
          <span className="Level"> Level {this.props.handLevel}</span>
        </div>
        <div className="Stat-Adjust">
          <div className="STR-Adjust">
            <button
              className="Stat-Up"
              onClick={this.props.addToStat.bind(this, "str")}
            >
              +1
            </button>
            <button
              className="Stat-Down"
              onClick={this.props.minusFromStat.bind(this, "str")}
            >
              -1
            </button>
          </div>
          <div>
            <button
              className="Stat-Up"
              onClick={this.props.addToStat.bind(this, "int")}
            >
              +1
            </button>
            <button
              className="Stat-Down"
              onClick={this.props.minusFromStat.bind(this, "int")}
            >
              -1
            </button>
          </div>
          <div>
            <button
              className="Stat-Up"
              onClick={this.props.addToStat.bind(this, "wil")}
            >
              +1
            </button>
            <button
              className="Stat-Down"
              onClick={this.props.minusFromStat.bind(this, "wil")}
            >
              -1
            </button>
          </div>
          <div>
            <button
              className="Stat-Up"
              onClick={this.props.addToStat.bind(this, "hlt")}
            >
              +1
            </button>
            <button
              className="Stat-Down"
              onClick={this.props.minusFromStat.bind(this, "hlt")}
            >
              -1
            </button>
          </div>
          <div>
            <button
              className="Stat-Up"
              onClick={this.props.addToStat.bind(this, "agi")}
            >
              +1
            </button>
            <button
              className="Stat-Down"
              onClick={this.props.minusFromStat.bind(this, "agi")}
            >
              -1
            </button>
          </div>
          <div>
            <button
              className="Stat-Up"
              onClick={this.props.addToLevel.bind(this, "gunLevel")}
            >
              +1
            </button>
            <button
              className="Stat-Down"
              onClick={this.props.minusFromLevel.bind(this, "gunLevel")}
            >
              -1
            </button>
          </div>
          <div>
            <button
              className="Stat-Up"
              onClick={this.props.addToLevel.bind(this, "handLevel")}
            >
              +1
            </button>
            <button
              className="Stat-Down"
              onClick={this.props.minusFromLevel.bind(this, "handLevel")}
            >
              -1
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default StatBox;
