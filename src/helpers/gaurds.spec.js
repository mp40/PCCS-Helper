import { isNotValidObjectToAdd,
  isValidCustomEquipmentInput } from './gaurds';

describe('adding equipment gaurd clauses', () => {
  it('should not allow the identically named object to be added to the array', () => {
    const equipmentArray = [{ name: 'test' }];
    const emptyArray = [];
    const identicalEquipment = { name: 'test' };
    const newEquipment = { name: 'safe to add' };
    expect(isNotValidObjectToAdd(equipmentArray, identicalEquipment)).toBeTruthy();
    expect(isNotValidObjectToAdd(equipmentArray, newEquipment)).not.toBeTruthy();
    expect(isNotValidObjectToAdd(emptyArray, newEquipment)).not.toBeTruthy();
  });
  describe('valid custom equipment input', () => {
    it('should return true for valid custom equipment object', () => {
      expect(isValidCustomEquipmentInput('valid equipment name', 0.5)).toBe(true);
    });
    it('should return false if name value is not a string at least one character long', () => {
      expect(isValidCustomEquipmentInput('', 0.5)).toBe(false);
      expect(isValidCustomEquipmentInput(666, 0.5)).toBe(false);
      expect(isValidCustomEquipmentInput(undefined, 0.5)).toBe(false);
    });
    it('should return false if weight valid is not a number greater than 0', () => {
      expect(isValidCustomEquipmentInput('valid equipment name', '0.5')).toBe(false);
      expect(isValidCustomEquipmentInput('valid equipment name', -0.5)).toBe(false);
      expect(isValidCustomEquipmentInput('valid equipment name', undefined)).toBe(false);
      expect(isValidCustomEquipmentInput('valid equipment name', NaN)).toBe(false);
    });
  });
});
