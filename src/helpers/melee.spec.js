import { parseFirearmsForMelee } from './melee';

jest.mock('../data/firearms', () => ({
  __esModule: true,
  firearms: {
    'pew pew pistol': {
      list: 'pistols',
      name: 'pew pew pistol',
      baseWeight: 1.2,
      mag: [{ weight: 0.5 }],
    },
    'other pistol': {
      list: 'pistols',
      name: 'other pistol',
      baseWeight: 1.1,
      mag: [{ weight: 0.5 }],
    },
    Owen: {
      list: 'smgs',
      name: 'Owen',
      baseWeight: 6.1,
      mag: [{ weight: 1.5 }],
    },
    'Sawed-Off Shotgun': {
      list: 'shotguns',
      name: 'Sawed-Off Shotgun',
      baseWeight: 6.1,
      mag: [{ weight: 1.5 }],
    },
    M4: {
      list: 'rifles',
      name: 'M4',
      baseWeight: 6.5,
      mag: [{ weight: 1 }],
    },
    SLR: {
      list: 'rifles',
      name: 'SLR',
      baseWeight: 11.2,
      mag: [{ weight: 0 }],
    },
    'Pump Action': {
      list: 'shotguns',
      name: 'Pump Action',
      baseWeight: 11.1,
      mag: [{ weight: 0 }],
    },
    'Auto Shotgun': {
      list: 'shotguns',
      name: 'Auto Shotgun',
      baseWeight: 11.2,
      mag: [{ weight: 0 }],
    },
    SVD: {
      list: 'sniperRifles',
      name: 'SVD',
      baseWeight: 11.2,
      mag: [{ weight: 0 }],
    },
    M60: {
      list: 'mgs',
      name: 'M60',
      baseWeight: 9.1,
      mag: [{ weight: 6.5 }],
    },
  },
}));

describe('parsing firearms to melee', () => {
  it('should return empty array if no firearms', () => {
    const firearms = [];
    const result = parseFirearmsForMelee(firearms);

    expect(result).toEqual([]);
  });

  it('should add "Pistol" for pistols', () => {
    const firearms = [{ name: 'pew pew pistol' }];
    const result = parseFirearmsForMelee(firearms);

    expect(result).toEqual(['Pistol']);
  });

  it('should only add one "Pistol" for multiple pistols', () => {
    const firearms = [{ name: 'pew pew pistol' }, { name: 'other pistol' }];
    const result = parseFirearmsForMelee(firearms);

    expect(result).toEqual(['Pistol']);
  });

  it('should add "SMG" for smgs', () => {
    const firearms = [{ name: 'Owen' }];
    const result = parseFirearmsForMelee(firearms);

    expect(result).toEqual(['SMG']);
  });

  it('should not add mgs', () => {
    const firearms = [{ name: 'M60' }];
    const result = parseFirearmsForMelee(firearms);

    expect(result).toEqual([]);
  });

  it('should add "Light Rifle" for rifles less than 11.2 lbs', () => {
    const firearms = [{ name: 'M4' }];
    const result = parseFirearmsForMelee(firearms);

    expect(result).toEqual(['Light Rifle']);
  });

  it('should add "Heavy Rifle" for rifles that are equal or greater than 11.2 lbs', () => {
    const firearms = [{ name: 'SLR' }];
    const result = parseFirearmsForMelee(firearms);

    expect(result).toEqual(['Heavy Rifle']);
  });

  it('should add shotguns as rifle melee weapons', () => {
    const firearms = [{ name: 'Auto Shotgun' }, { name: 'Pump Action' }];
    const result = parseFirearmsForMelee(firearms);

    expect(result).toEqual(['Heavy Rifle', 'Light Rifle']);
  });

  it('should add sniperRifles as rifle melee weapons', () => {
    const firearms = [{ name: 'SVD' }];
    const result = parseFirearmsForMelee(firearms);

    expect(result).toEqual(['Heavy Rifle']);
  });

  it('should add sawnoff shotgun as "SMG"', () => {
    const firearms = [{ name: 'Sawed-Off Shotgun' }];
    const result = parseFirearmsForMelee(firearms);

    expect(result).toEqual(['SMG']);
  });

  it('should handle multiple firearm types', () => {
    const firearms = [
      { name: 'pew pew pistol' },
      { name: 'Owen' },
      { name: 'SLR' },
      { name: 'M4' },
      { name: 'Auto Shotgun' },
      { name: 'Pump Action' },
      { name: 'Sawed-Off Shotgun' },
    ];

    const result = parseFirearmsForMelee(firearms);

    expect(result).toEqual(['Pistol', 'SMG', 'Heavy Rifle', 'Light Rifle']);
  });
});
