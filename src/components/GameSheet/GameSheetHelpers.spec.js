import { prepareHandToHandWeaponList } from './data';

describe('preparing Hand To Hand weapon array', () => {
  describe('adding firearm to melee list', () => {
    it('should return an empty array if array is empty', () => {
      expect(prepareHandToHandWeaponList([])).toStrictEqual([]);
    });
    it('should return an empty array if only gun is machine gun', () => {
      expect(prepareHandToHandWeaponList([{ list: 'mgs' }])).toStrictEqual([]);
    });
    it('should return melee equivalent of firearm in index 0 of firearms list', () => {
      expect(prepareHandToHandWeaponList([{ list: 'pistols' }, { list: 'smgs' }])).toStrictEqual(['Pistol']);
      expect(prepareHandToHandWeaponList([{ list: 'smgs' }, { list: 'pistols' }])).toStrictEqual(['SMG']);
    });
    it('should return light rifle if index 0 is a rifle under 11.2 lbs', () => {
      expect(prepareHandToHandWeaponList([{ list: 'rifles', weight: 11.1 }])).toStrictEqual(['Light Rifle']);
    });
    it('should return heavy rifle if index 0 is a rifle 11.2 lbs or more', () => {
      expect(prepareHandToHandWeaponList([{ list: 'rifles', weight: 11.2 }])).toStrictEqual(['Heavy Rifle']);
    });
    it('should treat sniper rifles as rifles', () => {
      expect(prepareHandToHandWeaponList([{ list: 'sniperRifles', weight: 11.1 }])).toStrictEqual(['Light Rifle']);
      expect(prepareHandToHandWeaponList([{ list: 'sniperRifles', weight: 11.2 }])).toStrictEqual(['Heavy Rifle']);
    });
    it('should treat shotguns as rifles', () => {
      expect(prepareHandToHandWeaponList([{ list: 'shotguns', weight: 11.1 }])).toStrictEqual(['Light Rifle']);
      expect(prepareHandToHandWeaponList([{ list: 'shotguns', weight: 11.2 }])).toStrictEqual(['Heavy Rifle']);
    });
    it('should treat sawn off shotgun as SMG', () => {
      expect(prepareHandToHandWeaponList([{ name: 'Sawed-Off Shotgun', list: 'shotguns' }])).toStrictEqual(['SMG']);
    });
    it('should return first legit weapon if non-legit melee firearms preceed', () => {
      const shortGunList = [{ list: 'mgs' }, { list: 'smgs' }];
      const longGunList = [{ list: 'mgs' }, { list: 'made up' }, { list: 'smgs' }, { list: 'pistols' }];
      expect(prepareHandToHandWeaponList(shortGunList)).toStrictEqual(['SMG']);
      expect(prepareHandToHandWeaponList(longGunList)).toStrictEqual(['SMG']);
    });
  });
  describe('add equipment with melee tag', () => {
    const billyClub = { name: 'Billy Club', tags: ['Melee'], melee: ['Billy Club'] };
    const screwDriver = { name: 'Screw Driver', tags: ['Tools', 'Melee'], melee: ['Screw Driver'] };
    const entrenchingTool = { name: 'Entrenching Tool', tags: ['Melee', 'Tools'], melee: ['Entrenching Tool (1 hand)', 'Entrenching Tool (2 hands)'] };
    const bayonet = { name: 'Bayonet', tags: ['Melee'], melee: ['Knife, Combat'] };
    const basicPouch = { name: 'Basic Pouch', tags: ['not melee'] };
    const randomGear = { name: 'Random', tags: ['not melee at all'] };
    it('should add melee equipment from equipment list', () => {
      expect(prepareHandToHandWeaponList([], [billyClub])).toStrictEqual(['Billy Club']);
    });
    it('should add melee equipment with multiple tags', () => {
      expect(prepareHandToHandWeaponList([], [screwDriver])).toStrictEqual(['Screw Driver']);
    });
    it('should not add non melee equipment', () => {
      expect(prepareHandToHandWeaponList([], [basicPouch, billyClub])).toStrictEqual(['Billy Club']);
    });
    it('should add two entries if the weapon is one and two handed', () => {
      expect(prepareHandToHandWeaponList([], [entrenchingTool])).toStrictEqual(['Entrenching Tool (1 hand)', 'Entrenching Tool (2 hands)']);
    });
    it('should match non-standard names to correct melee name', () => {
      expect(prepareHandToHandWeaponList([], [bayonet])).toStrictEqual(['Knife, Combat']);
    });
    it('should handle long lists of mixed gear', () => {
      expect(prepareHandToHandWeaponList([],
        [
          randomGear,
          basicPouch,
          bayonet,
          randomGear,
          billyClub,
          basicPouch,
          basicPouch,
          randomGear,
          screwDriver,
          randomGear,
        ],
      )).toStrictEqual(['Knife, Combat', 'Billy Club', 'Screw Driver']);
    });
  });
  describe('list to pass to component', () => {
    const pistol = { list: 'pistols' };
    const smg = { list: 'smgs' };
    const shotgun = { list: 'shotguns' };
    const billyClub = { name: 'Billy Club', tags: ['Melee'], melee: ['Billy Club'] };
    const screwDriver = { name: 'Screw Driver', tags: ['Tools', 'Melee'], melee: ['Screw Driver'] };
    const entrenchingTool = { name: 'Entrenching Tool', tags: ['Melee', 'Tools'], melee: ['Entrenching Tool (1 hand)', 'Entrenching Tool (2 hands)'] };
    const bayonet = { name: 'Bayonet', tags: ['Melee'], melee: ['Knife, Combat'] };
    const basicPouch = { name: 'Basic Pouch', tags: ['not melee'] };
    it('should have firearm first', () => {
      expect(prepareHandToHandWeaponList([smg], [billyClub])).toStrictEqual(['SMG', 'Billy Club']);
    });
    it('should have a max length of four', () => {
      const result = prepareHandToHandWeaponList(
        [smg, shotgun, pistol], [basicPouch, bayonet, billyClub, entrenchingTool, screwDriver],
      );
      expect(result.length).toBe(4);
      expect(result).toStrictEqual(['SMG', 'Knife, Combat', 'Billy Club', 'Entrenching Tool (1 hand)']);
    });
  });
});
