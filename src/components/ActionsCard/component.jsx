import React from 'react';

import ActionsTable from '../ActionsTable';

import { combatStatsShape } from '../../helpers/proptypeShapes';

import styles from './styles.module.css';

// combatStats: {
//   baseSpeed: state.currentCharacter.baseSpeed,
//   maxSpeed: state.currentCharacter.maxSpeed,
//   damageBonus: state.currentCharacter.damageBonus,
//   gunCombatActions: state.currentCharacter.gunCombatActions,
//   handCombatActions: state.currentCharacter.handCombatActions,
// },

const ActionsCard = ({ combatStats }) => (
  <div className={`--card ${styles.wrapper}`}>
    <ActionsTable gunCombatActions={combatStats.gunCombatActions} handCombatActions={combatStats.handCombatActions} />
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
