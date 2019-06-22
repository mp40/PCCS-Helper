import { isValidCombatLevel,
  isValidAttributeStat,
  isNotValidEquipmentToAdd,
  isValidCustomEquipmentInput,
  isValidToDecreaseQantity } from './gaurds';

describe('stat level gaurd clauses', () => {
  it('should not allow combat levels to be below 0', () => {
    expect(isValidCombatLevel(-1)).toEqual(false);
    expect(isValidCombatLevel(1)).toEqual(true);
  });
  it('should not allow attribute stats to be below 3', () => {
    expect(isValidAttributeStat(2)).toEqual(false);
    expect(isValidAttributeStat(3)).toEqual(true);
  });
  it('should not allow attribute stats to be above 19', () => {
    expect(isValidAttributeStat(20)).toEqual(false);
    expect(isValidAttributeStat(19)).toEqual(true);
  });
});

describe('adding equipment gaurd clauses', () => {
  it('should not allow the identical equipment to be added to the array', () => {
    const equipmentArray = [{ name: 'test' }];
    const emptyArray = [];
    const identicalEquipment = { name: 'test' };
    const newEquipment = { name: 'safe to add' };
    expect(isNotValidEquipmentToAdd(equipmentArray, identicalEquipment)).toBeTruthy();
    expect(isNotValidEquipmentToAdd(equipmentArray, newEquipment)).not.toBeTruthy();
    expect(isNotValidEquipmentToAdd(emptyArray, newEquipment)).not.toBeTruthy();
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

describe('decrease equipment quantity gaurd', () => {
  it('should return true if equipment quantity is above one', () => {
    const equipment = { qty: 2 };
    expect(isValidToDecreaseQantity(equipment)).toBe(true);
  });
  it('should return false if equipment quantity is one or less', () => {
    const equipment = { qty: 1 };
    expect(isValidToDecreaseQantity(equipment)).toBe(false);
  });
});
