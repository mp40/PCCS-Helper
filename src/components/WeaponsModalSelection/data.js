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

export const filterableCalibers = () => [
  '7.62 x 39mm',
  '5.45 x 39.5mm',
  '5.56mm NATO',
  '7.62mm NATO',
  '9mm Parabellum',
];

export const filterCalibersFromType = (type, calibre) => {
  if (calibre === 'All Calibres') {
    return firearmLists(type);
  }

  const calibreMap = firearmsByCalibreList(firearmLists(type));

  return calibreMap[calibre];
};
