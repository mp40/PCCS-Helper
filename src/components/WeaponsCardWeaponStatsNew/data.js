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
    data: ['mag', 'cap'],
    abbreviation: 'Cap',
  },
  {
    data: ['mag', 'weight'],
    abbreviation: 'AW',
  },
  {
    data: ['mag', 'type'],
    abbreviation: 'Mag',
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

export const defaultTemplate = [
  { typeKey: 'type', valueKey: 'pen', index: 0 },
  { typeKey: '', valueKey: 'dc', index: 0 },
  '',
  { typeKey: 'type', valueKey: 'pen', index: 1 },
  { typeKey: '', valueKey: 'dc', index: 1 },
  '',
  { typeKey: 'type', valueKey: 'pen', index: 2 },
  { typeKey: '', valueKey: 'dc', index: 2 },
  'ma',
  'ba',
  'tof',
];

const shotgunTemplate = [
  { typeKey: 'type', valueKey: 'pen', index: 0 },
  { typeKey: '', valueKey: 'dc', index: 0 },
  '',
  { typeKey: 'type', valueKey: 'pen', index: 1 },
  { typeKey: '', valueKey: 'dc', index: 1 },
  { typeKey: '', valueKey: 'salm', index: 1 },
  { typeKey: '', valueKey: 'bphc', index: 1 },
  { typeKey: '', valueKey: 'pr', index: 1 },
  '',
  'ma',
  'ba',
  'tof',
];

const threeRoundBurstTemplate = [
  { typeKey: 'type', valueKey: 'pen', index: 0 },
  { typeKey: '', valueKey: 'dc', index: 0 },
  { typeKey: 'type', valueKey: 'pen', index: 1 },
  { typeKey: '', valueKey: 'dc', index: 1 },
  { typeKey: 'type', valueKey: 'pen', index: 2 },
  { typeKey: '', valueKey: 'dc', index: 2 },
  '',
  'trb',
  'ma',
  'ba',
  'tof',
];
