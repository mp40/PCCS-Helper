export const launcherList = Object.freeze({
  Armbrust: {
    name: 'Armbrust',
    list: 'launchers',
    calibre: '67mm',
    qty: 1,
    length: 34,
    weight: 16,
    rt: 14,
    rof: '-',
    mag: [{ type: '', weight: '-', cap: 1 }],
    mr: 850,
    sab: '',
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      mod: [-26, -16, -10, -8, -6, -5, -4, -3, -2, -1],
    },
    projectiles: [
      {
        type: 'HEAT',
        data: 'ballistic',
        pen: ['66h', '66h', '66h', '66h'],
        dc: [10, 10, 10, 10],
      },
      {
        type: 'HE',
        data: 'ballistic',
        pen: [4.2, 4.2, 4.2, 4.2],
        dc: [10, 10, 10, 10],
      },
    ],
    explosive: [
      {
        type: 'HEAT',
        data: 'explosive',
        pen: [5.2, 5.1, 4.8, 4.6, 4.2, 3.4],
        dc: [7, 7, 7, 7, 6, 6],
        bshc: [15, 3, 0, -3, -7, -12],
        bc: ['11h', 252, 72, 36, 16, 5],
      },
      {
        type: 'HE',
        data: 'explosive',
        pen: [1.4, 1.2, 0.8, 0.6, 0.3, ''],
        dc: [1, 1, 1, 1, 1, ''],
        bshc: ['*6', '*2', 38, 16, 5, ''],
        bc: ['11h', 252, 72, 36, 16, 5],
      },
    ],
    aoi: ['', '', '', 1],
    ba: [12, -1, -10, -20],
    tof: [4, 10, 21, 50],
    offical: true,
  },
  'Armscor 6': {
    name: 'Armscor 6',
    list: 'launchers',
    calibre: '40mm',
    qty: 1,
    length: '22/31',
    weight: 15,
    rt: 24,
    rof: '*',
    mag: [{ type: 'Rnd', class: 'HEAT', weight: 0.51, cap: 1, qty: 0 }, { type: 'Rnd', class: 'HE', weight: 0.51, cap: 1, qty: 0 }],
    mr: 200,
    sab: 7,
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7],
      mod: [-26, -16, -10, -8, -6, -5, -3],
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
        pen: [2.0, 2.0, 2.0, ''],
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
    offical: true,
  },
  'HK 69A1': {
    name: 'HK 69A1',
    list: 'launchers',
    calibre: '40mm',
    qty: 1,
    length: '18/27',
    weight: 4.1,
    rt: 10,
    rof: '-',
    mag: [{ type: 'Rnd', class: 'HEAT', weight: 0.51, cap: 1, qty: 0 }, { type: 'Rnd', class: 'HE', weight: 0.51, cap: 1, qty: 0 }],
    mr: 200,
    sab: 11,
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7],
      mod: [-19, -10, -8, -6, -5, -4, -3],
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
        pen: [2.0, 2.0, 2.0, ''],
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
        pen: [1.4, 1.2, 0.8, 0.6, 0.3, ''],
        dc: [1, 1, 1, 1, 1, ''],
        bshc: ['*3', 73, 17, 7, 2, ''],
        bc: [250, 74, 23, 12, 5, 1],
      },
    ],
    aoi: ['', 1, 4, ''],
    ba: [23, 10, 1, ''],
    tof: [11, 33, 80, ''],
    offical: true,
  },
  M79: {
    name: 'M79',
    list: 'launchers',
    calibre: '40mm',
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
    offical: true,
  },
  'M72 A2 LAW': {
    name: 'M72 A2 LAW',
    list: 'launchers',
    calibre: '66mm',
    qty: 1,
    length: '26/35',
    weight: 5.2,
    rt: 14,
    rof: '-',
    mag: [{ type: '', weight: '-', cap: 1 }],
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
    ],
    explosive: [
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
    offical: true,
  },
  'LAW 80': {
    name: 'LAW 80',
    list: 'launchers',
    calibre: '94mm',
    qty: 1,
    length: '39/59',
    weight: 21.2,
    rt: 20,
    rof: '-',
    mag: [{ type: '', weight: '-', cap: 1 }],
    mr: 600,
    sab: '',
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      mod: [-28, -18, -11, -9, -7, -5, -4, -3, -2, -1],
    },
    projectiles: [
      {
        type: 'HEAT',
        data: 'ballistic',
        pen: ['17k', '17k', '17k', '17k'],
        dc: [10, 10, 10, 10],
      },
    ],
    explosive: [
      {
        type: 'HEAT',
        data: 'explosive',
        pen: [8.3, 8.2, 8.0, 7.7, 7.3, 6.2],
        dc: [9, 9, 9, 9, 9, 8],
        bshc: [10, 2, -1, -4, -8, -13],
        bc: ['26h', 480, 123, 60, 26, 9],
      },
    ],
    aoi: ['', '', 1, 1],
    ba: [11, -1, -11, -20],
    tof: [5, 14, 32, 75],
    offical: true,
  },
  'PZF 44 2A1 Lanze': {
    name: 'PZF 44 2A1 Lanze',
    list: 'launchers',
    calibre: '66mm',
    qty: 1,
    length: '35/46',
    weight: 22.7,
    rt: 28,
    rof: '-',
    mag: [{ type: 'Rnd', class: 'HEAT', weight: 5.5, cap: 1, qty: 0 }, { type: 'Rnd', class: 'HE', weight: 5.5, cap: 1, qty: 0 }],
    mr: 850,
    sab: '',
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      mod: [-28, -18, -11, -9, -7, -6, -4, -3, -2, -1],
    },
    projectiles: [
      {
        type: 'HEAT',
        data: 'ballistic',
        pen: ['89h', '89h', '89h', '89h'],
        dc: [10, 10, 10, 10],
      },
      {
        type: 'HE',
        data: 'ballistic',
        pen: [6.1, 6.1, 6.1, 6.1],
        dc: [10, 10, 10, 10],
      },
    ],
    explosive: [
      {
        type: 'HEAT',
        data: 'explosive',
        pen: [5.2, 5.1, 4.8, 4.6, 4.2, 3.4],
        dc: [7, 7, 7, 7, 6, 6],
        bshc: [15, 3, 0, -3, -7, -12],
        bc: ['11h', 252, 72, 36, 16, 5],
      },
      {
        type: 'HE',
        data: 'explosive',
        pen: [6.0, 5.9, 5.6, 5.4, 4.9, 3.9],
        dc: [7, 7, 7, 7, 7, 6],
        bshc: [15, 3, 0, -3, -7, -12],
        bc: ['13h', 287, 81, 40, 17, 6],
      },
    ],
    aoi: ['', '', '', 1],
    ba: [14, 2, -7, -17],
    tof: [4, 9, 20, 45],
    offical: true,
  },
  'RGM-40': {
    name: 'RGM-40',
    list: 'launchers',
    calibre: '30mm',
    qty: 1,
    length: '14/24',
    weight: 5.5,
    rt: 10,
    rof: '-',
    mag: [{ type: 'Rnd', class: 'HE', weight: 0.56, cap: 1, qty: 0 }],
    mr: 200,
    sab: 11,
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7],
      mod: [-19, -10, -8, -6, -5, -4, -3],
    },
    projectiles: [
      {
        type: 'HE',
        data: 'ballistic',
        pen: [2.5, 2.5, 2.5, ''],
        dc: [10, 10, 10, ''],
      },
    ],
    explosive: [
      {
        type: 'HE',
        data: 'explosive',
        pen: [2.4, 2.2, 1.8, 1.5, 1.0, 0.4],
        dc: [2, 2, 2, 2, 1, 1],
        bshc: ['*2', 58, 14, 6, 1, -2],
        bc: [250, 74, 23, 12, 5, 1],
      },
    ],
    aoi: ['', 1, 4, ''],
    ba: [23, 5, -4, ''],
    tof: [11, 35, 81, ''],
    offical: false,
  },
  'RPG 7V': {
    name: 'RPG 7V',
    list: 'launchers',
    calibre: '85mm',
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
        type: 'HE',
        data: 'ballistic',
        pen: [8.2, 8.2, 8.2, 8.2],
        dc: [10, 10, 10, 10],
      },
    ],
    explosive: [
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
    offical: true,
  },
  'RPG 18': {
    name: 'RPG 18',
    list: 'launchers',
    calibre: '64mm',
    qty: 1,
    length: '28/39',
    weight: 14.3,
    rt: 20,
    rof: '-',
    mag: [{ type: '', weight: '-', cap: 1 }],
    mr: 600,
    sab: '',
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7, 8],
      mod: [-25, -15, -10, -8, -6, -5, -4, -2],
    },
    projectiles: [
      {
        type: 'HEAT',
        data: 'ballistic',
        pen: ['59h', '59h', '59h', '59h'],
        dc: [10, 10, 10, 10],
      },
    ],
    explosive: [
      {
        type: 'HEAT',
        data: 'explosive',
        pen: [4.8, 4.7, 4.5, 4.3, 3.9, 3.1],
        dc: [7, 7, 6, 6, 6, 5],
        bshc: [15, 3, 0, -3, -6, -12],
        bc: ['10h', 232, 67, 34, 15, 5],
      },
    ],
    aoi: ['', '', 1, 2],
    ba: [16, 5, -5, -14],
    tof: [7, 17, 36, 78],
    offical: true,
  },
});

export const getLauncherWeightByName = (name) => launcherList[name].weight;

export const getLauncherMagByName = (name) => JSON.parse(JSON.stringify(launcherList[name].mag));
