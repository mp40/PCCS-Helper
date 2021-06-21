import { rifles } from './firearms/rifles';
import { smgs } from './firearms/smgs';
import { pistols } from './firearms/pistols';
import { sniperRifles } from './firearms/sniperRifles';
import { mgs } from './firearms/mgs';
import { shotguns } from './firearms/shotguns';

import { correctFloatingPoint } from '../../utils';
import { getScopeByName } from './optics';
import { getLauncherByName } from './launchers';

export const firearms = Object.freeze({
  ...rifles,
  ...smgs,
  ...pistols,
  ...sniperRifles,
  ...mgs,
  ...shotguns,
});

export const riflesList = () => Object.keys(rifles);

export const smgsList = () => Object.keys(smgs);

export const pistolsList = () => Object.keys(pistols);

export const sniperRiflesList = () => Object.keys(sniperRifles);

export const mgsList = () => Object.keys(mgs);

export const shotgunsList = () => Object.keys(shotguns);

export const firearmsByCalibreList = (list) => {
  const map = {
    '7.62 x 39mm': [],
    '5.45 x 39.5mm': [],
    '5.56mm NATO': [],
    '7.62mm NATO': [],
    '9mm Parabellum': [],
    other: [],
  };

  for (let i = 0; i < list.length; i += 1) {
    const gun = firearms[list[i]];

    if (map[gun.calibre]) {
      map[gun.calibre].push(list[i]);
    } else {
      map.other.push(list[i]);
    }
  }

  return map;
};

const getAmmoWeight = (mag) => {
  if (mag.type === 'Rnd') {
    return mag.cap * mag.weight;
  }
  return mag.weight;
};

export const getFullFirearmSystemWeightByName = (firearm) => {
  const { baseWeight, mag } = firearms[firearm];
  const ammoWeight = getAmmoWeight(mag[0]);

  let opticWeight = 0;

  if (firearms[firearm]?.optics?.attached) {
    opticWeight = getScopeByName(firearms[firearm].optics.attached).weight;
  }

  return correctFloatingPoint(baseWeight + ammoWeight + opticWeight);
};

export const getFullFirearmSystemWeightByObject = (firearm) => {
  const { baseWeight } = firearms[firearm.name];
  const { mag } = firearm;

  const ammoWeight = getAmmoWeight(mag[0]);

  let modWeight = 0;
  let opticWeight = 0;
  let launcherWeight = 0;

  if (firearm.modNotes) {
    modWeight = firearm.modNotes.reduce((acc, mod) => acc + mod.weightMod, 0);
  }

  if (firearm?.optics?.attached) {
    opticWeight = getScopeByName(firearm.optics.attached).weight;
  }

  if (firearm.attachedOptic) {
    opticWeight = getScopeByName(firearm?.attachedOptic).weight;
  }

  if (firearm?.launcher?.attached) {
    const launcher = getLauncherByName(firearm.launcher.attached);
    launcherWeight += launcher.weight;
    launcherWeight += launcher.mag[0].weight;
  }

  return correctFloatingPoint(baseWeight + ammoWeight + modWeight + opticWeight + launcherWeight);
};
