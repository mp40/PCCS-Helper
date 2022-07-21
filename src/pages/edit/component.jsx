import React from 'react';
import PropTypes from 'prop-types';

import AttributeCard from '../../components/AttributeCard';
import CombatCard from '../../components/CombatCard';
import ActionsCard from '../../components/ActionsCard';
import EquipmentCard from '../../components/EquipmentCard';
import ClothingCard from '../../components/ClothingCard';
import WeaponsCard from '../../components/WeaponsCard';
import BodyArmourCard from '../../components/BodyArmourCard';
import NameCard from '../../components/NameCard';

import Print from '../../components/Print';
import Save from '../../components/Save';

import Link from '../../components/widgets/link';

import styles from './styles.module.css';

const EditPage = ({ totalWeight, signedIn }) => (
  <div className={styles.wrapper}>

    <div className={`${styles.topCard} card-standard`}>
      <div>
        <h1>Edit Character</h1>
        <h2>
          {`Total Lbs: ${totalWeight}`}
        </h2>
        <Link href="/use" text="Use Character" />
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

EditPage.propTypes = {
  totalWeight: PropTypes.number.isRequired,
  signedIn: PropTypes.bool.isRequired,
};

export default EditPage;
