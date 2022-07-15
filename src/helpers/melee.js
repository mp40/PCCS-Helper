import { firearms as firearmData } from '../data/firearms';

const mapListToMelee = {
  pistols: 'Pistol',
  smgs: 'SMG',
  lightRifles: 'Light Rifle',
  heavyRifles: 'Heavy Rifle',
};

export const parseFirearmsForMelee = (firearms) => {
  if (!firearms.length) {
    return [];
  }

  const result = [];

  const added = {};

  firearms.forEach((firearm) => {
    const { name } = firearm;
    const { list, baseWeight, mag } = firearmData[name];
    const weight = baseWeight + mag[0].weight;

    let meleeWeapon = mapListToMelee[list];

    if (list === 'rifles' || list === 'shotguns' || list === 'sniperRifles') {
      if (name === 'Sawed-Off Shotgun') {
        meleeWeapon = 'SMG';
      } else if (weight < 11.2) {
        meleeWeapon = 'Light Rifle';
      } else {
        meleeWeapon = 'Heavy Rifle';
      }
    }

    if (meleeWeapon && !added[meleeWeapon]) {
      result.push(meleeWeapon);
      added[meleeWeapon] = true;
    }
  });

  return result;
};
