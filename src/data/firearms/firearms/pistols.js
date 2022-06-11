import { averagePistol6Aims, belowAveragePistol6Aims, averagePistol5Aims } from '../aimTimes';
import { averagePistol9mmParabellumFMJ } from '../projectiles';

export const pistols = Object.freeze({
  'Colt Python (8")': {
    name: 'Colt Python (8")',
    list: 'pistols',
    calibre: '357 Magnum',
    qty: 1,
    length: 13,
    baseWeight: 2.83,
    rt: 7,
    rof: 1,
    mag: [{ type: 'SL', weight: 0.37, cap: 6, qty: 0 }],
    kd: 3,
    sab: 4,
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7],
      mod: [-18, -11, -10, -9, -8, -7, -6],
    },
    projectiles: [
      {
        type: 'JSP',
        pen: [3.7, 3.4, 3.1, 2.6, 2.2, 1.2, 0.7, 0.4],
        dc: [6, 6, 5, 4, 3, 1, 1, 1],
      },
      {
        type: 'JHP',
        pen: [3.6, 3.4, 3, 2.5, 2.1, 1.2, 0.7, 0.4],
        dc: [6, 6, 6, 5, 4, 2, 1, 1],
      },
      {
        type: 'AP',
        pen: [5.3, 5, 4.4, 3.7, 3.1, 1.7, 1, 0.5],
        dc: [4, 4, 4, 3, 3, 1, 1, 1],
      },
    ],
    ba: [53, 43, 33, 25, 20, 10, 5, 1],
    tof: [0, 1, 2, 3, 5, 11, 19, 27],
    offical: true,
  },
  'Desert Eagle (.50)': {
    name: 'Desert Eagle (.50)',
    list: 'pistols',
    calibre: '.50 AE',
    qty: 1,
    length: 10.6,
    baseWeight: 4.4,
    rt: 7,
    rof: 1,
    mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }],
    kd: 9,
    sab: 7,
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7],
      mod: [-20, -11, -8, -7, -6, -5, -4],
    },
    projectiles: [
      {
        type: 'FMJ',
        pen: [6.1, 5.7, 4.7, 3.6, 2.8, 1.2, 0.5, 0.2],
        dc: [8, 8, 7, 7, 7, 6, 3, 2],
      },
      {
        type: 'JHP',
        pen: [5.5, 5.1, 4.3, 3.3, 2.5, 1, 0.4, 0.2],
        dc: [9, 9, 8, 8, 7, 6, 4, 3],
      },
    ],
    ba: [46, 37, 28, 21, 16, 7, 2, -2],
    tof: [0, 1, 2, 3, 5, 10, 15, 21],
    offical: false,
  },
  'FN Mk 1': {
    name: 'FN Mk 1',
    list: 'pistols',
    calibre: '9mm Parabellum',
    qty: 1,
    length: 8,
    baseWeight: 1.8,
    rt: 4,
    rof: '*',
    mag: [{ type: 'Mag', weight: 0.5, cap: 13, qty: 0 }],
    kd: 3,
    sab: 4,
    aim: averagePistol6Aims,
    projectiles: [averagePistol9mmParabellumFMJ],
    ba: [46, 38, 29, 22, 17, 8, 2, -1],
    tof: [1, 1, 2, 4, 6, 15, 24, 35],
    offical: true,
  },
  'Glock Model 17': {
    name: 'Glock Model 17',
    list: 'pistols',
    calibre: '9mm Parabellum',
    qty: 1,
    length: 7,
    baseWeight: 1.25,
    rt: 4,
    rof: '*',
    mag: [{ type: 'Mag', weight: 0.55, cap: 17, qty: 0 }],
    kd: 3,
    sab: 4,
    aim: {
      ac: [1, 2, 3, 4, 5, 6],
      mod: [-16, -11, -10, -9, -8, -7],
    },
    projectiles: [
      {
        type: 'FMJ',
        pen: [1.9, 1.8, 1.5, 1.1, 0.9, 0.4, 0.1, 0.1],
        dc: [3, 3, 2, 2, 1, 1, 1, 1],
      },
    ],
    ba: [45, 37, 28, 21, 16, 6, 1, -2],
    tof: [1, 1, 2, 4, 6, 15, 25, 36],
    offical: true,
  },
  M1911A1: {
    name: 'M1911A1',
    list: 'pistols',
    calibre: '45 ACP',
    qty: 1,
    length: 9,
    baseWeight: 2.3,
    rt: 4,
    rof: '*',
    mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }],
    kd: 5,
    sab: 5,
    aim: belowAveragePistol6Aims,
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
  M92F: {
    name: 'M92F',
    list: 'pistols',
    calibre: '9mm Parabellum',
    qty: 1,
    length: 9,
    baseWeight: 1.8,
    rt: 4,
    rof: '*',
    mag: [{ type: 'Mag', weight: 0.6, cap: 15, qty: 0 }],
    kd: 3,
    sab: 4,
    aim: averagePistol6Aims,
    projectiles: [
      {
        type: 'FMJ',
        pen: [2.4, 2.2, 1.9, 1.5, 1.1, 0.5, 0.2, 0.1],
        dc: [3, 3, 3, 2, 2, 1, 1, 1],
      },
      {
        type: 'JHP',
        pen: [2.3, 2.1, 1.8, 1.4, 1.1, 0.5, 0.2, 0.1],
        dc: [5, 5, 4, 3, 2, 1, 1, 1],
      },
      {
        type: 'AP',
        pen: [3.4, 3.1, 2.6, 2, 1.6, 0.7, 0.3, 0.1],
        dc: [3, 3, 3, 2, 2, 1, 1, 1],
      },
    ],
    ba: [46, 37, 28, 21, 16, 7, 1, -2],
    tof: [0, 1, 2, 4, 6, 13, 22, 32],
    offical: true,
  },
  'MAB PA15': {
    name: 'MAB PA15',
    list: 'pistols',
    calibre: '9mm Parabellum',
    qty: 1,
    length: 8,
    baseWeight: 2.2,
    rt: 4,
    rof: '*',
    mag: [{ type: 'Mag', weight: 0.6, cap: 15, qty: 0 }],
    kd: 3,
    sab: 4,
    aim: belowAveragePistol6Aims,
    projectiles: [averagePistol9mmParabellumFMJ],
    ba: [46, 38, 29, 22, 17, 8, 2, -1],
    tof: [1, 1, 2, 4, 6, 15, 24, 35],
    offical: true,
  },
  'Makarov PM': {
    name: 'Makarov PM',
    list: 'pistols',
    calibre: '9 x 18mm',
    qty: 1,
    length: 6,
    baseWeight: 1.3,
    rt: 5,
    rof: '*',
    mag: [{ type: 'Mag', weight: 0.4, cap: 8, qty: 0 }],
    kd: 2,
    sab: 3,
    aim: averagePistol5Aims,
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
  'MAS 1873': {
    name: 'MAS 1873',
    list: 'pistols',
    calibre: '11mm MLe 1873',
    qty: 1,
    length: 9,
    baseWeight: 2.02,
    rt: 24,
    rof: '1',
    mag: [{ type: 'Rnd', weight: 0.03, cap: 6, qty: 0 }],
    kd: 3,
    sab: 4,
    aim: {
      ac: [1, 2, 3, 4, 5, 6],
      mod: [-16, -11, -9, -8, -7, -6],
    },
    projectiles: [
      {
        type: 'LRN',
        pen: [0.7, 0.7, 0.6, 0.4, 0.3, 0.1, 0.1, ''],
        dc: [2, 2, 2, 2, 2, 1, 1, ''],
      },
    ],
    ba: [46, 37, 28, 21, 16, 7, 2, ''],
    tof: [1, 2, 5, 9, 13, 26, 39, ''],
    offical: false,
  },
  'Modèle 1935A': {
    name: 'Modèle 1935A',
    list: 'pistols',
    calibre: '7.65×20mm Longue',
    qty: 1,
    length: 8,
    baseWeight: 1.6,
    rt: 4,
    rof: '*',
    mag: [{ type: 'Mag', weight: 0.65, cap: 8, qty: 0 }],
    kd: 2,
    sab: 3,
    aim: {
      ac: [1, 2, 3, 4, 5, 6],
      mod: [-15, -10, -9, -8, -7, -6],
    },
    projectiles: [
      {
        type: 'FMJ',
        pen: [1.5, 1.4, 1.2, 0.9, 0.7, 0.3, 0.1, 0.1],
        dc: [2, 2, 2, 2, 1, 1, 1, 1],
      },
      {
        type: 'JHP',
        pen: [1.4, 1.3, 1.1, 0.8, 0.6, 0.3, 0.1, 0.1],
        dc: [2, 2, 2, 2, 2, 1, 1, 1],
      },
    ],
    ba: [46, 37, 28, 21, 16, 7, 2, -2],
    tof: [0, 1, 2, 5, 7, 14, 21, 28],
    offical: false,
  },
  'Lebel M1892': {
    name: 'Lebel M1892',
    list: 'pistols',
    calibre: '8mm MLe 92',
    qty: 1,
    length: 9,
    baseWeight: 1.92,
    rt: 12,
    rof: '1',
    mag: [{ type: 'HMC', weight: 0.18, cap: 6, qty: 0 }],
    kd: 2,
    sab: 3,
    aim: averagePistol6Aims,
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
  'Tokarev TT33': {
    name: 'Tokarev TT33',
    list: 'pistols',
    calibre: '7.62mm Tokarev',
    qty: 1,
    length: 8,
    baseWeight: 1.61,
    rt: 4,
    rof: '*',
    mag: [{ type: 'Mag', weight: 0.39, cap: 8, qty: 0 }],
    kd: 3,
    sab: 4,
    aim: averagePistol6Aims,
    projectiles: [
      {
        type: 'FMJ',
        pen: [2.6, 2.4, 2, 1.6, 1.3, 0.6, 0.2, 0.1],
        dc: [3, 3, 2, 2, 1, 1, 1, 1],
      },
    ],
    ba: [46, 38, 29, 22, 17, 8, 3, -1],
    tof: [0, 1, 2, 3, 5, 12, 20, 29],
    offical: true,
  },
  'Walther PPK': {
    name: 'Walther PPK',
    list: 'pistols',
    calibre: '32 ACP',
    qty: 1,
    length: 6,
    baseWeight: 1.09,
    rt: 4,
    rof: '*',
    mag: [{ type: 'Mag', weight: 0.31, cap: 7, qty: 0 }],
    kd: 2,
    sab: 2,
    aim: averagePistol5Aims,
    projectiles: [
      {
        type: 'FMJ',
        pen: [1.0, 0.9, 0.7, 0.5, 0.3, 0.1, '', ''],
        dc: [1, 1, 1, 1, 1, 1, '', ''],
      },
      {
        type: 'JHP',
        pen: [0.9, 0.8, 0.7, 0.5, 0.3, 0.1, '', ''],
        dc: [2, 1, 1, 1, 1, 1, '', ''],
      },
    ],
    ba: [44, 36, 27, 19, 14, 5, '', ''],
    tof: [1, 1, 3, 5, 8, 20, '', ''],
    offical: true,
  },
});
