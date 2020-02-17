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
  length: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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

export const grenadeShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  at: PropTypes.number.isRequired,
  fl: PropTypes.number.isRequired,
  r: PropTypes.number.isRequired,
  smk: PropTypes.number,
  dur: PropTypes.number,
  data: PropTypes.object.isRequired,
  heading: PropTypes.string.isRequired,
});

export const tableLineShape = PropTypes.shape({
  dataType: PropTypes.object,
  aim: PropTypes.array,
  tag: PropTypes.array,
  array: PropTypes.array,
});

export const armourShape = PropTypes.shape({
  name: PropTypes.string,
  pf: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bpf: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ac: PropTypes.string,
  weight: PropTypes.number,
  tags: PropTypes.arrayOf(PropTypes.string),
});

export const gearRowShape = PropTypes.shape({
  type: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
  up: PropTypes.func.isRequired,
  down: PropTypes.func.isRequired,
  modify: PropTypes.func,
  magUp: PropTypes.func,
  magDown: PropTypes.func,
  array: PropTypes.arrayOf(PropTypes.object).isRequired,
});
