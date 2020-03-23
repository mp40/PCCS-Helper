export const m203 = {
  name: 'M203',
  length: 39,
  weight: 11.6,
  rt: 12,
  rof: '-',
  mag: [{ type: 'Rnd', class: 'HEAT', weight: 0.51, cap: 1, qty: 0 }, { type: 'Rnd', class: 'HE', weight: 0.51, cap: 1, qty: 0 }],
  mr: 200,
  sab: 18,
  aim: {
    ac: [1, 2, 3, 4, 5, 6],
    mod: [-24, -14, -9, -7, -6, -4],
  },
  projectiles: [
    {
      type: 'HEAT',
      data: 'ballistic',
      pen: [288, 288, 288, ''],
      dc: [10, 10, 10, ''],
    },
    {
      type: 'HE',
      data: 'ballistic',
      pen: [2.1, 2.1, 2.1, ''],
      dc: [10, 10, 10, ''],
    },
  ],
  explosive: [
    {
      type: 'HEAT',
      data: 'explosive',
      pen: [1.6, 1.4, 1.0, 0.7, 0.4, ''],
      dc: [1, 1, 1, 1, 1, ''],
      bshc: ['*2', 47, 11, 4, 1, ''],
      bc: [241, 71, 23, 12, 5, 1],
    },
    {
      type: 'HE',
      data: 'explosive',
      pen: [1.6, 1.4, 1.0, 0.7, 0.4, ''],
      dc: [1, 1, 1, 1, 1, ''],
      bshc: ['*3', 62, 15, 6, 2, ''],
      bc: [273, 80, 25, 13, 6, 1],
    },
  ],
  aoi: ['', 1, 4, ''],
  ba: [23, 10, 1, ''],
  tof: [11, 33, 80, ''],
};
