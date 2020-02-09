import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AttributeCard from '../AttributeCard';
import CombatCard from '../CombatCard';
import ActionsCard from '../ActionsCard';
import EquipmentCard from '../EquipmentCard';
import ClothingCard from '../ClothingCard';
import WeaponsCard from '../WeaponsCard';
import BodyArmourCard from '../BodyArmourCard';
import NameCard from '../NameCard';

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

const CharacterGeneration = ({ updateAttributes, updateWeight }) => {
  const handleUpdateAttributes = () => {
    updateAttributes(defaultStats, 0);
  };

  const handleUpdateWeight = () => {
    updateWeight(5, defaultStats);
  };

  useEffect(() => {
    handleUpdateAttributes();
    handleUpdateWeight();
  });

  return (
    <div className="createCharContainer">
      <div className="dataCardContainer">
        <NameCard />
        <AttributeCard />
        <CombatCard />
        <ActionsCard />
        <ClothingCard />
        <BodyArmourCard />
      </div>
      <EquipmentCard />
      <WeaponsCard />
    </div>
  );
};

CharacterGeneration.propTypes = {
  updateWeight: PropTypes.func,
  updateAttributes: PropTypes.func,
};

export default CharacterGeneration;
