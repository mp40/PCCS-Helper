const fmj = {
  type: 'FMJ',
  pen: [['FMJ', 'PEN'], [14, 13, 12, 11, 9.3, 5.9, 3.7, 2.3]],
  dc: [['', 'DC'], [6, 6, 6, 5, 5, 4, 3, 2]],
};
const jhp = {
  type: 'JHP',
  pen: [['FMJ', 'PEN'], [14, 13, 12, 10, 8.9, 5.6, 3.5, 2.2]],
  dc: [['', 'DC'], [8, 7, 7, 7, 7, 6, 4, 3]],
};
const ap = {
  type: 'AP',
  pen: [['FMJ', 'PEN'], [20, 19, 17, 15, 13, 8.3, 5.2, 3.3]],
  dc: [['', 'DC'], [6, 6, 5, 5, 4, 3, 3, 2]],
};

const ba = [60, 51, 42, 35, 30, 20, 15, 11];
const tof = [['', 'TOF'], [0, 0, 1, 1, 2, 5, 8, 11]];

const gunObj = {
  projectiles: [fmj],
  ba,
  tof,
};

const defaultTemplate = [
  { typeKey: 'type', valueKey: 'pen', index: 0 },
  { typeKey: '', valueKey: 'dc', index: 0 },
  null,
  { typeKey: 'type', valueKey: 'pen', index: 1 },
  { typeKey: '', valueKey: 'dc', index: 1 },
  '',
  { typeKey: 'type', valueKey: 'pen', index: 2 },
  { typeKey: '', valueKey: 'dc', index: 2 },
  { typeKey: '', valueKey: 'ma' },
  { typeKey: '', valueKey: 'ba' },
  { typeKey: '', valueKey: 'tof' },
];

const emptyDouble = ['', '', '', ''];

const getData = (index) => {
  const dataKeys = defaultTemplate[index];
  if (dataKeys === null) {
    return emptyDouble;
  }
  const projectileData = gunObj.projectiles?.[dataKeys.index]?.[dataKeys.valueKey];
  return projectileData ? projectileData.flatMap((value) => value) : gunObj[dataKeys.valueKey].flatMap((value) => value);
};

describe('getting correct data to render', () => {
  it('should get the correct data index 0', () => {
    const index = 0;
    expect(getData(index)).toEqual(['FMJ', 'PEN', 14, 13, 12, 11, 9.3, 5.9, 3.7, 2.3]);
  });
  it('should get the correct data index 1', () => {
    const index = 1;
    expect(getData(index)).toEqual(['', 'DC', 6, 6, 6, 5, 5, 4, 3, 2]);
  });
  it('should get the correct data index 10', () => {
    const index = 10;
    expect(getData(index)).toEqual(['', 'TOF', 0, 0, 1, 1, 2, 5, 8, 11]);
  });
  it('should return empty array if no data', () => {
    const index = 2;
    expect(getData(index)).toEqual(emptyDouble);
  });
});
