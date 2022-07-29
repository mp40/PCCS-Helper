import { firearms } from '../index';

export const hydrateFirearmByName = (name) => {
  const gun = {
    name,
    list: firearms[name].list,
    mag: JSON.parse(JSON.stringify(firearms[name].mag)),
  };

  if (firearms[name]?.optics?.attached) {
    gun.attachedOptic = firearms[name].optics.attached;
  }

  return gun;
};

export const hydrateFirearmByObject = (firearm) => {
  if (!firearm) {
    return undefined;
  }

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
  let launcher = null;

  if (firearm.attachedOptic || firearms[name].optics) {
    optics = { ...firearms[name].optics };
    optics.attached = firearm.attachedOptic;
  }

  if (firearms[name].launcher) {
    launcher = { ...firearms[name].launcher };
    launcher.attached = firearm?.launcher?.attached || null;
    launcher.mag = firearm?.launcher?.mag || null;
  }

  let bipodAttached = bipod;
  if (!bipodAttached && firearm.modNotes) {
    bipodAttached = firearm.modNotes.find((mod) => {
      const modification = mod.note.toLowerCase();
      return modification === 'bipod';
    });
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
    bipod: !!bipodAttached,
    selector,
    modNotes: firearm.modNotes || [],
    optics,
    launcher,
  };
};
