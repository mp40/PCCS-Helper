import { getBaseSpeed, getCombatActions, getMaxSpeed, getDamageBonus } from './index';

describe('Core Stat Calculations', () => {
  describe('Calculating Base Speed', () => {
    it('should return 4.5 for str 21 and lbs 10', () => {
      const str = 21;
      const lbs = 10;

      expect(getBaseSpeed(str, lbs)).toBe(4.5);
    });

    it('should return 1.5 for str 1 and lbs 10', () => {
      const str = 1;
      const lbs = 10;

      expect(getBaseSpeed(str, lbs)).toBe(1.5);
    });

    it('should return 2 for str 21 and lbs 200', () => {
      const str = 21;
      const lbs = 200;

      expect(getBaseSpeed(str, lbs)).toBe(2);
    });

    it('should return 0 for str 1 and lbs 200', () => {
      const str = 1;
      const lbs = 200;

      expect(getBaseSpeed(str, lbs)).toBe(0);
    });

    it('should round up 15.1 lbs to 20 and return 2 when str is 10', () => {
      const str = 10;
      const lbs = 15.1;

      expect(getBaseSpeed(str, lbs)).toBe(2);
    });

    it('should round up 100.1 lbs to 125 and return 0 when str is 12', () => {
      const str = 12;
      const lbs = 100.1;

      expect(getBaseSpeed(str, lbs)).toBe(0);
    });
  });
  describe('Calculating Max Speed', () => {
    it('should return 0 if base speed is 0', () => {
      const agi = 10;
      const baseSpeed = 0;

      expect(getMaxSpeed(agi, baseSpeed)).toBe(0);
    });

    it('should return 2 if agi is 21 and base speed is 1', () => {
      const agi = 21;
      const baseSpeed = 1;

      expect(getMaxSpeed(agi, baseSpeed)).toBe(2);
    });

    it('should return 5 if agi is 10 and base speed is 2.5', () => {
      const agi = 10;
      const baseSpeed = 2.5;

      expect(getMaxSpeed(agi, baseSpeed)).toBe(5);
    });

    it('should return 5 if agi is 1 and base speed is 4.5', () => {
      const agi = 1;
      const baseSpeed = 4.5;

      expect(getMaxSpeed(agi, baseSpeed)).toBe(3);
    });
  });

  describe('Calculating Action Points', () => {
    it('should return 0 actions if max speed is 0', () => {
      const maxSpeed = 0;
      const skillFactor = 7;

      expect(getCombatActions(maxSpeed, skillFactor)).toBe(0);
    });

    it('should return 1 for max speed 1 and skill factor 7', () => {
      const maxSpeed = 1;
      const skillFactor = 7;

      expect(getCombatActions(maxSpeed, skillFactor)).toBe(1);
    });

    it('should return 24 for max speed 13 and skill factor 39', () => {
      const maxSpeed = 13;
      const skillFactor = 39;

      expect(getCombatActions(maxSpeed, skillFactor)).toBe(24);
    });

    it('should return 8 for max speed 7 and skill factor 21', () => {
      const maxSpeed = 7;
      const skillFactor = 21;

      expect(getCombatActions(maxSpeed, skillFactor)).toBe(8);
    });

    it('should round down skill factor 10 to 9 and return 3 for max speed 6', () => {
      const maxSpeed = 6;
      const skillFactor = 10;

      expect(getCombatActions(maxSpeed, skillFactor)).toBe(3);
    });

    it('should round down skill factor 14 to 13 and return 3 for max speed 2', () => {
      const maxSpeed = 3;
      const skillFactor = 14;

      expect(getCombatActions(maxSpeed, skillFactor)).toBe(2);
    });
  });

  describe('Calculating Damage Bonus', () => {
    it('should return 0.5 for max speed 0 and skill factor 7', () => {
      const maxSpeed = 0;
      const skillFactor = 7;

      expect(getDamageBonus(maxSpeed, skillFactor)).toBe(0);
    });

    it('should return 0.5 for max speed 1 and skill factor 7', () => {
      const maxSpeed = 1;
      const skillFactor = 7;

      expect(getDamageBonus(maxSpeed, skillFactor)).toBe(0.5);
    });

    it('should return 12 for max speed 11 and skill factor 39', () => {
      const maxSpeed = 11;
      const skillFactor = 39;

      expect(getDamageBonus(maxSpeed, skillFactor)).toBe(12);
    });

    it('should return 2.5 for max speed 7 and skill factor 21', () => {
      const maxSpeed = 7;
      const skillFactor = 21;

      expect(getDamageBonus(maxSpeed, skillFactor)).toBe(2.5);
    });

    it('should round down skill factor 12 to 11 and return 1 for max speed 6', () => {
      const maxSpeed = 6;
      const skillFactor = 12;

      expect(getDamageBonus(maxSpeed, skillFactor)).toBe(1);
    });
  });
});
