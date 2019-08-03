import { M1CarbineClass, getM2Carbine, M16Class, getM16A1, KalashnikovClass } from './firearmsClasses';

export const filterableCalibers = () => [
  '7.62 x 39mm',
  '5.45 x 39.5mm',
  '5.56mm NATO',
  '7.62mm NATO',
  '9mm Parabellum',
];

export const rifles = () => [
  new KalashnikovClass('AK47', 34, 11.3),
  new KalashnikovClass('AKM 47', 35, 8.7),
  {
    name: 'AK 74',
    list: 'rifles',
    calibre: '5.45 x 39.5mm',
    qty: 1,
    length: 37,
    weight: 8.7,
    rt: 8,
    rof: '*5',
    mag: [{ type: 'Mag', weight: 1.1, cap: 30, qty: 0 }],
    kd: 4,
    sab: 2,
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      mod: [-23, -12, -9, -7, -6, -4, -3, -2, -1],
    },
    projectiles: [
      {
        type: 'FMJ',
        pen: [14, 13, 12, 10, 9.1, 5.8, 3.7, 2.4],
        dc: [6, 6, 5, 5, 4, 3, 3, 2],
      },
    ],
    ma: [0.2, 0.3, 0.5, 0.9, 1, 3, 4, 5],
    ba: [60, 52, 43, 36, 31, 21, 16, 12],
    tof: [0, 0, 1, 2, 2, 5, 8, 12],
    offical: true,
  },
  {
    name: 'FAMAS',
    list: 'rifles',
    calibre: '5.56mm NATO',
    qty: 1,
    length: 30,
    weight: 9,
    rt: 10,
    rof: '**8',
    mag: [{ type: 'Mag', weight: 1, cap: 25, qty: 0 }],
    kd: 4,
    sab: 3,
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      mod: [-23, -12, -9, -7, -6, -4, -3, -2, -1],
    },
    projectiles: [
      {
        type: 'FMJ',
        pen: [15, 15, 13, 12, 10, 6.4, 4.1, 2.6],
        dc: [6, 6, 6, 6, 5, 4, 3, 2],
      },
      {
        type: 'JHP',
        pen: [15, 14, 13, 11, 9.7, 6.2, 3.9, 2.5],
        dc: [8, 8, 7, 7, 7, 6, 4, 3],
      },
      {
        type: 'AP',
        pen: [22, 21, 19, 16, 14, 9.1, 5.8, 3.7],
        dc: [6, 6, 6, 5, 5, 4, 3, 2],
      },
    ],
    trb: [-6, -1, 4, 8, 10, 15, 18, 20],
    ma: [0.4, 0.8, 2, 3, 4, 8, 12, 16],
    ba: [60, 51, 42, 35, 30, 20, 15, 11],
    tof: [0, 0, 1, 1, 2, 5, 8, 11],
    offical: true,
    bipod: true,
  },
  new M16Class('M16'),
  getM16A1(),
  {
    name: 'M1 Garand',
    list: 'rifles',
    calibre: '30-06',
    qty: 1,
    length: 44,
    weight: 10,
    rt: 7,
    rof: '*',
    mag: [{ type: 'Cp', weight: 0.52, cap: 8, qty: 0 }],
    kd: 11,
    sab: 6,
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
      mod: [-23, -13, -9, -8, -6, -5, -4, -3, -2, -1, 0],
    },
    projectiles: [
      {
        type: 'FMJ',
        pen: [22, 21, 20, 18, 17, 13, 9.3, 6.9],
        dc: [8, 8, 8, 8, 7, 7, 6, 6],
      },
    ],
    ba: [62, 54, 45, 38, 33, 24, 18, 14],
    tof: [0, 0, 1, 2, 2, 5, 8, 11],
    offical: true,
  },
  new M1CarbineClass(),
  getM2Carbine(),
];

