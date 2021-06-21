import {
  selectTotalWeightOfFirearms,
  selectTotalWeightOfGrenades,
  selectTotalWeightOfLaunchers,
  selectTotalWeightOfEquipment,
  selectTotalWeightOfClothingAndBodyArmour,
  selectTotalWeightOfAllGearAndWeapons,
  selectCombatStats,
  selectKnockoutValue,
} from './index';

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

const basicPouch = {
  name: 'Basic Pouch',
  qty: 2,
  weight: 0.4,
};

const belt = {
  name: 'Belt',
  qty: 1,
  weight: 0.7,
};

describe('Selectors', () => {
  describe('selecting weight of all firearms and ammo', () => {
    let state;

    beforeEach(() => {
      state = new MockState();
    });

    it('should return 0 for empty firearm array', () => {
      const firearms = [];
      state.currentCharacter.firearms = firearms;

      const result = selectTotalWeightOfFirearms(state);

      expect(result).toBe(0);
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

  describe('selecting weight of all grenades', () => {
    let state;

    beforeEach(() => {
      state = new MockState();
    });

    it('should return 0 for empty grenade array', () => {
      const grenades = [];
      state.currentCharacter.grenades = grenades;

      const result = selectTotalWeightOfGrenades(state);

      expect(result).toBe(0);
    });

    it('should calculate weight of grenade by quanity', () => {
      const grenades = [{ name: 'L2 A2', qty: 2 }];
      state.currentCharacter.grenades = grenades;

      const l2Weight = 0.9;

      const result = selectTotalWeightOfGrenades(state);

      expect(result).toBe(correctFloatingPoint(l2Weight * 2));
    });

    it('should calculate weight of multiple grenades', () => {
      const grenades = [{ name: 'L2 A2', qty: 2 }, { name: 'M2', qty: 3 }];
      state.currentCharacter.grenades = grenades;

      const l2Weight = 0.9 * 2;
      const m2Weight = 1.3 * 3;

      const result = selectTotalWeightOfGrenades(state);

      expect(result).toBe(correctFloatingPoint(l2Weight + m2Weight));
    });
  });

  describe('selecting weight of all launchers', () => {
    let state;

    beforeEach(() => {
      state = new MockState();
    });

    const m79 = {
      name: 'M79',
      qty: 1,
      mag: [{ type: 'Rnd', class: 'HEAT', weight: 0.51, cap: 1, qty: 2 }, { type: 'Rnd', class: 'HE', weight: 0.51, cap: 1, qty: 4 }],
    };

    const m72 = {
      name: 'M72 A2 LAW',
      qty: 2,
      mag: [{ type: '', weight: '-', cap: 1 }],
    };

    it('should return 0 for empty launcher array', () => {
      const launchers = [];
      state.currentCharacter.launchers = launchers;

      const result = selectTotalWeightOfLaunchers(state);

      expect(result).toBe(0);
    });

    it('should calculate weight of launcher by quanity', () => {
      const launchers = [m72];
      state.currentCharacter.launchers = launchers;

      const m72Weight = 5.2;

      const result = selectTotalWeightOfLaunchers(state);

      expect(result).toBe(correctFloatingPoint(m72Weight * 2));
    });

    it('should calculate weight of launcher ammo', () => {
      const launchers = [m79];
      state.currentCharacter.launchers = launchers;

      const m79Weight = 6.5;
      const ammoWeight = 0.51 * 6;

      const result = selectTotalWeightOfLaunchers(state);

      expect(result).toBe(correctFloatingPoint(m79Weight + ammoWeight));
    });

    it('should calculate multiple launchers', () => {
      const launchers = [m72, m79];
      state.currentCharacter.launchers = launchers;

      const m72Weight = 5.2 * 2;
      const m79Weight = 6.5;
      const ammoWeight = 0.51 * 6;

      const result = selectTotalWeightOfLaunchers(state);

      expect(result).toBe(correctFloatingPoint(m72Weight + m79Weight + ammoWeight));
    });
  });

  describe('selecting weight of equipment', () => {
    let state;

    beforeEach(() => {
      state = new MockState();
    });

    it('should return 0 for empty equipment array', () => {
      const equipment = [];
      state.currentCharacter.equipment = equipment;

      const result = selectTotalWeightOfEquipment(state);

      expect(result).toBe(0);
    });

    it('should calculate weight of equipment by quantity', () => {
      const equipment = [basicPouch];
      state.currentCharacter.equipment = equipment;

      const result = selectTotalWeightOfEquipment(state);

      expect(result).toBe(0.8);
    });

    it('should calculate weight of multiple equipment', () => {
      const equipment = [basicPouch, belt];
      state.currentCharacter.equipment = equipment;

      const result = selectTotalWeightOfEquipment(state);

      expect(result).toBe(0.8 + 0.7);
    });
  });

  describe('selecting weight of clothing and body armour', () => {
    let state;

    beforeEach(() => {
      state = new MockState();
    });

    it('should calculate weight of default clothing when no body armour worn', () => {
      const result = selectTotalWeightOfClothingAndBodyArmour(state);

      expect(result).toBe(5);
    });

    it('should calculate weight of winter clothing when no body armour worn', () => {
      state.currentCharacter.uniform = 'Winter';

      const result = selectTotalWeightOfClothingAndBodyArmour(state);

      expect(result).toBe(7);
    });

    it('should calculate weight of tropical clothing when no body armour worn', () => {
      state.currentCharacter.uniform = 'Tropical';

      const result = selectTotalWeightOfClothingAndBodyArmour(state);

      expect(result).toBe(4.5);
    });

    it('should calculate weight of default clothing and helmet', () => {
      state.currentCharacter.helmet = 'M1';

      const result = selectTotalWeightOfClothingAndBodyArmour(state);

      expect(result).toBe(5 + 2.5);
    });

    it('should calculate weight of default clothing and vest', () => {
      state.currentCharacter.vest = 'M69';

      const result = selectTotalWeightOfClothingAndBodyArmour(state);

      expect(result).toBe(5 + 8.5);
    });

    it('should calculate weight of winter clothing helemt and vest', () => {
      state.currentCharacter.uniform = 'Winter';
      state.currentCharacter.helmet = 'M1';
      state.currentCharacter.vest = 'M69';

      const result = selectTotalWeightOfClothingAndBodyArmour(state);

      expect(result).toBe(7 + 2.5 + 8.5);
    });
  });

  describe('selecting total weight of all equipment, weapons, clothing and armour', () => {
    let state;

    beforeEach(() => {
      state = new MockState();
    });

    it('should calculate total weight', () => {
      const firearms = [m16WithMods, m1911Qty2WithSpareAmmo];
      const equipment = [basicPouch, belt];
      const grenades = [{ name: 'L2 A2', qty: 2 }, { name: 'M2', qty: 3 }];
      const launchers = [{
        name: 'M72 A2 LAW',
        qty: 2,
        mag: [{ type: '', weight: '-', cap: 1 }],
      }];

      state.currentCharacter.launchers = launchers;
      state.currentCharacter.grenades = grenades;
      state.currentCharacter.equipment = equipment;
      state.currentCharacter.firearms = firearms;
      state.currentCharacter.uniform = 'Winter';
      state.currentCharacter.helmet = 'M1';
      state.currentCharacter.vest = 'M69';

      const baseGunWeights = 8 + (2.3 * 2);
      const loadedGunAmmo = 0.7 + (0.7 * 2);
      const modsWeight = 2.5 + 0;
      const spareGunAmmo = 0 + 2.8;

      const uniformAndArmourWeight = 7 + 2.5 + 8.5;
      const equipmentWeight = 0.8 + 0.7;
      const greandeWeight = (0.9 * 2) + (1.3 * 3);
      const launcherWeight = 5.2 * 2;

      const firearmWeight = baseGunWeights + loadedGunAmmo + modsWeight + spareGunAmmo;

      const result = selectTotalWeightOfAllGearAndWeapons(state);

      expect(result).toBe(uniformAndArmourWeight + equipmentWeight + firearmWeight + greandeWeight + launcherWeight);
    });
  });

  describe('selecting combat stats', () => {
    let state;

    beforeEach(() => {
      state = new MockState();
    });

    it('should calculate combat stats from default values', () => {
      const expected = {
        baseSpeed: 3,
        maxSpeed: 6,
        gunCombatActions: 3,
        handCombatActions: 3,
        damageBonus: 1,
      };

      expect(selectCombatStats(state)).toEqual(expected);
    });

    it('should use gun combat level if it is greater than hand level when selecting knockout value', () => {
      state.currentCharacter.gunLevel = 10;
      const expected = 50;

      expect(selectKnockoutValue(state)).toBe(expected);
    });

    it('should use hand combat if it is greater than gun level level when selecting knockout value', () => {
      state.currentCharacter.handLevel = 5;
      const expected = 25;

      expect(selectKnockoutValue(state)).toBe(expected);
    });
  });
});
