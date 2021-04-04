import React from 'react';

import ActionsTable from '../ActionsTable';

import { combatStatsShape } from '../../helpers/proptypeShapes';

import styles from './styles.module.css';

const ActionsCard = ({ combatStats }) => (
  <div className={`--card ${styles.wrapper}`}>
    <ActionsTable />
    <div className={styles.movement}>
      {[`BS ${combatStats.baseSpeed}`, `MS ${combatStats.maxSpeed}`, `DB ${combatStats.damageBonus}`].map((value) => (
        <span key={value}>
          {value}
        </span>
      ))}
    </div>
  </div>
);

ActionsCard.propTypes = {
  combatStats: combatStatsShape.isRequired,
};

export default ActionsCard;
