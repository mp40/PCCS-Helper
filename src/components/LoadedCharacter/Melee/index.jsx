import React from 'react';
import PropTypes from 'prop-types';

import HandToHandTable from '../../HandToHandTable';

import styles from './styles.module.css';

const LoadedCharacterMelee = ({ melee, handLevel }) => (
  <div className={`card-standard ${styles.card}`}>
    <h2>Melee</h2>
    <HandToHandTable
      meleeList={melee}
      meleeLevel={handLevel}
    />
  </div>
);

LoadedCharacterMelee.propTypes = {
  melee: PropTypes.arrayOf(PropTypes.string).isRequired,
  handLevel: PropTypes.number,
};

export default LoadedCharacterMelee;
