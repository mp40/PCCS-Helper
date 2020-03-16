export const launchers = () => [
  {
    name: 'M79',
    qty: 1,
    length: 29,
    weight: 6.5,
    rt: 10,
    rof: '-',
    mag: [{ type: 'Rnd', class: 'HEAT', weight: 0.51, cap: 1, qty: 0 }, { type: 'Rnd', class: 'HE', weight: 0.51, cap: 1, qty: 0 }],
    mr: 200,
    sab: 11,
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7],
      mod: [-21, -11, -8, -7, -5, -4, -3],
    },
    projectiles: [
      {
        type: 'HEAT',
        data: 'ballistic',
        pen: [288, 288, 288, ''],
        dc: [10, 10, 10, ''],
      },
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
        data: 'ballistic',
        pen: [2.1, 2.1, 2.1, ''],
        dc: [10, 10, 10, ''],
      },
      {
        type: 'HE',
        data: 'explosive',
        pen: [1.6, 1.4, 1.0, 0.7, 0.4, ''],
        dc: [1, 1, 1, 1, 1, ''],
        bshc: ['*3', 62, 15, 6, 2],
        bc: [273, 80, 25, 13, 6, 1],
      },
    ],
    aoi: ['', 1, 4, ''],
    ba: [23, 10, 1, ''],
    tof: [11, 33, 80, ''],
  },
  {
    name: 'M72 A2 LAW',
    qty: 1,
    length: '26/35',
    weight: 5.2,
    rt: 14,
    rof: '-',
    mag: [{ type: 'Disposable' }],
    mr: 650,
    sab: '',
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7, 8],
      mod: [-20, -11, -8, -6, -5, -4, -3, -2],
    },
    projectiles: [
      {
        type: 'HEAT',
        data: 'ballistic',
        pen: ['68h', '68h', '68h', '68h'],
        dc: [10, 10, 10, 10],
      },
      {
        type: 'HEAT',
        data: 'explosive',
        pen: [5.0, 4.9, 4.7, 4.5, 4.1, 3.3],
        dc: [7, 7, 7, 7, 6, 5],
        bshc: [15, 3, 0, -3, -7, -12],
        bc: ['11h', 245, 70, 36, 15, 5],
      },
    ],
    aoi: ['', '', 1, 1],
    ba: [11, -1, -11, -20],
    tof: [5, 14, 32, 75],
  },
  {
    name: 'RPG 7V',
    qty: 1,
    length: '39/54',
    weight: 20.4,
    rt: 15,
    rof: '-',
    mag: [{ type: 'Rnd', class: 'HEAT', weight: 5.0, cap: 1, qty: 0 }, { type: 'Rnd', class: 'HE', weight: 5.0, cap: 1, qty: 0 }],
    mr: 500,
    sab: '',
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      mod: [-28, -18, -11, -9, -7, -6, -5, -4, -3, -2, -1, 0],
    },
    projectiles: [
      {
        type: 'HEAT',
        data: 'ballistic',
        pen: ['72h', '72h', '72h', '72h'],
        dc: [10, 10, 10, 10],
      },
      {
        type: 'HEAT',
        data: 'explosive',
        pen: [7.2, 7.1, 6.9, 6.7, 6.2, 5.2],
        dc: [8, 8, 8, 8, 8, 7],
        bshc: [11, 2, -1, -4, -8, -13],
        bc: ['20h', 393, 105, 52, 22, 7],
      },
      {
        type: 'HE',
        data: 'ballistic',
        pen: [8.2, 8.2, 8.2, 8.2],
        dc: [10, 10, 10, 10],
      },
      {
        type: 'HE',
        data: 'explosive',
        pen: [8.1, 8.0, 7.7, 7.5, 7.0, 5.9],
        dc: [9, 9, 9, 8, 8, 8],
        bshc: [11, 2, -1, -4, -8, -13],
        bc: ['24h', 441, 115, 57, 24, 8],
      },
    ],
    aoi: ['', '', '', ''],
    ba: [15, 4, -6, -15],
    tof: [2, 6, 14, 30],
  },
];
