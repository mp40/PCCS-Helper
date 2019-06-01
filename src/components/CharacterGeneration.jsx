import React, { Component } from 'react';
import { connect } from 'react-redux';
import AttributeCard from './AttributeCard';
import CombatCard from './CombatCard';
import ActionsCard from './ActionsCard';
import EquipmentCard from './EquipmentCard';
import ClothingCard from './ClothingCard';
import WeaponsCard from './WeaponsCard';
import { updateWeight, updateAttributes } from '../actions';

import './CharacterGeneration.css';

const defaultStats = {
  str: 10,
  int: 10,
  wil: 10,
  hlt: 10,
  agi: 10,
  gunLevel: 0,
  handLevel: 0,
};

class CreateChar extends Component {
  componentDidMount() {
    this.props.updateAttributes(defaultStats, 0);
    this.props.updateWeight(5, defaultStats);
  }

  render() {
    return (
      <div className="createCharContainer">
        <div className="dataCardContainer">
          <AttributeCard />
          <CombatCard />
          <ActionsCard />
          <ClothingCard />
        </div>
        <EquipmentCard />
        <WeaponsCard />
      </div>
    );
  }
}

const mapStateToProps = () => ({
});


export default connect(mapStateToProps, { updateWeight, updateAttributes })(CreateChar);
