import { isValidCombatLevel, isValidAttributeStat, isNotValidEquipmentToAdd } from './gaurds';

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
});
