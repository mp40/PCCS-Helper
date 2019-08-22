import React from 'react';
import { PropTypes } from 'prop-types';

const renderStatLine = (name, value) => (
  <div style={{ display: 'flex' }}>
    <div>{`${name}:`}</div>
    <div>{value}</div>
  </div>
);

const CombatStatsInfo = ({ combatStats, gunLevel, handLevel }) => (
  <div className="combatStatsInfo">
    {renderStatLine('Base Speed', combatStats.baseSpeed)}
    {/* <div>
      <div>Base Speed:</div>
      <div>{combatStats.baseSpeed}</div>
    </div> */}
    <div>
      <div>Max Speed:</div>
      <div>{combatStats.maxSpeed}</div>
    </div>
    <div>
      <div>Knockout Value:</div>
      <div>{combatStats.knockoutValue}</div>
    </div>
    <div>
      <div>Gun Combat:</div>
      <div>{gunLevel}</div>
    </div>
    <div>
      <div>Melee Combat:</div>
      <div>{handLevel}</div>
    </div>
    <div>
      <div>Damage Bonus:</div>
      <div>{combatStats.damageBonus}</div>
    </div>
  </div>
);

CombatStatsInfo.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  combatStats: PropTypes.object,
};

export default CombatStatsInfo;

// const combatStats = {
//   baseSpeed: 2,
//   maxSpeed: 6,
//   SAL: 7,
//   CE: 3,
//   ISF: 17,
//   ASF: 13,
//   knockoutValue: 9,
//   damageBonus: 1.5,
//   combatActions: [5, 3],
// };