export const smgs = () => [
  {
    name: 'MAT 49',
    list: 'smgs',
    calibre: '9mm Parabellum',
    qty: 1,
    length: '18/28',
    weight: 9.2,
    rt: 8,
    rof: '*5',
    mag: [{ type: 'Mag', weight: 1.5, cap: 32, qty: 0 }],
    kd: 3,
    sab: 3,
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      mod: [-23, -12, -9, -8, -6, -5, -4, -3, -2],
    },
    projectiles: [
      {
        type: 'FMJ',
        pen: [2.4, 2.2, 1.9, 1.5, 1.1, 0.5, 0.2, 0.1],
        dc: [3, 3, 3, 2, 2, 1, 1, 1],
      },
    ],
    ma: [0.2, 0.4, 0.8, 1, 2, 4, 6, 8],
    ba: [46, 37, 28, 21, 16, 7, 1, -2],
    tof: [0, 1, 2, 4, 6, 13, 22, 32],
    offical: true,
  },
  {
    name: 'Owen Mk1',
    list: 'smgs',
    calibre: '9mm Parabellum',
    qty: 1,
    length: '32',
    weight: 10.1,
    rt: 9,
    rof: '*6',
    mag: [{ type: 'Mag', weight: 1.4, cap: 34, qty: 0 }],
    kd: 3,
    sab: 2,
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      mod: [-23, -13, -10, -8, -7, -5, -4, -4, -3, -2, -1],
    },
    projectiles: [
      {
        type: 'FMJ',
        pen: [2.3, 2.1, 1.8, 1.4, 1.1, 0.5, 0.2, 0.1],
        dc: [3, 3, 3, 2, 1, 1, 1, 1],
      },
    ],
    ma: [0.2, 0.5, 0.9, 2, 2, 5, 7, 9],
    ba: [45, 36, 27, 20, 15, 6, 0, -3],
    tof: [0, 1, 2, 4, 6, 13, 23, 32],
    offical: true,
  },
  {
    name: 'M3A1',
    list: 'smgs',
    calibre: '45 ACP',
    qty: 1,
    length: '23/30',
    weight: 9.4,
    rt: 8,
    rof: '*4',
    mag: [{ type: 'Mag', weight: 2.0, cap: 30, qty: 0 }],
    kd: 5,
    sab: 3,
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7, 8],
      mod: [-23, -12, -9, -8, -6, -5, -4, -3],
    },
    projectiles: [
      {
        type: 'FMJ',
        pen: [1.7, 1.5, 1.3, 1.0, 0.8, 0.4, 0.2, 0.1],
        dc: [3, 3, 2, 1, 1, 1, 1, 1],
      },
    ],
    ma: [0.2, 0.5, 0.9, 2, 2, 5, 9, 12],
    ba: [45, 36, 27, 20, 15, 5, 0, -4],
    tof: [1, 1, 3, 5, 8, 18, 30, 44],
    offical: true,
  },
];

export const pistols = () => [
  {
    name: 'M1911A1',
    list: 'pistols',
    calibre: '45 ACP',
    qty: 1,
    length: 9,
    weight: 3,
    rt: 4,
    rof: '*',
    mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }],
    kd: 5,
    sab: 5,
    aim: {
      ac: [1, 2, 3, 4, 5, 6],
      mod: [-18, -11, -10, -9, -8, -7],
    },
    projectiles: [
      {
        type: 'FMJ',
        pen: [1.6, 1.5, 1.2, 1.0, 0.8, 0.3, 0.2, 0.1],
        dc: [3, 3, 2, 1, 1, 1, 1, 1],
      },
      {
        type: 'JHP',
        pen: [1.5, 1.4, 1.2, 0.9, 0.7, 0.3, 0.1, 0.1],
        dc: [4, 4, 3, 2, 1, 1, 1, 1],
      },
      {
        type: 'AP',
        pen: [2.2, 2.1, 1.8, 1.4, 1.1, 0.5, 0.2, 0.1],
        dc: [3, 3, 2, 1, 1, 1, 1, 1],
      },
    ],
    ba: [45, 36, 27, 20, 15, 5, 0, -4],
    tof: [1, 2, 3, 5, 8, 19, 31, 45],
    offical: true,
  },
  {
    name: 'Makarov PM',
    list: 'pistols',
    calibre: '9 x 18mm',
    qty: 1,
    length: 6,
    weight: 1.7,
    rt: 5,
    rof: '*',
    mag: [{ type: 'Mag', weight: 0.4, cap: 8, qty: 0 }],
    kd: 2,
    sab: 3,
    aim: {
      ac: [1, 2, 3, 4, 5],
      mod: [-16, -11, -10, -9, -8],
    },
    projectiles: [
      {
        type: 'FMJ',
        pen: [1.2, 1.1, 0.9, 0.6, 0.4, 0.1, '', ''],
        dc: [2, 2, 1, 1, 1, 1, '', ''],
      },
    ],
    ba: [41, 32, 23, 15, 10, 1, '', ''],
    tof: [1, 1, 3, 5, 7, 18, '', ''],
    offical: true,
  },
  {
    name: 'Lebel M1892',
    list: 'pistols',
    calibre: '8mm MLe 92',
    qty: 1,
    length: 9,
    weight: 2.1,
    rt: 12,
    rof: '1',
    mag: [{ type: 'HMC', weight: 0.18, cap: 6, qty: 0 }],
    kd: 2,
    sab: 3,
    aim: {
      ac: [1, 2, 3, 4, 5, 6],
      mod: [-17, -11, -10, -9, -8, -7],
    },
    projectiles: [
      {
        type: 'LRN',
        pen: [1.0, 0.9, 0.8, 0.6, 0.5, 0.2, 0.1, ''],
        dc: [1, 1, 1, 1, 1, 1, 1, ''],
      },
    ],
    ba: [48, 41, 33, 26, 21, 12, 6, ''],
    tof: [1, 2, 3, 6, 10, 22, 37, ''],
    offical: true,
  },
];

