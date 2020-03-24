import { rifles, pistols, smgs, mgs, sniperRifles, shotguns, filterableCalibers } from '../../data/firearms';

export const firearmLists = {
  Rifles: rifles(),
  Pistols: pistols(),
  SMGs: smgs(),
  MGs: mgs(),
  'Sniper Rifles': sniperRifles(),
  Shotguns: shotguns(),
  All: [...rifles(),
    ...pistols(),
    ...smgs(),
    ...mgs(),
    ...sniperRifles(),
    ...shotguns()],
};
