import { rifles, pistols, smgs, mgs, shotguns, sniperRifles } from './firearms';

const allGuns = () => [...rifles(), ...pistols(), ...smgs(), ...mgs(), ...sniperRifles(), ...shotguns()];

const firearmObjectKeys = [
  'name',
  'list',
  'calibre',
  'qty',
  'length',
  'weight',
  'rt',
  'rof',
  'mag',
  'kd',
  'sab',
  'aim',
  'projectiles',
  'ba',
  'tof',
  'offical',
];

const checkAtLeastTwo = value => value >= 2;

describe('Check weapon data input', () => {
  it('should have the correct minimum keys', () => {
    const gunArray = allGuns();
    for (let i = 0; i < gunArray.length; i += 1) {
      expect(Object.keys(gunArray[i])).toEqual(expect.arrayContaining(firearmObjectKeys));
    }
  });
  it('should have a string of at least 2 characters', () => {
    const gunArray = allGuns();
    for (let i = 0; i < gunArray.length; i += 1) {
      expect(typeof gunArray[i].name).toBe('string');
      expect(checkAtLeastTwo(gunArray[i].name.length)).toBe(true);
    }
  });
  it('should have a value of rifles if in the rifle list/array', () => {
    const rifleArray = rifles();
    for (let i = 0; i < rifleArray.length; i += 1) {
      expect(rifleArray[i].list).toBe('rifles');
    }
  });
  it('should have a value of smgs if in the smgs list/array', () => {
    const smgArray = smgs();
    for (let i = 0; i < smgArray.length; i += 1) {
      expect(smgArray[i].list).toBe('smgs');
    }
  });
  it('should have a value of mgs if in the mgs list/array', () => {
    const mgArray = mgs();
    for (let i = 0; i < mgArray.length; i += 1) {
      expect(mgArray[i].list).toBe('mgs');
    }
  });
  it('should have a value of pistols if in the pistols list/array', () => {
    const pistolArray = pistols();
    for (let i = 0; i < pistolArray.length; i += 1) {
      expect(pistolArray[i].list).toBe('pistols');
    }
  });
  it('should have a value of shotguns if in the shotguns list/array', () => {
    const shotgunArray = shotguns();
    for (let i = 0; i < shotgunArray.length; i += 1) {
      expect(shotgunArray[i].list).toBe('shotguns');
    }
  });
  it('should have a value of sniperRifles if in the sniperRifles list/array', () => {
    const sniperArray = sniperRifles();
    for (let i = 0; i < sniperArray.length; i += 1) {
      expect(sniperArray[i].list).toBe('sniperRifles');
    }
  });
  it('should have a qty of 1', () => {
    const gunArray = allGuns();
    for (let i = 0; i < gunArray.length; i += 1) {
      expect(typeof gunArray[i].qty).toBe('number');
      expect(gunArray[i].qty).toBe(1);
    }
  });
  it('should have an array to store magazine data', () => {
    const gunArray = allGuns();
    for (let i = 0; i < gunArray.length; i += 1) {
      expect(Array.isArray(gunArray[i].mag)).toBe(true);
    }
  });
  it('should have an array to store projectile data', () => {
    const gunArray = allGuns();
    for (let i = 0; i < gunArray.length; i += 1) {
      expect(Array.isArray(gunArray[i].projectiles)).toBe(true);
    }
  });
  it('should have an the same length for range based data rows', () => {
    const gunArray = allGuns();
    for (let i = 0; i < gunArray.length; i += 1) {
      expect(gunArray[i].tof.length).toBe(gunArray[i].ba.length);
      if (gunArray[i].ma) {
        expect(gunArray[i].ma.length).toBe(gunArray[i].ba.length);
      }
      if (gunArray[i].trb) {
        expect(gunArray[i].trb.length).toBe(gunArray[i].ba.length);
      }
      expect(gunArray[i].projectiles[0].pen.length).toBe(gunArray[i].ba.length);
      expect(gunArray[i].projectiles[0].dc.length).toBe(gunArray[i].ba.length);
      if (gunArray[i].projectiles[1]) {
        expect(gunArray[i].projectiles[1].pen.length).toBe(gunArray[i].ba.length);
        expect(gunArray[i].projectiles[1].dc.length).toBe(gunArray[i].ba.length);
        if (gunArray[i].list === 'shotguns') {
          expect(gunArray[i].projectiles[1].salm.length).toBe(gunArray[i].ba.length);
          expect(gunArray[i].projectiles[1].bphc.length).toBe(gunArray[i].ba.length);
          expect(gunArray[i].projectiles[1].pr.length).toBe(gunArray[i].ba.length);
        }
      }
      if (gunArray[i].projectiles[2]) {
        expect(gunArray[i].projectiles[2].pen.length).toBe(gunArray[i].ba.length);
        expect(gunArray[i].projectiles[2].dc.length).toBe(gunArray[i].ba.length);
      }
    }
  });
  it('should have an the same length aim ac and mod', () => {
    const gunArray = allGuns();
    for (let i = 0; i < gunArray.length; i += 1) {
      expect(gunArray[i].aim.ac.length).toBe(gunArray[i].aim.mod.length);
    }
  });
});
