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

export const riflesList = () => [
  'Kar 98k',
  'Karabin M1938',
  'MAS 36',
  'AK47',
  'AKM',
  'AK 74',
  'CAR 16',
  'FAMAS',
  'FN FAL',
  'HK G3',
  'L1A1',
  'L1A1 F1',
  'M4',
  'M14',
  'M16',
  'M16A1',
  'M1 Garand',
  'M1 Carbine',
  'M2 Carbine',
  'M1949-56',
  'SKS',
  'SVT 40',
];

export const smgsList = () => [
  'AKS-74U',
  'Carl Gustaf M45',
  'F1',
  'MAC 10 (45 ACP)',
  'MAT 49',
  'Owen Mk1',
  'M3A1',
  'MP5 SD3',
  'PPSh 41',
  'PPS 43',
  'Sten Mk2',
  'Thompson M1A1',
];

export const pistolsList = () => [
  'Colt Python (8")',
  'FN Mk 1',
  'Glock Model 17',
  'M1911A1',
  'M92F',
  'MAB PA15',
  'Makarov PM',
  'Lebel M1892',
  'Tokarev TT33',
];

export const sniperRiflesList = () => [
  'Dragunov SVD',
  'M40A1',
  'M1903 A4',
];

export const mgsList = () => [
  'BAR A2',
  'M1919 A6',
  'M1924/29',
  'M60',
  'M249',
  'RPD',
  'RPK',
  'RPK 74',
  'PKM',
  'DP',
];

export const shotgunsList = () => [
  'Remington M870',
  'Ithaca LAPD',
  'Sawed-Off Shotgun',
];

export const getFirearmByName = (name) => firearms[name];

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

  if (firearm?.attachedOptic) {
    opticWeight = getScopeByName(firearm?.attachedOptic).weight;
  }

  if (firearm?.launcher?.attached) {
    const launcher = getLauncherByName(firearm.launcher.attached);
    launcherWeight += launcher.weight;
    launcherWeight += launcher.mag[0].weight;
  }

  return correctFloatingPoint(baseWeight + ammoWeight + modWeight + opticWeight + launcherWeight);
};
