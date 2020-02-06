import React from 'react';
import ActionTable from './ActionTable';
import { combatStatsShape } from '../../helpers/proptypeShapes';

const ActionsCard = ({ combatStats }) => (
  <div className="combatDataContainer">
    <ActionTable
      combatActions={combatStats.combatActions}
    />
    <div className="additionalCombatData">
      {[`BS ${combatStats.baseSpeed}`, `MS ${combatStats.maxSpeed}`, `DB ${combatStats.damageBonus}`].map((value) => (
        <div key={value}>
          {value}
        </div>
      ))}
    </div>
  </div>
);

ActionsCard.propTypes = {
  combatStats: combatStatsShape.isRequired,
};

export default ActionsCard;
