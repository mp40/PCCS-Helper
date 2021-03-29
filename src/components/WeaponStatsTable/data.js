const standardRangeBrackets = [10, 20, 40, 70, 100, 200, 300, 400];
const shotgunRangeBrackets = [1, 2, 4, 6, 8, 10, 15, 20, 30, 40, 80];
const launcherBalisticRangeBackets = [40, 100, 200, 400, '', 0, 1, 2, 3, 5, 10];

export const getRangeBrackets = (list) => {
  if (list === 'shotguns') {
    return shotgunRangeBrackets;
  }
  if (list === 'launchers') {
    return launcherBalisticRangeBackets;
  }
  return standardRangeBrackets;
};

export const keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'];

const firearmCharacteristics = [
  {
    data: 'length',
    abbreviation: 'L',
  },
  {
    data: 'weight',
    abbreviation: 'W',
  },
  {
    data: '',
    abbreviation: '',
  },
  {
    data: 'rt',
    abbreviation: 'RT',
  },
  {
    data: 'rof',
    abbreviation: 'ROF',
  },
  {
    data: '',
    abbreviation: '',
  },
  {
    data: 'cap',
    abbreviation: 'Cap',
    mag: true,
  },
  {
    data: 'weight',
    abbreviation: 'AW',
    mag: true,
  },
  {
    data: 'type',
    abbreviation: '',
    mag: true,
  },
  {
    data: 'kd',
    abbreviation: 'KD',
  },
  {
    data: 'sab',
    abbreviation: 'SAB',
  },
];

const launcherCharacteristics = [
  {
    data: 'length',
    abbreviation: 'L',
  },
  {
    data: 'weight',
    abbreviation: 'W',
  },
  {
    data: '',
    abbreviation: '',
  },
  {
    data: 'rt',
    abbreviation: 'RT',
  },
  {
    data: 'rof',
    abbreviation: 'ROF',
  },
  {
    data: '',
    abbreviation: '',
  },
  {
    data: 'cap',
    abbreviation: 'Cap',
    mag: true,
  },
  {
    data: 'weight',
    abbreviation: 'AW',
    mag: true,
  },
  {
    data: 'type',
    abbreviation: '',
    mag: true,
  },
  {
    data: '',
    abbreviation: '',
  },
  {
    data: 'mr',
    abbreviation: 'MR',
  },
  {
    data: '',
    abbreviation: '',
  },
  {
    data: 'sab',
    abbreviation: 'SAB',
  },
];

export const getWeaponCharacteristics = (list) => {
  if (list === 'launchers') {
    return launcherCharacteristics;
  }
  return firearmCharacteristics;
};

const firstProjectilePen = { valueKey: 'pen', index: 0, prefix: ['PEN'] };
const firstProjectileDc = { valueKey: 'dc', index: 0, prefix: ['', 'DC'] };

const secondProjectilePen = { valueKey: 'pen', index: 1, prefix: ['PEN'] };
const secondProjectileDc = { valueKey: 'dc', index: 1, prefix: ['', 'DC'] };

const thirdProjectilePen = { valueKey: 'pen', index: 2, prefix: ['PEN'] };
const thirdProjectileDc = { valueKey: 'dc', index: 2, prefix: ['', 'DC'] };

const projectile3rb = { valueKey: 'trb', prefix: ['', '3RB'], suffix: [] };

const projectileMa = { valueKey: 'ma', prefix: ['', 'MA'], suffix: [] };
const projectileBa = { valueKey: 'ba', prefix: ['', 'BA'], suffix: [] };
const projectileTof = { valueKey: 'tof', prefix: ['', 'TOF'], suffix: [] };

const emptyLine = 'empty';

const defaultTemplate = [
  firstProjectilePen,
  firstProjectileDc,
  emptyLine,
  secondProjectilePen,
  secondProjectileDc,
  emptyLine,
  thirdProjectilePen,
  thirdProjectileDc,
  projectileMa,
  projectileBa,
  projectileTof,
];

const shotgunTemplate = [
  firstProjectilePen,
  firstProjectileDc,
  emptyLine,
  { valueKey: 'pen', index: 1, prefix: ['PEN'] },
  { valueKey: 'dc', index: 1, prefix: ['(00)', 'DC'] },
  { valueKey: 'salm', index: 1, prefix: ['', 'SALM'] },
  { valueKey: 'bphc', index: 1, prefix: ['12', 'BPHC'] },
  { valueKey: 'pr', index: 1, prefix: ['', 'PR'] },
  projectileMa,
  projectileBa,
  projectileTof,
];

const threeRoundBurstTemplate = [
  firstProjectilePen,
  firstProjectileDc,
  secondProjectilePen,
  secondProjectileDc,
  thirdProjectilePen,
  thirdProjectileDc,
  emptyLine,
  projectile3rb,
  projectileMa,
  projectileBa,
  projectileTof,
];

const launcherTemplate = [
  { valueKey: 'pen', index: 0, prefix: ['HEAT', 'PEN'], laucherProjectile: true },
  { valueKey: 'dc', index: 0, prefix: ['', 'DC'], laucherProjectile: true },
  { valueKey: 'bshc', index: 0, prefix: ['', '', '', '', '', ''], explosiveData: true },
  { valueKey: 'bc', index: 0, prefix: ['', '', '', '', '', ''], explosiveData: true },
  emptyLine,
  { valueKey: 'pen', index: 1, prefix: ['HE', 'PEN'], laucherProjectile: true },
  { valueKey: 'dc', index: 1, prefix: ['', 'DC'], laucherProjectile: true },
  { valueKey: 'bshc', index: 1, prefix: ['', '', '', '', '', ''], explosiveData: true },
  { valueKey: 'bc', index: 1, prefix: ['', '', '', '', '', ''], explosiveData: true },
  emptyLine,
  { valueKey: 'aoi', prefix: ['', 'AOI'], suffix: ['', '', '', '', '', '', ''] },
  { valueKey: 'ba', prefix: ['', 'BA'], suffix: ['', '', '', '', '', '', ''] },
  { valueKey: 'tof', prefix: ['', 'TOF'], suffix: ['', '', '', '', '', '', ''] },
];

export const getTemplate = (list, hasThreeRoundBurst, numberOfProjectileTypes) => {
  if (list === 'launchers') {
    return launcherTemplate;
  }
  if (list === 'shotguns') {
    return shotgunTemplate;
  }
  if (hasThreeRoundBurst) {
    return threeRoundBurstTemplate;
  }
  return defaultTemplate;
};

export const getEmptyRow = (list) => {
  if (list === 'launchers' || list === 'shotguns') {
    return new Array(13).fill('');
  }
  return new Array(10).fill('');
};
