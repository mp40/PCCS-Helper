import { getFullFirearmSystemWeightByName, getFullFirearmSystemWeightByObject } from '.';

describe('Firearm data helpers', () => {
  describe('calculating weight of firearm weapon system by name', () => {
    it('should calculate weight of fully loaded firearm', () => {
      const firearm = 'M16';

      expect(getFullFirearmSystemWeightByName(firearm)).toBe(8.7);
    });

    it('should calculate weight of fully loaded firearm that uses single rounds', () => {
      const firearm = 'Remington M870';

      expect(getFullFirearmSystemWeightByName(firearm)).toBe(8.8);
    });

    it('should calculate weight of fully loaded firearm with optic', () => {
      const firearm = 'M40A1';

      expect(getFullFirearmSystemWeightByName(firearm)).toBe(14.8);
    });
  });

  describe('calculating weight of firearm weapon system by object', () => {
    it('should calculate weight of fully loaded weapon', () => {
      const firearm = {
        name: 'M16',
        qty: 1,
        mag: [{ type: 'Mag', weight: 1, cap: 30, qty: 0 }, { type: 'Mag', weight: 0.7, cap: 20, qty: 0 }],
      };

      expect(getFullFirearmSystemWeightByObject(firearm)).toBe(9);
    });

    it('should calculate weight of fully loaded firearm that uses single rounds', () => {
      const firearm = {
        name: 'Remington M870',
        qty: 1,
        mag: [{ type: 'Rnd', weight: 0.13, cap: 7, qty: 0 }],
      };

      expect(getFullFirearmSystemWeightByObject(firearm)).toBe(8.8);
    });

    it('should calculate weight of fully loaded weapon and modifications', () => {
      const firearm = {
        name: 'M16',
        qty: 1,
        mag: [{ type: 'Mag', weight: 1, cap: 30, qty: 0 }, { type: 'Mag', weight: 0.7, cap: 20, qty: 0 }],
        modNotes: [{ weightMod: 0.5 }, { weightMod: 1 }],
      };

      expect(getFullFirearmSystemWeightByObject(firearm)).toBe(10.5);
    });

    it('should calculate weight of fully loaded weapon and scope', () => {
      const firearm = {
        name: 'Dragunov SVD',
        qty: 1,
        mag: [{ type: 'Mag', weight: 0.68, cap: 10, qty: 0 }],
        modNotes: [],
        optics: { attached: 'PSO - 1' },
      };

      expect(getFullFirearmSystemWeightByObject(firearm)).toBe(10.2);
    });

    it('should calculate weight of fully loaded weapon with attachedOptic key value', () => {
      const firearm = {
        name: 'Dragunov SVD',
        qty: 1,
        mag: [{ type: 'Mag', weight: 0.68, cap: 10, qty: 0 }],
        attachedOptic: 'PSO - 1',
      };

      expect(getFullFirearmSystemWeightByObject(firearm)).toBe(10.2);
    });

    it('should calculate weight of fully loaded weapon and launcher', () => {
      const m203 = {
        attached: 'M203',
        mag: [{ qty: 0 }, { qty: 0 }],
      };

      const firearm = {
        name: 'M16',
        qty: 1,
        mag: [{ type: 'Mag', weight: 1, cap: 30, qty: 0 }, { type: 'Mag', weight: 0.7, cap: 20, qty: 0 }],
        launcher: m203,
      };

      expect(getFullFirearmSystemWeightByObject(firearm)).toBe(12.51);
    });
  });
});
