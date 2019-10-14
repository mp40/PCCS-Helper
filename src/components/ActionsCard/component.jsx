import React from 'react';
import ActionTable from './ActionTable';
import { combatStatsShape } from '../../helpers/proptypeShapes';

const ActionsCard = ({ combatStats }) => (
  <div className="combatDataContainer">
    <ActionTable
      combatActions={combatStats.combatActions}
    />
    <table className="additionalCombatData">
      <tbody>
        <tr>
          <td style={{ width: '33.33%' }}>
            {`BS ${combatStats.baseSpeed}`}
          </td>
          <td style={{ width: '33.33%' }}>
            {`MS ${combatStats.maxSpeed}`}
          </td>
          <td style={{ width: '33.33%' }}>
            {`DB ${combatStats.damageBonus}`}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

ActionsCard.propTypes = {
  combatStats: combatStatsShape.isRequired,
};

export default ActionsCard;
