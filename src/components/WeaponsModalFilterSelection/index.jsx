import React, { Component } from 'react';

import '../WeaponsCard/WeaponsCard.css';

class WeaponsModalFilterSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterByType: false,
    };
  }

    handleUpdateFilter = (event) => {
      this.setState({ filterByType: event.target.value });
    }

    render() {
      const { filterByType } = this.state;
      return (
        <div>
          <form>
            <input
              type="radio"
              name="filter"
              value="All"
              checked={filterByType === false}
              className="selectAllFilter"
              onChange={this.handleUpdateFilter}
            />
            <input
              type="radio"
              name="filter"
              value="Rifles"
              checked={filterByType === 'Rifles'}
              className="selectRifleFilter"
              onChange={this.handleUpdateFilter}
            />
          </form>
        </div>
      );
    }
}

export default WeaponsModalFilterSelection;
