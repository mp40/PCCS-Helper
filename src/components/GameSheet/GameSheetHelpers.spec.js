import { prepareHandToHandWeaponList } from './index';

describe('preparing Hand To Hand weapon array', () => {
  it('should return an empty array if array is empty', () => {
    expect(prepareHandToHandWeaponList([])).toEqual([]);
  });
  it('should return melee equivalent of firearm in index 0 of firearms list', () => {
    expect(prepareHandToHandWeaponList([{ list: 'pistols' }, { list: 'smgs' }])).toEqual(['Pistol']);
    expect(prepareHandToHandWeaponList([{ list: 'smgs' }, { list: 'pistols' }])).toEqual(['SMG']);
  });
  it('should return light rifle if index 0 is a rifle under 11.2 lbs', () => {
    expect(prepareHandToHandWeaponList([{ list: 'rifles', weight: 11.1 }])).toEqual(['Light Rifle']);
  });
  it('should return heavy rifle if index 0 is a rifle 11.2 lbs or more', () => {
    expect(prepareHandToHandWeaponList([{ list: 'rifles', weight: 11.2 }])).toEqual(['Heavy Rifle']);
  });
  it('should return first legit weapon if non-legit melee firearms preceed', () => {
    const shortGunList = [{ list: 'mgs' }, { list: 'smgs' }];
    const longGunList = [{ list: 'mgs' }, { list: 'shotguns' }, { list: 'made up' }, { list: 'smgs' }, { list: 'pistols' }];
    expect(prepareHandToHandWeaponList(shortGunList)).toEqual(['SMG']);
    expect(prepareHandToHandWeaponList(longGunList)).toEqual(['SMG']);
  });
  it('should treat sniper rifles as rifles', () => {
    expect(prepareHandToHandWeaponList([{ list: 'sniperRifles', weight: 11.1 }])).toEqual(['Light Rifle']);
    expect(prepareHandToHandWeaponList([{ list: 'sniperRifles', weight: 11.2 }])).toEqual(['Heavy Rifle']);
  });
});
