export const keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'];

export const weaponCharacteristics = [
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

const firstProjectilePen = { valueKey: 'pen', index: 0, prefix: ['PEN'] };
const firstProjectileDc = { valueKey: 'dc', index: 0, prefix: ['', 'DC'] };

const secondProjectilePen = { valueKey: 'pen', index: 1, prefix: ['PEN'] };
const secondProjectileDc = { valueKey: 'dc', index: 1, prefix: ['', 'DC'] };

const thirdProjectilePen = { valueKey: 'pen', index: 2, prefix: ['PEN'] };
const thirdProjectileDc = { valueKey: 'dc', index: 2, prefix: ['', 'DC'] };

const projectile3rb = { valueKey: 'trb', prefix: ['', '3RB'] };

const projectileMa = { valueKey: 'ma', prefix: ['', 'MA'] };
const projectileBa = { valueKey: 'ba', prefix: ['', 'BA'] };
const projectileTof = { valueKey: 'tof', prefix: ['', 'TOF'] };

const emptyLine = '';


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

export const getTemplate = (isShotgun, hasThreeRoundBurst, numberOfProjectileTypes) => {
  if (isShotgun) {
    return shotgunTemplate;
  }
  if (hasThreeRoundBurst && numberOfProjectileTypes > 2) {
    return threeRoundBurstTemplate;
  }
  return defaultTemplate;
};
