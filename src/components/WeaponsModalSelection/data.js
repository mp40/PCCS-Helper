import { rifles, pistols, smgs, mgs, sniperRifles, shotguns } from '../../data/firearms';

export const firearmLists = (filter) => {
  switch (filter) {
    case 'Rifles':
      return rifles();
    case 'Pistols':
      return pistols();
    case 'SMGs':
      return smgs();
    case 'MGs':
      return mgs();
    case 'Sniper Rifles':
      return sniperRifles();
    case 'Shotguns':
      return shotguns();

    default: return [
      ...rifles(),
      ...pistols(),
      ...smgs(),
      ...mgs(),
      ...sniperRifles(),
      ...shotguns(),
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

export const filterCalibersFromType = (typeArray, caliber) => {
  if (caliber === 'All') {
    return typeArray;
  }
  if (caliber === 'Other') {
    return typeArray.filter((firearm) => !filterableCalibers().includes(firearm.calibre));
  }
  return typeArray.filter((firearm) => firearm.calibre === caliber);
};
