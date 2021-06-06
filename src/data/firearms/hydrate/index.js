import { firearms } from '../index';

// mptodo
// { name: firearm.name,
//     qty: firearm.qty,
//     mag: firearm.mag,
//     modNotes: firearm.modNotes }

export const hydrateFirearmByName = (name) => ({
  name,
  list: firearms[name].list,
  mag: firearms[name].mag,
});

export const hydrateFirearmByObject = (firearm) => {
  const { name, mag, qty } = firearm;

  const {
    list,
    calibre,
    length,
    baseWeight,
    rt,
    rof,
    kd,
    sab,
    aim,
    projectiles,
    ma,
    ba,
    tof,
    offical,
    bipod,
    selector,
  } = firearms[name];

  return {
    name,
    qty,
    list,
    calibre,
    length,
    baseWeight,
    rt,
    rof,
    mag,
    kd,
    sab,
    aim,
    projectiles,
    ma,
    ba,
    tof,
    offical,
    bipod,
    selector,
    modNotes: firearm.modNotes || [],
  };
};
