import PropTypes from 'prop-types';

export const combatStatsShape = PropTypes.shape({
  ASF: PropTypes.number,
  CE: PropTypes.number,
  ISF: PropTypes.number,
  SAL: PropTypes.number,
  baseSpeed: PropTypes.number,
  combatActions: PropTypes.arrayOf(PropTypes.number),
  damageBonus: PropTypes.number,
  knockoutValue: PropTypes.number,
  maxSpeed: PropTypes.number,
});

export const gearShape = PropTypes.shape({
  uniform: PropTypes.string,
  equipment: PropTypes.arrayOf(PropTypes.object),
  firearms: PropTypes.arrayOf(PropTypes.object),
});

export const gunObjShape = PropTypes.shape({
  name: PropTypes.string,
  list: PropTypes.string,
  type: PropTypes.array,
  length: PropTypes.number,
  weight: PropTypes.number,
  rt: PropTypes.number,
  rof: PropTypes.string,
  mag: PropTypes.array,
  kd: PropTypes.number,
  sab: PropTypes.number,
  aim: PropTypes.object,
  projectiles: PropTypes.array,
  ma: PropTypes.array,
  ba: PropTypes.array,
  tof: PropTypes.array,
  offical: PropTypes.bool,
});

export const tableLineShape = PropTypes.shape({
  dataType: PropTypes.object,
  aim: PropTypes.array,
  tag: PropTypes.array,
  array: PropTypes.array,
});

export const armourShape = PropTypes.shape({
  name: PropTypes.string,
  pf: PropTypes.number,
  bpf: PropTypes.number,
  ac: PropTypes.string,
  weight: PropTypes.number,
  tags: PropTypes.arrayOf(PropTypes.string),
});
