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

export const gunObjShape = PropTypes.shape({
  name: PropTypes.string,
  list: PropTypes.string,
  calibre: PropTypes.string,
  length: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  weight: PropTypes.number,
  rt: PropTypes.number,
  rof: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mag: PropTypes.arrayOf(PropTypes.object),
  kd: PropTypes.number,
  sab: PropTypes.number,
  aim: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.number)),
  projectiles: PropTypes.arrayOf(PropTypes.object),
  ma: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  ba: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  tof: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
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
  data: PropTypes.objectOf(PropTypes.array).isRequired,
  heading: PropTypes.string.isRequired,
});

export const launcherShape = PropTypes.shape({
  name: PropTypes.string,
  list: PropTypes.string,
  length: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  weight: PropTypes.number,
  rt: PropTypes.number,
  rof: PropTypes.string,
  mag: PropTypes.arrayOf(PropTypes.object),
  mr: PropTypes.number,
  sab: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  aim: PropTypes.objectOf(PropTypes.array),
  projectiles: PropTypes.arrayOf(PropTypes.object),
  aoi: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ba: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  tof: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
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
  helmet: PropTypes.string,
  vest: PropTypes.string,
});

export const opticsShape = PropTypes.shape({
  restrictedTo: PropTypes.arrayOf(PropTypes.string),
  ableToAttach: PropTypes.arrayOf(PropTypes.string),
  attached: PropTypes.string,
});
