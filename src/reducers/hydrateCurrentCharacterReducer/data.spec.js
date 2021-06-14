import {
  hydrateFirearm,
  hydrateFirearmList,
  hydrateLauncher,
  hydrateLauncherList,
  hydrateGrenade,
  hydrateGrenadeList,
} from './data';

// import {
//   testM1911A1,
//   testM79,
//   testM72,
// } from '../../helpers/testHelpers';

const m2Grenade = {
  name: 'M2',
  qty: 1,
  length: 4.5,
  weight: 1.3,
  at: 3,
  fl: 2,
  r: 13,
  data: {
    pen: ['PEN', 2.3, 1, 1, 1, 1, '', ''],
    dc: ['DC', 10, 2, 2, 2, 2, '', ''],
    bshc: ['BSHC', '*2', 2, -1, -6, -9, '', ''],
    bc: ['BC', '43H', 335, 95, 30, 15, 7, 4],
  },
  heading: 'standard',
};

const flashBang = {
  name: 'Flash Bang',
  qty: 1,
  length: 5,
  weight: 0.6,
  at: 3,
  fl: 1,
  r: 20,
  data: {},
  heading: 'seeRuleBook',
};

// mptodo
describe.skip('hydrating weapons and body armour', () => {
  describe('hydrating weapons', () => {
    it('should hydrate firearm', () => {
      const firearm = {
        name: 'M1911A1',
        qty: 1,
        mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }],
      };

      expect(hydrateFirearm(firearm)).toStrictEqual(testM1911A1());
    });

    it('should have correct number of magazines', () => {
      const firearm = {
        name: 'M1911A1',
        qty: 1,
        mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 5 }],
      };

      const hydratedFirearm = hydrateFirearm(firearm);

      expect(hydratedFirearm.mag).toStrictEqual(firearm.mag);
    });

    it('should update firearm weight when primary magazine has changed', () => {
      const firearm = {
        name: 'M16',
        qty: 1,
        mag: [{ type: 'Mag', weight: 1, cap: 30, qty: 0 }, { type: 'Mag', weight: 0.7, cap: 20, qty: 0 }],
      };

      const originalWeight = 8.7;
      const expectedWeight = originalWeight - 0.7 + 1;

      const hydratedFirearm = hydrateFirearm(firearm);

      expect(hydratedFirearm.weight).toStrictEqual(expectedWeight);
    });

    it('should add firearm modifications', () => {
      const firearm = {
        name: 'M1911A1',
        qty: 1,
        mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }],
        modNotes: [{ note: 'torch', weightMod: 0.25 }, { note: 'muzzle device', weightMod: 0.31 }, { note: 'light furniture', weightMod: -0.29 }],
      };

      const hydratedFirearm = hydrateFirearm(firearm);

      expect(hydratedFirearm.modNotes).toStrictEqual(firearm.modNotes);
    });

    it('should adjust firearm weight from modifications', () => {
      const firearm = {
        name: 'M1911A1',
        qty: 1,
        mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }],
        modNotes: [{ note: 'torch', weightMod: 0.29 }, { note: 'muzzle device', weightMod: 0.31 }, { note: 'light furniture', weightMod: -0.25 }],
      };

      const hydratedFirearm = hydrateFirearm(firearm);

      const originalWeight = 3;
      const expectedWeight = originalWeight + 0.29 + 0.31 - 0.25;

      expect(hydratedFirearm.weight).toStrictEqual(expectedWeight);
    });

    it('should update firearm quantity', () => {
      const firearm = {
        name: 'M1911A1',
        qty: 2,
        mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 5 }],
      };

      const hydratedFirearm = hydrateFirearm(firearm);

      expect(hydratedFirearm.qty).toBe(firearm.qty);
    });

    it('should hydrate a list of firearms', () => {
      const firearms = [
        {
          name: 'M1911A1',
          qty: 1,
          mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 2 }],
          modNotes: [{ note: 'torch', weightMod: 0.29 }, { note: 'muzzle device', weightMod: 0.31 }, { note: 'light furniture', weightMod: -0.25 }],
        },
        {
          name: 'M16',
          qty: 1,
          mag: [{ type: 'Mag', weight: 1, cap: 30, qty: 2 }, { type: 'Mag', weight: 0.7, cap: 20, qty: 1 }],
          modNotes: [{ note: 'torch', weightMod: 0.5 }],
        },
        {
          name: 'Remington M870',
          qty: 2,
          mag: [{ type: 'Rnd', weight: 0.13, cap: 7, qty: 16 }],
        },
      ];

      const hydratedFirearms = hydrateFirearmList(firearms);
      const hydratedM1911 = hydratedFirearms[0];
      const hydratedM16 = hydratedFirearms[1];
      const hydratedRemington = hydratedFirearms[2];

      expect(hydratedFirearms.length).toBe(firearms.length);

      expect(hydratedM1911.weight).toBe(3.35);
      expect(hydratedM1911.qty).toBe(1);
      expect(hydratedM1911.mag).toStrictEqual(firearms[0].mag);
      expect(hydratedM1911.modNotes).toStrictEqual(firearms[0].modNotes);

      expect(hydratedM16.weight).toBe(9.5);
      expect(hydratedM16.qty).toBe(1);
      expect(hydratedM16.mag).toStrictEqual(firearms[1].mag);
      expect(hydratedM16.modNotes).toStrictEqual(firearms[1].modNotes);

      expect(hydratedRemington.weight).toBe(8.8);
      expect(hydratedRemington.qty).toBe(2);
      expect(hydratedRemington.mag).toStrictEqual(firearms[2].mag);
      expect(hydratedRemington.modNotes).toStrictEqual(firearms[2].modNotes);
    });

    it('should return empty array if no firearms to hydrate in list', () => {
      const hydratedFirearms = hydrateFirearmList([]);
      expect(hydratedFirearms).toStrictEqual([]);
    });
  });

  describe('hydrating launchers', () => {
    it('should hydrate launcher', () => {
      const launcher = {
        name: 'M79',
        qty: 1,
        mag: [{ type: 'Rnd', class: 'HEAT', weight: 0.51, cap: 1, qty: 0 }, { type: 'Rnd', class: 'HE', weight: 0.51, cap: 1, qty: 0 }],
      };

      const hydratedLauncher = hydrateLauncher(launcher);

      expect(hydratedLauncher).toStrictEqual(testM79());
    });

    it('should hydrate launcher ammo', () => {
      const launcher = {
        name: 'M79',
        qty: 1,
        mag: [{ type: 'Rnd', class: 'HEAT', weight: 0.51, cap: 1, qty: 4 }, { type: 'Rnd', class: 'HE', weight: 0.51, cap: 1, qty: 0 }],
      };

      const hydratedLauncher = hydrateLauncher(launcher);

      expect(hydratedLauncher).toStrictEqual(testM79(4));
    });

    it('should hydrate launcher qty', () => {
      const launcher = {
        name: 'M72 A2 LAW',
        qty: 4,
        mag: [{ type: '', weight: '-', cap: 1 }],
      };

      const hydratedLauncher = hydrateLauncher(launcher);

      expect(hydratedLauncher).toStrictEqual(testM72(4));
    });

    it('should hydrate a list of launchers', () => {
      const launchers = [
        {
          name: 'M79',
          qty: 1,
          mag: [{ type: 'Rnd', class: 'HEAT', weight: 0.51, cap: 1, qty: 4 }, { type: 'Rnd', class: 'HE', weight: 0.51, cap: 1, qty: 0 }],
        },
        {
          name: 'M72 A2 LAW',
          qty: 4,
          mag: [{ type: '', weight: '-', cap: 1 }],
        },
      ];

      const hydratedLaunchers = hydrateLauncherList(launchers);

      expect(hydratedLaunchers.length).toBe(2);
      expect(hydratedLaunchers[0]).toStrictEqual(testM79(4));
      expect(hydratedLaunchers[1]).toStrictEqual(testM72(4));
    });

    it('should return empty array if no launchers to hydrate in list', () => {
      const hydratedLaunchers = hydrateLauncherList([]);
      expect(hydratedLaunchers).toStrictEqual([]);
    });
  });

  describe('hydrating grenades', () => {
    it('should hydrate grenade', () => {
      const grenade = {
        name: 'M2',
        qty: 1,
      };

      const hydratedGrenade = hydrateGrenade(grenade);

      expect(hydratedGrenade).toStrictEqual(m2Grenade);
    });

    it('should hydrate special grenade', () => {
      const grenade = {
        name: 'Flash Bang',
        qty: 1,
      };

      const hydratedGrenade = hydrateGrenade(grenade);

      expect(hydratedGrenade).toStrictEqual(flashBang);
    });

    it('should hydrate grenade quantity', () => {
      const grenade = {
        name: 'M2',
        qty: 4,
      };

      const hydratedGrenade = hydrateGrenade(grenade);

      expect(hydratedGrenade.qty).toBe(4);
    });

    it('should hydrate grenade list', () => {
      const grenades = [
        {
          name: 'M2',
          qty: 4,
        },
        {
          name: 'Flash Bang',
          qty: 2,
        },
      ];
      const hydratedGrenades = hydrateGrenadeList(grenades);

      expect(hydratedGrenades.length).toBe(2);
      expect(hydratedGrenades[0].qty).toBe(4);
      expect(hydratedGrenades[1].qty).toBe(2);
    });

    it('should return empty array if no grenades to hydrate in list', () => {
      const hydratedGrenades = hydrateGrenadeList([]);
      expect(hydratedGrenades).toStrictEqual([]);
    });
  });
});
