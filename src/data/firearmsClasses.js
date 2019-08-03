export class M1CarbineClass {
  constructor() {
    this.name = 'M1 Carbine';
    this.list = 'rifles';
    this.calibre = '.30 Carbine';
    this.qty = 1;
    this.length = 36;
    this.weight = 5.9;
    this.rt = 8;
    this.rof = '*';
    this.mag = [{ type: 'Mag', weight: 0.77, cap: 15, qty: 0 }, { type: 'Mag', weight: 1.5, cap: 30, qty: 0 }];
    this.kd = 5;
    this.sab = 4;
    this.aim = {
      ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      mod: [-21, -11, -9, -7, -6, -4, -3, -2, -2, -1, 0],
    };
    this.projectiles = [
      {
        type: 'FMJ',
        pen: [6.8, 6.4, 5.8, 4.9, 4.2, 2.4, 1.4, 0.8],
        dc: [6, 6, 5, 5, 4, 2, 1, 1],
      },
    ];
    this.ma = null;
    this.ba = [55, 46, 37, 29, 24, 14, 8, 5];
    this.tof = [0, 1, 1, 2, 3, 8, 13, 18];
    this.offical = true;
  }
}

export const getM2Carbine = () => {
  const carbine = new M1CarbineClass();
  carbine.name = 'M2 Carbine';
  carbine.weight = 6.3;
  carbine.rof = '*8';
  carbine.mag = [{ type: 'Mag', weight: 1.5, cap: 30, qty: 0 }, { type: 'Mag', weight: 0.77, cap: 15, qty: 0 }];
  carbine.ma = [0.6, 1, 2, 4, 6, 12, 17, 23];
  return carbine;
};

export class M16Class {
  constructor(name) {
    this.name = name;
    this.list = 'rifles';
    this.calibre = '5.56mm NATO';
    this.qty = 1;
    this.length = 39;
    this.weight = 8.7;
    this.rt = 8;
    this.rof = '*7';
    this.mag = [{ type: 'Mag', weight: 0.7, cap: 20, qty: 0 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }];
    this.kd = 4;
    this.sab = 3;
    this.aim = {
      ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      mod: [-22, -12, -9, -7, -6, -5, -4, -3, -2, -1, 0],
    };
    this.projectiles = [
      {
        type: 'FMJ',
        pen: [17, 16, 15, 13, 11, 7.1, 4.5, 2.9],
        dc: [6, 6, 6, 6, 5, 4, 3, 2],
      },
      {
        type: 'JHP',
        pen: [16, 15, 14, 12, 11, 6.8, 4.4, 2.8],
        dc: [8, 8, 8, 7, 7, 6, 5, 3],
      },
      {
        type: 'AP',
        pen: [23, 22, 20, 18, 16, 10, 6.4, 4.1],
        dc: [6, 6, 6, 6, 5, 4, 3, 2],
      },
    ];
    this.trb = null;
    this.ma = [0.4, 0.8, 2, 3, 4, 8, 11, 15];
    this.ba = [60, 51, 42, 35, 30, 20, 15, 11];
    this.tof = [0, 0, 1, 1, 2, 4, 7, 10];
    this.offical = true;
  }
}

export const getM16A1 = () => {
  const rifle = new M16Class('M16A1');
  rifle.weight = 8;
  rifle.mag = [{ type: 'Mag', weight: 1, cap: 30, qty: 0 }, { type: 'Mag', weight: 0.7, cap: 20, qty: 0 }];
  return rifle;
};

export class KalashnikovClass {
  constructor(name, length, weight) {
    this.name = name;
    this.list = 'rifles';
    this.calibre = '7.62 x 39mm';
    this.qty = 1;
    this.length = length;
    this.weight = weight;
    this.rt = 8;
    this.rof = '*5';
    this.mag = [{ type: 'Mag', weight: 1.8, cap: 30, qty: 0 }];
    this.kd = 7;
    this.sab = 5;
    this.aim = {
      ac: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      mod: [-23, -12, -9, -7, -6, -4, -3, -2, -1],
    };
    this.projectiles = [
      {
        type: 'FMJ',
        pen: [11, 11, 9.8, 8.6, 7.5, 4.8, 3.1, 2.0],
        dc: [7, 7, 6, 6, 6, 5, 3, 2],
      },
    ];
    this.ma = [0.4, 0.8, 2, 3, 4, 8, 12, 17];
    this.ba = [58, 50, 40, 33, 28, 18, 13, 9];
    this.tof = [0, 1, 1, 2, 3, 6, 10, 14];
    this.offical = true;
  }
}
