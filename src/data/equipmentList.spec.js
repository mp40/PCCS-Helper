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
});