export const sniperRifles = () => [
  {
    name: 'Dragunov SVD',
    list: 'sniperRifles',
    calibre: '7.62 x 54mm',
    qty: 1,
    length: 48,
    weight: 10.2,
    rt: 8,
    rof: '*',
    mag: [{ type: 'Mag', weight: 0.68, cap: 10, qty: 0 }],
    kd: 12,
    sab: 6,
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      mod: [-22, -12, -7, -5, -4, -2, 0, 1, 2, 3, 4],
    },
    projectiles: [
      {
        type: 'FMJ',
        pen: [23, 22, 21, 19, 18, 14, 10, 7.8],
        dc: [8, 8, 8, 8, 8, 7, 7, 6],
      },
      {
        type: 'JHP',
        pen: [22, 21, 20, 19, 17, 13, 9.9, 7.5],
        dc: [10, 9, 9, 9, 9, 9, 8, 8],
      },
      {
        type: 'AP',
        pen: [32, 31, 30, 27, 25, 19, 15, 11],
        dc: [8, 8, 8, 8, 7, 7, 6, 6],
      },
    ],
    ba: [69, 62, 53, 46, 41, 32, 26, 22],
    tof: [0, 0, 1, 2, 2, 5, 8, 11],
    offical: true,
    optics: true,
  },
  {
    name: 'M40A1',
    list: 'sniperRifles',
    calibre: '7.62mm NATO',
    qty: 1,
    length: 44,
    weight: 14.8,
    rt: 16,
    rof: '3',
    mag: [{ type: 'Rnd', weight: 0.06, cap: 5, qty: 0 }],
    kd: 10,
    sab: 5,
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
      mod: [-25, -15, -8, -6, -4, -3, -1, 1, 2, 3, 4],
    },
    projectiles: [
      {
        type: 'FMJ',
        pen: [20, 19, 18, 16, 15, 11, 7.7, 5.5],
        dc: [8, 8, 8, 7, 7, 7, 6, 5],
      },
      {
        type: 'JHP',
        pen: [19, 18, 17, 16, 14, 10, 7.4, 5.3],
        dc: [9, 9, 9, 9, 9, 8, 8, 7],
      },
      {
        type: 'AP',
        pen: [28, 27, 25, 23, 21, 15, 11, 7.8],
        dc: [8, 8, 7, 7, 7, 6, 6, 5],
      },
    ],
    ba: [68, 59, 50, 43, 38, 28, 22, 18],
    tof: [0, 0, 1, 2, 2, 5, 8, 11],
    offical: true,
    optics: true,
  },
  {
    name: 'M1903 A4',
    list: 'sniperRifles',
    calibre: '30-06',
    qty: 1,
    length: 43,
    weight: 9.7,
    rt: 16,
    rof: '3',
    mag: [{ type: 'Rnd', weight: 0.07, cap: 5, qty: 0 }],
    kd: 12,
    sab: 7,
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      mod: [-22, -11, -7, -5, -4, -2, 0, 1, 2, 3, 4],
    },
    projectiles: [
      {
        type: 'FMJ',
        pen: [23, 23, 21, 20, 18, 14, 10, 7.7],
        dc: [8, 8, 8, 8, 8, 7, 7, 6],
      },
      {
        type: 'JHP',
        pen: [22, 22, 20, 19, 17, 13, 9.8, 7.4],
        dc: [10, 10, 9, 9, 9, 9, 8, 8],
      },
      {
        type: 'AP',
        pen: [33, 32, 31, 28, 26, 20, 15, 11],
        dc: [8, 8, 8, 8, 7, 7, 6, 6],
      },
    ],
    ba: [69, 61, 52, 45, 40, 30, 24, 20],
    tof: [0, 0, 1, 2, 2, 5, 8, 11],
    offical: true,
    optics: true,
  },
];

