import React from 'react';

import AttributeCard from '../AttributeCard';
import CombatCard from '../CombatCard';
import ActionsCard from '../ActionsCard';
import EquipmentCard from '../EquipmentCard';
import ClothingCard from '../ClothingCard';
import WeaponsCard from '../WeaponsCard';
import BodyArmourCard from '../BodyArmourCard';
import NameCard from '../NameCard';

import './CharacterGeneration.css';

const CharacterGeneration = () => (
  <div className="createCharContainer">
    <div>
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

export default CharacterGeneration;
