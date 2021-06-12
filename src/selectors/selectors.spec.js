import { selectTotalWeightOfFirearms } from './index';
import { MockState } from '../reducers/mockState';

import { correctFloatingPoint } from '../utils';

const m16Qty2 = {
  name: 'M16',
  qty: 2,
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 0 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }],
};

const m16WithSpareMags = {
  name: 'M16',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 3 }, { type: 'Mag', weight: 1, cap: 30, qty: 1 }],
};

const m16WithOptic = {
  name: 'M16',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 0 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }],
  attachedOptic: 'Low Power Scope',
};

const m16WithMods = {
  name: 'M16',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 0 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }],
  modNotes: [{ note: 'test1', weightMod: 1 }, { note: 'test2', weightMod: 1.5 }],
};

const m1911Qty2WithSpareAmmo = {
  name: 'M1911A1',
  qty: 2,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 4 }],
};

const m203WithAmmo = {
  attached: 'M203',
  mag: [{ qty: 1 }, { qty: 2 }],
};

const m16WithM203AndAmmo = {
  name: 'M16',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 0 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }],
  launcher: m203WithAmmo,
};
describe('Selectors', () => {
  describe('selecting weight of all firearms and ammo', () => {
    let state;

    beforeEach(() => {
      state = new MockState();
    });

    it('should calculate weight of firearm and spare ammo', () => {
      const firearms = [m16WithSpareMags];
      state.currentCharacter.firearms = firearms;

      const baseWeight = 8;
      const loadedAmmo = 0.7;
      const spareAmmo = 3.1;

      const result = selectTotalWeightOfFirearms(state);

      expect(result).toBe(correctFloatingPoint(baseWeight + loadedAmmo + spareAmmo));
    });

    it('should calculate weight of multiple firearm', () => {
      const firearms = [m16Qty2];
      state.currentCharacter.firearms = firearms;

      const baseWeight = 8;
      const loadedAmmo = 0.7;

      const result = selectTotalWeightOfFirearms(state);

      expect(result).toBe(correctFloatingPoint((baseWeight + loadedAmmo) * 2));
    });

    it('should calculate weight of firearm and optics', () => {
      const firearms = [m16WithOptic];
      state.currentCharacter.firearms = firearms;

      const baseWeight = 8;
      const loadedAmmo = 0.7;
      const opticWeight = 1.5;

      const result = selectTotalWeightOfFirearms(state);

      expect(result).toBe(correctFloatingPoint(baseWeight + loadedAmmo + opticWeight));
    });

    it('should calculate weight of firearm with modifications', () => {
      const firearms = [m16WithMods];
      state.currentCharacter.firearms = firearms;

      const baseWeight = 8;
      const loadedAmmo = 0.7;
      const modsWeight = 2.5;

      const result = selectTotalWeightOfFirearms(state);

      expect(result).toBe(correctFloatingPoint(baseWeight + loadedAmmo + modsWeight));
    });

    it('should calculate weight of firearm with grenade launcher', () => {
      const firearms = [m16WithM203AndAmmo];
      state.currentCharacter.firearms = firearms;

      const baseWeight = 8;
      const loadedAmmo = 0.7;
      const m203Weight = 3;
      const loadedGrenade = 0.51;
      const spareGrenades = 0.51 * 3;

      const result = selectTotalWeightOfFirearms(state);

      expect(result).toBe(correctFloatingPoint(baseWeight + loadedAmmo + m203Weight + loadedGrenade + spareGrenades));
    });

    it('should calculate combined weight of all firearms', () => {
      const firearms = [m16WithMods, m1911Qty2WithSpareAmmo];
      state.currentCharacter.firearms = firearms;

      const baseWeights = 8 + (2.3 * 2);
      const loadedAmmo = 0.7 + (0.7 * 2);
      const modsWeight = 2.5 + 0;
      const spareAmmo = 0 + 2.8;

      const result = selectTotalWeightOfFirearms(state);

      expect(result).toBe(correctFloatingPoint(baseWeights + loadedAmmo + modsWeight + spareAmmo));
    });
  });
});
