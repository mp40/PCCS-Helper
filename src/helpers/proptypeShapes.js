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
  length: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  weight: PropTypes.number,
  rt: PropTypes.number,
  rof: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
  qty: PropTypes.number,
  length: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  at: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  fl: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  r: PropTypes.number.isRequired,
  smk: PropTypes.number,
  dur: PropTypes.number,
  data: PropTypes.object.isRequired,
  heading: PropTypes.string.isRequired,
});

export const launcherShape = PropTypes.shape({
  name: PropTypes.string,
  list: PropTypes.string,
  length: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  weight: PropTypes.number,
  rt: PropTypes.number,
  rof: PropTypes.string,
  mag: PropTypes.array,
  mr: PropTypes.number,
  sab: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  aim: PropTypes.object,
  projectiles: PropTypes.array,
  moi: PropTypes.array,
  ba: PropTypes.array,
  tof: PropTypes.array,
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

export const currentCharacterShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  str: PropTypes.number.isRequired,
  int: PropTypes.number.isRequired,
  hlt: PropTypes.number.isRequired,
  wil: PropTypes.number.isRequired,
  agi: PropTypes.number.isRequired,
  gunLevel: PropTypes.number.isRequired,
  handLevel: PropTypes.number.isRequired,
  uniform: PropTypes.string.isRequired,
  equipment: PropTypes.arrayOf(PropTypes.object),
  firearms: PropTypes.arrayOf(gunObjShape),
  grenades: PropTypes.arrayOf(PropTypes.object),
  launchers: PropTypes.arrayOf(launcherShape),
  helmet: armourShape,
  vest: armourShape,
});

export const opticsShape = PropTypes.shape({
  restrictedTo: PropTypes.arrayOf(PropTypes.string),
  ableToAttach: PropTypes.arrayOf(PropTypes.string),
  attached: PropTypes.string,
});
