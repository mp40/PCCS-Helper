import React from 'react';

import AttributeCard from '../AttributeCard';
import CombatCard from '../CombatCard';
import ActionsCard from '../ActionsCard';
import EquipmentCard from '../EquipmentCard';
import ClothingCard from '../ClothingCard';
import WeaponsCard from '../WeaponsCard';
import BodyArmourCard from '../BodyArmourCard';
import NameCard from '../NameCard';

import styles from './styles.module.css';

const CharacterGeneration = () => (
  <div className={styles.wrapper}>
    <div>
      <NameCard />
      <ClothingCard />
      <BodyArmourCard />
      <AttributeCard />
      <CombatCard />
      <ActionsCard />

    </div>
    <EquipmentCard />
    <WeaponsCard />
  </div>
);

export default CharacterGeneration;
