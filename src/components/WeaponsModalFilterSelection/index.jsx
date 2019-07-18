import React, { Component } from 'react';

import '../WeaponsCard/WeaponsCard.css';

const radioButtonContainer = {
  display: 'flex',
  fontSize: 'small',
};

class WeaponsModalFilterSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterByType: 'All',
    };
  }

  handleUpdateFilter(event) {
    this.setState({ filterByType: event.target.value });
  }

  renderRadioButton(value, checked, className) {
    return (
      <div style={radioButtonContainer}>
        <div>{value}</div>
        <input
          type="radio"
          name="filter"
          value={value}
          checked={checked}
          className={className}
          onChange={this.handleUpdateFilter.bind(this)}
        />
      </div>
    );
  }

  render() {
    const { filterByType } = this.state;
    return (
      <div>
        <div style={{ fontSize: 'medium' }}>Filter By Type</div>
        <form className="filterByFirearmTypeForm">
          {this.renderRadioButton('All', filterByType === 'All', 'selectAllFilter')}
          {this.renderRadioButton('Rifles', filterByType === 'Rifles', 'selectRifleFilter')}
          {this.renderRadioButton('Pistols', filterByType === 'Pistols', 'selectPistolFilter')}
          {this.renderRadioButton('SMGs', filterByType === 'SMGs', 'selectSMGFilter')}
          {this.renderRadioButton('MGs', filterByType === 'MGs', 'selectMGFilter')}
          {this.renderRadioButton('Shotguns', filterByType === 'Shotguns', 'selectShotgunFilter')}
          {this.renderRadioButton('Sniper Rifles', filterByType === 'Sniper Rifles', 'selectSniperRifleFilter')}
        </form>
      </div>
    );
  }
}

export default WeaponsModalFilterSelection;
