import { averageRifle11Aims, belowAverageverageRifle11Aims, aboveAverageRifle11Aims, improvedRifle11Aims, averageRifle9Aims, aboveAverageRifle9Aims } from '../aimTimes';
import { averageRifle762FMJ, averageRifle762x39FMJ, averageRifle556FMJ, averageRifle556JHP, averageRifle556AP, averageRifle30CarbineFMJ } from '../projectiles';

export const rifles = Object.freeze({
  'Kar 98k': {
    name: 'Kar 98k',
    list: 'rifles',
    calibre: '7.92mm Mauser',
    qty: 1,
    length: 44,
    baseWeight: 8.54,
    rt: 8,
    rof: '3',
    mag: [{ type: 'CS', weight: 0.36, cap: 5, qty: 0 }],
    kd: 10,
    sab: 7,
    aim: averageRifle11Aims,
    projectiles: [
      {
        type: 'FMJ',
        pen: [18, 17, 16, 15, 14, 11, 8.1, 6.2],
        dc: [8, 8, 8, 7, 7, 7, 6, 6],
      },
    ],
    trb: null,
    ma: null,
    ba: [63, 55, 47, 39, 35, 25, 19, 15],
    tof: [0, 0, 1, 2, 3, 6, 9, 12],
    offical: true,
  },
  'Karabin M1938': {
    name: 'Karabin M1938',
    list: 'rifles',
    calibre: '7.62 x 54mm',
    qty: 1,
    length: 40,
    baseWeight: 7.73,
    rt: 8,
    rof: '3',
    mag: [{ type: 'CS', weight: 0.27, cap: 5, qty: 0 }],
    kd: 12,
    sab: 7,
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      mod: [-22, -12, -9, -7, -6, -4, -3, -2, -1],
    },
    projectiles: [
      {
        type: 'FMJ',
        pen: [23, 22, 21, 20, 18, 14, 11, 8.9],
        dc: [8, 8, 8, 8, 8, 7, 7, 6],
      },
    ],
    trb: null,
    ma: null,
    ba: [64, 54, 48, 41, 36, 27, 21, 17],
    tof: [0, 0, 1, 2, 2, 5, 8, 11],
    offical: true,
  },
  'MAS 36': {
    name: 'MAS 36',
    list: 'rifles',
    calibre: '7.5mm MAS',
    qty: 1,
    length: 40,
    baseWeight: 8.29,
    rt: 8,
    rof: '3',
    mag: [{ type: 'CS', weight: 0.31, cap: 5, qty: 0 }],
    kd: 9,
    sab: 6,
    aim: averageRifle11Aims,
    projectiles: [
      {
        type: 'FMJ',
        pen: [18, 18, 17, 15, 14, 9.8, 7, 5.1],
        dc: [8, 7, 7, 7, 7, 6, 6, 4],
      },
    ],
    trb: null,
    ma: null,
    ba: [61, 53, 45, 37, 32, 23, 17, 13],
    tof: [0, 0, 1, 2, 2, 5, 8, 12],
    offical: true,
  },
  AK47: {
    name: 'AK47',
    list: 'rifles',
    calibre: '7.62 x 39mm',
    qty: 1,
    length: 34,
    baseWeight: 9.5,
    rt: 8,
    rof: '*5',
    mag: [{ type: 'Mag', weight: 1.8, cap: 30, qty: 0 }],
    kd: 7,
    sab: 5,
    aim: averageRifle9Aims,
    projectiles: [averageRifle762x39FMJ],
    trb: null,
    ma: [0.4, 0.8, 2, 3, 4, 8, 12, 17],
    ba: [58, 50, 40, 33, 28, 18, 13, 9],
    tof: [0, 1, 1, 2, 3, 6, 10, 14],
    offical: true,
  },
  AKM: {
    name: 'AKM',
    list: 'rifles',
    calibre: '7.62 x 39mm',
    qty: 1,
    length: 35,
    baseWeight: 6.9,
    rt: 8,
    rof: '*5',
    mag: [{ type: 'Mag', weight: 1.8, cap: 30, qty: 0 }],
    kd: 7,
    sab: 5,
    aim: averageRifle9Aims,
    projectiles: [averageRifle762x39FMJ],
    trb: null,
    ma: [0.4, 0.8, 2, 3, 4, 8, 12, 17],
    ba: [58, 50, 40, 33, 28, 18, 13, 9],
    tof: [0, 1, 1, 2, 3, 6, 10, 14],
    offical: true,
  },
  'AK 74': {
    name: 'AK 74',
    list: 'rifles',
    calibre: '5.45 x 39.5mm',
    qty: 1,
    length: 37,
    baseWeight: 7.6,
    rt: 8,
    rof: '*5',
    mag: [{ type: 'Mag', weight: 1.1, cap: 30, qty: 0 }],
    kd: 4,
    sab: 2,
    aim: averageRifle9Aims,
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
  'CAR 16': {
    name: 'CAR 16',
    list: 'rifles',
    calibre: '5.56mm NATO',
    qty: 1,
    length: '28/31',
    baseWeight: 6.1,
    rt: 8,
    rof: '*7',
    mag: [{ type: 'Mag', weight: 1, cap: 30, qty: 0 }, { type: 'Mag', weight: 0.7, cap: 20, qty: 0 }],
    kd: 4,
    sab: 3,
    aim: aboveAverageRifle9Aims,
    projectiles: [
      {
        type: 'FMJ',
        pen: [14, 13, 12, 11, 9.3, 5.9, 3.7, 2.3],
        dc: [6, 6, 6, 5, 5, 4, 3, 2],
      },
      {
        type: 'JHP',
        pen: [14, 13, 12, 10, 8.9, 5.6, 3.5, 2.2],
        dc: [8, 7, 7, 7, 7, 6, 4, 3],
      },
      {
        type: 'AP',
        pen: [20, 19, 17, 15, 13, 8.3, 5.2, 3.3],
        dc: [6, 6, 5, 5, 4, 3, 3, 2],
      },
    ],
    trb: null,
    ma: [0.4, 0.8, 2, 3, 4, 8, 11, 15],
    ba: [60, 51, 42, 35, 30, 20, 15, 11],
    tof: [0, 0, 1, 1, 2, 5, 8, 11],
    offical: true,
  },
  FAMAS: {
    name: 'FAMAS',
    list: 'rifles',
    calibre: '5.56mm NATO',
    qty: 1,
    length: 30,
    baseWeight: 8,
    rt: 10,
    rof: '**8',
    mag: [{ type: 'Mag', weight: 1, cap: 25, qty: 0 }],
    kd: 4,
    sab: 3,
    aim: averageRifle9Aims,
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
  'FN FAL': {
    name: 'FN FAL',
    list: 'rifles',
    calibre: '7.62mm NATO',
    qty: 1,
    length: 43,
    weight: 9.4,
    rt: 8,
    rof: '*6',
    mag: [{ type: 'Mag', weight: 1.4, cap: 20, qty: 0 }],
    kd: 10,
    sab: 5,
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      mod: [-24, -13, -9, -8, -6, -5, -4, -3, -2, -1, 0],
    },
    projectiles: [
      {
        type: 'FMJ',
        pen: [19, 19, 17, 16, 14, 10, 7.4, 5.3],
        dc: [8, 8, 8, 7, 7, 7, 6, 5],
      },
    ],
    trb: null,
    ma: [0.6, 1, 3, 4, 6, 13, 19, 25],
    ba: [61, 53, 45, 37, 32, 23, 17, 13],
    tof: [0, 0, 1, 2, 2, 5, 8, 11],
    offical: true,
  },
  'HK G3': {
    name: 'HK G3',
    list: 'rifles',
    calibre: '7.62mm NATO',
    qty: 1,
    length: 40,
    baseWeight: 9.7,
    rt: 8,
    rof: '*5',
    mag: [{ type: 'Mag', weight: 1.4, cap: 20, qty: 0 }],
    kd: 10,
    sab: 5,
    aim: belowAverageverageRifle11Aims,
    projectiles: [
      {
        type: 'FMJ',
        pen: [17, 16, 15, 14, 13, 8.9, 6.3, 4.5],
        dc: [8, 7, 7, 7, 7, 6, 6, 4],
      },
    ],
    trb: null,
    ma: [0.5, 1, 2, 3, 5, 10, 14, 19],
    ba: [61, 53, 44, 37, 32, 23, 17, 13],
    tof: [0, 0, 1, 2, 3, 5, 9, 12],
    offical: true,
  },
  L1A1: {
    name: 'L1A1',
    list: 'rifles',
    calibre: '7.62mm NATO',
    qty: 1,
    length: 45,
    baseWeight: 9.5,
    rt: 8,
    rof: '*',
    mag: [{ type: 'Mag', weight: 1.5, cap: 20, qty: 0 }],
    kd: 10,
    sab: 5,
    aim: belowAverageverageRifle11Aims,
    projectiles: [averageRifle762FMJ],
    trb: null,
    ma: null,
    ba: [61, 53, 45, 37, 32, 23, 17, 13],
    tof: [0, 0, 1, 2, 2, 5, 8, 12],
    offical: true,
  },
  'L1A1 F1': {
    name: 'L1A1 F1',
    list: 'rifles',
    calibre: '7.62mm NATO',
    qty: 1,
    length: 42,
    baseWeight: 10.4,
    rt: 8,
    rof: '*',
    mag: [{ type: 'Mag', weight: 1.6, cap: 20, qty: 0 }],
    kd: 10,
    sab: 5,
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      mod: [-24, -14, -10, -8, -6, -5, -4, -3, -2, -1, 0],
    },
    projectiles: [
      {
        type: 'FMJ',
        pen: [18, 18, 17, 15, 14, 9.8, 7.0, 5.0],
        dc: [8, 8, 8, 7, 7, 6, 6, 5],
      },
    ],
    trb: null,
    ma: null,
    ba: [61, 53, 45, 37, 32, 23, 17, 13],
    tof: [0, 0, 1, 2, 2, 5, 8, 12],
    offical: true,
  },
  M4: {
    name: 'M4',
    list: 'rifles',
    calibre: '5.56mm NATO',
    qty: 1,
    length: '28/31',
    baseWeight: 6.1,
    rt: 8,
    rof: '**',
    mag: [{ type: 'Mag', weight: 1, cap: 30, qty: 0 }, { type: 'Mag', weight: 0.7, cap: 20, qty: 0 }],
    kd: 4,
    sab: 3,
    aim: aboveAverageRifle9Aims,
    projectiles: [
      {
        type: 'FMJ',
        pen: [15, 14, 13, 12, 10, 6.2, 3.9, 2.4],
        dc: [6, 6, 6, 5, 5, 4, 3, 2],
      },
    ],
    trb: [-5, 0, 5, 9, 11, 16, 19, 21],
    ma: [0.4, 0.8, 2, 3, 4, 8, 11, 15],
    ba: [60, 51, 42, 35, 30, 20, 15, 11],
    tof: [0, 0, 1, 1, 2, 5, 8, 12],
    offical: false,
  },
  M14: {
    name: 'M14',
    list: 'rifles',
    calibre: '7.62mm NATO',
    qty: 1,
    length: 44,
    baseWeight: 9.6,
    rt: 8,
    rof: '*6',
    mag: [{ type: 'Mag', weight: 1.6, cap: 20, qty: 0 }],
    kd: 10,
    sab: 5,
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
      mod: [-24, -14, -10, -8, -6, -5, -4, -3, -2, -1, 0],
    },
    projectiles: [averageRifle762FMJ],
    trb: null,
    ma: [0.6, 1, 2, 4, 6, 12, 19, 25],
    ba: [61, 53, 45, 37, 32, 23, 17, 13],
    tof: [0, 0, 1, 2, 2, 5, 8, 11],
    offical: true,
  },
  M16: {
    name: 'M16',
    list: 'rifles',
    calibre: '5.56mm NATO',
    qty: 1,
    length: 39,
    baseWeight: 8,
    rt: 8,
    rof: '*7',
    mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 0 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }],
    kd: 4,
    sab: 3,
    aim: aboveAverageRifle11Aims,
    projectiles: [
      averageRifle556FMJ,
      averageRifle556JHP,
      averageRifle556AP,
    ],
    trb: null,
    ma: [0.4, 0.8, 2, 3, 4, 8, 11, 15],
    ba: [60, 51, 42, 35, 30, 20, 15, 11],
    tof: [0, 0, 1, 1, 2, 4, 7, 10],
    offical: true,
  },
  M16A1: {
    name: 'M16A1',
    list: 'rifles',
    calibre: '5.56mm NATO',
    qty: 1,
    length: 39,
    baseWeight: 7,
    rt: 8,
    rof: '*7',
    mag: [{ type: 'Mag', weight: 1, cap: 30, qty: 0 }, { type: 'Mag', weight: 0.7, cap: 20, qty: 0 }],
    kd: 4,
    sab: 3,
    aim: aboveAverageRifle11Aims,
    projectiles: [
      averageRifle556FMJ,
      averageRifle556JHP,
      averageRifle556AP,
    ],
    trb: null,
    ma: [0.4, 0.8, 2, 3, 4, 8, 11, 15],
    ba: [60, 51, 42, 35, 30, 20, 15, 11],
    tof: [0, 0, 1, 1, 2, 4, 7, 10],
    offical: true,
  },
  'M1 Garand': {
    name: 'M1 Garand',
    list: 'rifles',
    calibre: '30-06',
    qty: 1,
    length: 44,
    baseWeight: 9.48,
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
  'M1 Carbine': {
    name: 'M1 Carbine',
    list: 'rifles',
    calibre: '.30 Carbine',
    qty: 1,
    length: 36,
    baseWeight: 5.13,
    rt: 8,
    rof: '*',
    mag: [{ type: 'Mag', weight: 0.77, cap: 15, qty: 0 }, { type: 'Mag', weight: 1.5, cap: 30, qty: 0 }],
    kd: 5,
    sab: 4,
    aim: improvedRifle11Aims,
    projectiles: [averageRifle30CarbineFMJ],
    trb: null,
    ma: null,
    ba: [55, 46, 37, 29, 24, 14, 8, 5],
    tof: [0, 1, 1, 2, 3, 8, 13, 18],
    offical: true,
  },
  'M2 Carbine': {
    name: 'M2 Carbine',
    list: 'rifles',
    calibre: '.30 Carbine',
    qty: 1,
    length: 36,
    baseWeight: 4.8,
    rt: 8,
    rof: '*8',
    mag: [{ type: 'Mag', weight: 1.5, cap: 30, qty: 0 }, { type: 'Mag', weight: 0.77, cap: 15, qty: 0 }],
    kd: 5,
    sab: 4,
    aim: improvedRifle11Aims,
    projectiles: [averageRifle30CarbineFMJ],
    trb: null,
    ma: [0.6, 1, 2, 4, 6, 12, 17, 23],
    ba: [55, 46, 37, 29, 24, 14, 8, 5],
    tof: [0, 1, 1, 2, 3, 8, 13, 18],
    offical: true,
  },
  'M1949-56': {
    name: 'M1949-56',
    list: 'rifles',
    calibre: '7.5 x 54mm',
    qty: 1,
    length: 40,
    baseWeight: 8.65,
    rt: 8,
    rof: '*',
    mag: [{ type: 'Mag', weight: 0.95, cap: 10, qty: 0 }],
    kd: 9,
    sab: 5,
    aim: averageRifle11Aims,
    projectiles: [
      {
        type: 'FMJ',
        pen: [18, 18, 17, 15, 14, 9.7, 7, 5],
        dc: [7, 7, 7, 7, 7, 6, 6, 5],
      },
    ],
    ba: [62, 54, 45, 38, 33, 24, 18, 14],
    tof: [0, 0, 1, 2, 2, 5, 8, 12],
    offical: true,
  },
  SKS: {
    name: 'SKS',
    list: 'rifles',
    calibre: '7.62 x 39mm',
    qty: 1,
    length: 40,
    baseWeight: 7.98,
    rt: 9,
    rof: '*',
    mag: [{ type: 'CS', weight: 0.62, cap: 10, qty: 0 }],
    kd: 7,
    sab: 5,
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      mod: [-23, -12, -9, -7, -6, -5, -3, -3, -2, -1],
    },
    projectiles: [
      {
        type: 'FMJ',
        pen: [12, 12, 11, 9.4, 8.4, 5.6, 3.8, 2.6],
        dc: [7, 7, 7, 6, 6, 5, 3, 2],
      },
    ],
    ba: [58, 49, 40, 33, 28, 18, 12, 8],
    tof: [0, 1, 1, 2, 3, 6, 10, 14],
    offical: true,
  },
  'SVT 40': {
    name: 'SVT 40',
    list: 'rifles',
    calibre: '7.62 x 54mm',
    qty: 1,
    length: 48,
    baseWeight: 8.1,
    rt: 8,
    rof: '*',
    mag: [{ type: 'Mag', weight: 1.1, cap: 10, qty: 0 }],
    kd: 12,
    sab: 7,
    aim: averageRifle11Aims,
    projectiles: [
      {
        type: 'FMJ',
        pen: [24, 23, 22, 21, 19, 15, 12, 9.4],
        dc: [8, 8, 8, 8, 8, 7, 7, 6],
      },
    ],
    ba: [63, 56, 48, 41, 36, 27, 21, 17],
    tof: [0, 0, 1, 2, 2, 5, 8, 11],
    offical: true,
  },
});
