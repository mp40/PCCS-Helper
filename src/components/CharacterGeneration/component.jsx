import React from 'react';
import PropTypes from 'prop-types';

import AttributeCard from '../AttributeCard';
import CombatCard from '../CombatCard';
import ActionsCard from '../ActionsCard';
import EquipmentCard from '../EquipmentCard';
import ClothingCard from '../ClothingCard';
import WeaponsCard from '../WeaponsCard';
import BodyArmourCard from '../BodyArmourCard';
import NameCard from '../NameCard';

import Print from '../Print';
import Save from '../Save';

import styles from './styles.module.css';

const CharacterGeneration = ({ totalWeight, selectCurrentView, signedIn }) => (
  <div className={styles.wrapper}>

    <div className={`${styles.topCard} --card`}>
      <div>
        <h1>Edit Character</h1>
        <h2>
          {`Total Lbs: ${totalWeight}`}
        </h2>
        <button
          type="button"
          onClick={() => selectCurrentView('playCharacter')}
        >
          Use Character
        </button>
      </div>

      <div>
        <Print />
        {signedIn && (
        <Save />
        )}
      </div>

    </div>

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

CharacterGeneration.propTypes = {
  totalWeight: PropTypes.number.isRequired,
  selectCurrentView: PropTypes.func.isRequired,
  signedIn: PropTypes.bool.isRequired,
};

export default CharacterGeneration;