export const mgs = () => [
  {
    name: 'M60',
    list: 'mgs',
    calibre: '7.62mm NATO',
    qty: 1,
    length: 44,
    weight: 29.7,
    rt: 12,
    rof: '*5',
    mag: [{ type: 'Blt', weight: 6.5, cap: 100, qty: 0 }],
    kd: 10,
    sab: 3,
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      mod: [-30, -20, -14, -10, -8, -6, -5, -4, -3, -2, 0],
    },
    projectiles: [
      {
        type: 'FMJ',
        pen: [20, 19, 18, 16, 15, 11, 7.7, 5.5],
        dc: [8, 8, 8, 7, 7, 7, 6, 5],
      },
    ],
    ma: [0.3, 0.5, 1, 2, 3, 5, 8, 10],
    ba: [61, 53, 45, 37, 32, 23, 17, 13],
    tof: [0, 0, 1, 2, 2, 5, 8, 11],
    offical: true,
    bipod: true,
  },
  {
    name: 'RPD',
    list: 'mgs',
    calibre: '7.62 x 39mm',
    qty: 1,
    length: 41,
    weight: 22,
    rt: 14,
    rof: '*6',
    mag: [{ type: 'Drm', weight: 5.3, cap: 100, qty: 0 }],
    kd: 7,
    sab: 2,
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
      mod: [-28, -18, -11, -9, -7, -6, -5, -4, -3, -2, 0],
    },
    projectiles: [
      {
        type: 'FMJ',
        pen: [11, 10, 9.4, 8.2, 7.2, 4.6, 3.0, 1.9],
        dc: [7, 7, 6, 6, 6, 5, 3, 2],
      },
    ],
    ma: [0.2, 0.5, 0.9, 2, 2, 5, 7, 9],
    ba: [58, 50, 40, 33, 28, 18, 13, 9],
    tof: [0, 1, 1, 2, 3, 6, 10, 15],
    offical: true,
    bipod: true,
  },
  {
    name: 'DP',
    list: 'mgs',
    calibre: '7.62 x 54mm',
    qty: 1,
    length: 51,
    weight: 22.8,
    rt: 10,
    rof: '*5',
    mag: [{ type: 'Pan', weight: 3.3, cap: 47, qty: 0 }],
    kd: 12,
    sab: 4,
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
      mod: [-28, -18, -12, -9, -7, -6, -5, -4, -3, -2, 0],
    },
    projectiles: [
      {
        type: 'FMJ',
        pen: [24, 24, 22, 21, 19, 15, 12, 9.4],
        dc: [8, 8, 8, 8, 8, 7, 7, 6],
      },
    ],
    ma: [0.3, 0.7, 1, 2, 3, 7, 10, 13],
    ba: [63, 56, 48, 41, 36, 27, 21, 17],
    tof: [0, 0, 1, 2, 2, 5, 8, 11],
    offical: true,
    bipod: true,
  },
];

