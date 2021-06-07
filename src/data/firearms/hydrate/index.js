import { firearms } from '../index';

// mptodo
// { name: firearm.name,
//     qty: firearm.qty,
//     mag: firearm.mag,
//     modNotes: firearm.modNotes }

export const hydrateFirearmByName = (name) => {
  const gun = {
    name,
    list: firearms[name].list,
    mag: firearms[name].mag,
  };

  if (firearms[name]?.optics?.attached) {
    gun.attachedOptic = firearms[name].optics.attached;
  }

  return gun;
};

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

  let optics = null;

  if (firearm.attachedOptic || firearms[name].optics) {
    optics = { ...firearms[name].optics };
    optics.attached = firearm.attachedOptic;
  }

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
    optics,
  };
};
