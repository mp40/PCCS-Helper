import React from 'react';
import { PropTypes } from 'prop-types';
import { combatStatsShape } from '../../helpers/proptypeShapes';

const renderStatLine = (name, value) => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div>{`${name}:`}</div>
    <div>{value}</div>
  </div>
);

const CombatStatsInfo = ({ combatStats, gunLevel, handLevel }) => (
  <div className="combatStatsInfo">
    <div className="combatStatColA">
      {renderStatLine('Base Speed', combatStats.baseSpeed)}
      {renderStatLine('Max Speed', combatStats.maxSpeed)}
      {renderStatLine('Knockout Val', combatStats.knockoutValue)}
    </div>
    <div className="combatStatColB">
      {renderStatLine('Gun Combat', gunLevel)}
      {renderStatLine('Melee Combat', handLevel)}
      {renderStatLine('Damage Bonus', combatStats.damageBonus)}
    </div>
  </div>
);

CombatStatsInfo.propTypes = {
  combatStats: combatStatsShape,
  gunLevel: PropTypes.number,
  handLevel: PropTypes.number,
};

export default CombatStatsInfo;
