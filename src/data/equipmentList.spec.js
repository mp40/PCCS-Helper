import { equipment } from './equipmentList';

describe('validating equipment data', () => {
  const equipmentList = equipment();
  it('should have a name key with a string value', () => {
    for (let i = 0; i < equipmentList.length; i += 1) {
      expect(typeof equipmentList[i].name).toBe('string');
    }
  });
  it('should have a weight key with a number value', () => {
    for (let i = 0; i < equipmentList.length; i += 1) {
      expect(typeof equipmentList[i].weight).toBe('number');
    }
  });
  it('should have a qty key with a number value', () => {
    for (let i = 0; i < equipmentList.length; i += 1) {
      expect(typeof equipmentList[i].qty).toBe('number');
    }
  });
  it('should have a tags key with a array value with length of at least 1', () => {
    for (let i = 0; i < equipmentList.length; i += 1) {
      expect(Array.isArray(equipmentList[i].tags)).toBe(true);
      expect(equipmentList[i].tags.length > 0).toBe(true);
    }
  });
  it('should have a melee key for melee weapon array', () => {
    for (let i = 0; i < equipmentList.length; i += 1) {
      // eslint-disable-next-line no-prototype-builtins
      if (equipmentList[i].hasOwnProperty('melee')) {
        expect(Array.isArray(equipmentList[i].melee)).toBe(true);
      }
    }
  });
  it('should have a melee key array containing one or two entries', () => {
    for (let i = 0; i < equipmentList.length; i += 1) {
      // eslint-disable-next-line no-prototype-builtins
      if (equipmentList[i].hasOwnProperty('melee')) {
        expect(equipmentList[i].melee.length > 0).toBe(true);
        expect(equipmentList[i].melee.length > 2).toBe(false);
      }
    }
  });
  it('should have a "1 hand" and "2 hands" entry if length is two', () => {
    for (let i = 0; i < equipmentList.length; i += 1) {
      // eslint-disable-next-line no-prototype-builtins
      if (equipmentList[i].hasOwnProperty('melee') && equipmentList[i].melee.length === 2) {
        expect(equipmentList[i].melee[0].includes('(1 hand)')).toBe(true);
        expect(equipmentList[i].melee[1].includes('(2 hands)')).toBe(true);
      }
    }
  });
});