export const shotguns = () => [
  {
    name: 'Remington M870',
    list: 'shotguns',
    calibre: '12 Gauge',
    qty: 1,
    length: 42,
    weight: 8.8,
    rt: 30,
    rof: '2',
    mag: [{ type: 'Rnd', weight: 0.13, cap: 7, qty: 0 }],
    kd: 25,
    sab: 12,
    aim: {
      ac: [1, 3, 3, 4, 5, 6, 7, 8],
      mod: [-23, -12, -9, -7, -6, -4, -3, -2],
    },
    projectiles: [
      {
        type: 'Slug',
        pen: [7.7, 7.7, 7.6, 7.5, 7.5, 7.4, 7.3, 7.2, 6.9, 6.7, 5.7],
        dc: [10, 10, 10, 10, 10, 10, 10, 10, 10, 9, 9],
      },
      {
        type: ['Shot', '(00)', 12],
        pen: [5.4, 1.7, 1.7, 1.6, 1.6, 1.6, 1.4, 1.4, 1.2, 1.0, 0.6],
        dc: [8, 3, 3, 3, 3, 3, 2, 2, 2, 2, 1],
        salm: [-14, -9, -4, -1, 1, 2, 5, 7, 10, 12, 17],
        bphc: ['', '*11', '*10', '*9', '*7', '*5', '*2', '*1', 62, 35, 8],
        pr: ['.0', '.0', '.0', 0.1, 0.1, 0.1, 0.1, 0.2, 0.3, 0.4, 0.7],
      },
    ],
    ba: [67, 58, 48, 42, 38, 35, 29, 25, 19, 15, 5],
    tof: [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 4],
    offical: true,
  },
  {
    name: 'Ithaca LAPD',
    list: 'shotguns',
    calibre: '12 Gauge',
    qty: 1,
    length: 38,
    weight: 7.2,
    rt: 22,
    rof: '2',
    mag: [{ type: 'Rnd', weight: 0.13, cap: 5, qty: 0 }],
    kd: 15,
    sab: 9,
    aim: {
      ac: [1, 3, 3, 4, 5, 6, 7, 8],
      mod: [-22, -11, -9, -7, -5, -4, -3, -2],
    },
    projectiles: [
      {
        type: 'Slug',
        pen: [3.6, 3.6, 3.5, 3.5, 3.4, 3.4, 3.2, 3.1, 2.8, 2.6, 1.8],
        dc: [9, 9, 9, 9, 9, 9, 9, 9, 8, 8, 6],
      },
      {
        type: ['Shot', '(00)', 12],
        pen: [1.6, 1.6, 1.6, 1.5, 1.4, 1.4, 1.3, 1.2, 1.1, 0.9, 0.5],
        dc: [10, 4, 3, 3, 3, 3, 3, 3, 2, 2, 1],
        salm: [-13, -8, -3, 0, 2, 4, 7, 9, 11, 14, 19],
        bphc: ['', '*11', '*10', '*8', '*5', '*3', '*1', 74, 32, 17, 3],
        pr: ['.0', '.0', '.0', 0.1, 0.1, 0.1, 0.2, 0.3, 0.4, 0.6, 1.2],
      },
    ],
    ba: [61, 52, 42, 36, 32, 29, 23, 19, 13, 9, -1],
    tof: [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 4],
    offical: true,
  },
  {
    name: 'Sawed-Off Shotgun',
    list: 'shotguns',
    calibre: '12 Gauge',
    qty: 1,
    length: 20,
    weight: 6.8,
    rt: 16,
    rof: '*',
    mag: [{ type: 'Rnd', weight: 0.13, cap: 2, qty: 0 }],
    kd: 14,
    sab: 9,
    aim: {
      ac: [1, 3, 3, 4, 5],
      mod: [-21, -13, -11, -11, -10],
    },
    projectiles: [
      {
        type: 'Slug',
        pen: [3.1, 3.0, 3.0, 2.9, 2.8, 2.8, 2.7, 2.6, 2.3, 2.1, 1.5],
        dc: [8, 8, 8, 8, 8, 8, 8, 8, 7, 7, 5],
      },
      {
        type: ['Shot', '(00)', 12],
        pen: [1.3, 1.3, 1.2, 1.2, 1.1, 1.1, 1.0, 0.9, 0.8, 0.7, 0.4],
        dc: [3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 1],
        salm: [-9, -4, 1, 4, 6, 8, 11, 13, 16, 18, 23],
        bphc: ['*11', '*10', '*6', '*3', '*2', '*1', 44, 24, 10, 5, 0],
        pr: ['.0', '.0', 0.1, 0.1, 0.2, 0.2, 0.3, 0.4, 0.7, 0.9, 1.9],
      },
    ],
    ba: [61, 51, 41, 36, 31, 28, 23, 18, 13, 9, -1],
    tof: [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 4],
    offical: true,
  },
];
