import {
  findFirearmByName,
  testM1911A1,
  testM1911A1WithMods,
  testRemington,
  testM16,
  testM16WithoutJhpAp,
  testFAMAS,
} from './testHelpers';
import { pistols } from '../data/firearms';

describe('test firearms', () => {
  it('should be taken directly from firearm list', () => {
    expect(findFirearmByName(pistols(), 'M1911A1')).toMatchObject({ name: 'M1911A1' });
  });
  it('should find nad return the M1911A1', () => {
    expect(testM1911A1()).toMatchObject({ name: 'M1911A1', weight: 3 });
  });
  it('should have a parameter to increase M1911A1 qty', () => {
    expect(testM1911A1(2)).toMatchObject({ name: 'M1911A1', qty: 2 });
  });
  it('should find, modify and return the M1911A1', () => {
    expect(testM1911A1WithMods()).toMatchObject({ name: 'M1911A1', modNotes: [{ note: 'test', weightMod: 1 }] });
  });
  it('should find and return the Remington shotgun', () => {
    expect(testRemington()).toMatchObject({ name: 'Remington M870', weight: 8.8 });
  });
  it('should find and return the M16', () => {
    expect(testM16()).toMatchObject({ name: 'M16', weight: 8.7 });
  });
  it('should find and return the M16 with only FMJ projectiles', () => {
    expect(testM16WithoutJhpAp().projectiles.length).toBe(1);
    expect(testM16WithoutJhpAp().projectiles[0].type).toBe('FMJ');
  });
  it('should find and return the FAMAS', () => {
    expect(testFAMAS()).toMatchObject({ name: 'FAMAS', weight: 9 });
  });
});
