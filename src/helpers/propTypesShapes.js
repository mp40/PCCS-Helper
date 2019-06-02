import PropTypes from 'prop-types';

export const combatStatsShape = {
  ASF: PropTypes.number,
  CE: PropTypes.number,
  ISF: PropTypes.number,
  SAL: PropTypes.number,
  baseSpeed: PropTypes.number,
  combatActions: PropTypes.arrayOf(PropTypes.number),
  damageBonus: PropTypes.number,
  knockoutValue: PropTypes.number,
  maxSpeed: PropTypes.number,
};
