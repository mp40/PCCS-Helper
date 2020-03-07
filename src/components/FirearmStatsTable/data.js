export const keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];

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

const defaultTemplate = [
  { valueKey: 'pen', index: 0 },
  { valueKey: 'dc', index: 0 },
  '',
  { valueKey: 'pen', index: 1 },
  { valueKey: 'dc', index: 1 },
  '',
  { valueKey: 'pen', index: 2 },
  { valueKey: 'dc', index: 2 },
  { valueKey: 'ma' },
  { valueKey: 'ba' },
  { valueKey: 'tof' },
];

const shotgunTemplate = [
  { valueKey: 'pen', index: 0 },
  { valueKey: 'dc', index: 0 },
  '',
  { valueKey: 'pen', index: 1 },
  { valueKey: 'dc', index: 1 },
  { valueKey: 'salm', index: 1 },
  { valueKey: 'bphc', index: 1 },
  { valueKey: 'pr', index: 1 },
  { valueKey: 'ma' },
  { valueKey: 'ba' },
  { valueKey: 'tof' },
];

const threeRoundBurstTemplate = [
  { valueKey: 'pen', index: 0 },
  { valueKey: 'dc', index: 0 },
  { valueKey: 'pen', index: 1 },
  { valueKey: 'dc', index: 1 },
  { valueKey: 'pen', index: 2 },
  { valueKey: 'dc', index: 2 },
  '',
  { valueKey: 'trb' },
  { valueKey: 'ma' },
  { valueKey: 'ba' },
  { valueKey: 'tof' },
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
