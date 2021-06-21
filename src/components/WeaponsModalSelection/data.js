import { riflesList, pistolsList, smgsList, mgsList, sniperRiflesList, shotgunsList, firearmsByCalibreList } from '../../data/firearms';

export const firearmLists = (filter) => {
  switch (filter) {
    case 'Rifles':
      return riflesList();
    case 'Pistols':
      return pistolsList();
    case 'SMGs':
      return smgsList();
    case 'MGs':
      return mgsList();
    case 'Sniper Rifles':
      return sniperRiflesList();
    case 'Shotguns':
      return shotgunsList();

    default: return [
      ...riflesList(),
      ...pistolsList(),
      ...smgsList(),
      ...mgsList(),
      ...sniperRiflesList(),
      ...shotgunsList(),
    ];
  }
};

export const filterCalibersFromType = (type, calibre) => {
  if (calibre === 'All Calibres') {
    return firearmLists(type);
  }

  const calibreMap = firearmsByCalibreList(firearmLists(type));

  return calibreMap[calibre];
};
