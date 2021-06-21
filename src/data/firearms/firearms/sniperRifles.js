import { averageOther762FMJ } from '../projectiles';

export const sniperRifles = Object.freeze({
  'Dragunov SVD': {
    name: 'Dragunov SVD',
    list: 'sniperRifles',
    calibre: '7.62 x 54mm',
    qty: 1,
    length: 48,
    baseWeight: 8.2,
    rt: 8,
    rof: '*',
    mag: [{ type: 'Mag', weight: 0.68, cap: 10, qty: 0 }],
    kd: 12,
    sab: 6,
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      mod: [-23, -13, -5, -7, -6, -4, -3, -2, -1, 0, 1],
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
    optics: {
      ableToAttach: ['PSO - 1'],
      attached: 'PSO - 1',
    },
  },
  M40A1: {
    name: 'M40A1',
    list: 'sniperRifles',
    calibre: '7.62mm NATO',
    qty: 1,
    length: 44,
    baseWeight: 12.32,
    rt: 16,
    rof: '3',
    mag: [{ type: 'Rnd', weight: 0.06, cap: 5, qty: 0 }],
    kd: 10,
    sab: 5,
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
      mod: [-24, -14, -9, -7, -6, -5, -4, -3, -2, -1, 0],
    },
    projectiles: [
      averageOther762FMJ,
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
    optics: {
      ableToAttach: ['Unertl x10'],
      attached: 'Unertl x10',
    },
  },
  'M1903 A4': {
    name: 'M1903 A4',
    list: 'sniperRifles',
    calibre: '30-06',
    qty: 1,
    length: 43,
    baseWeight: 8.05,
    rt: 16,
    rof: '3',
    mag: [{ type: 'Rnd', weight: 0.07, cap: 5, qty: 0 }],
    kd: 12,
    sab: 7,
    aim: {
      ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      mod: [-23, -12, -9, -7, -6, -4, -2, -1, 0, 1, 2],
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
    optics: {
      restrictedTo: ['M73'],
      attached: 'M73',
    },
  },
});
