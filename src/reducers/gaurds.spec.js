import { isValidCombatLevel, isValidAttributeStat } from './gaurds';

describe('reducer gaurd clauses', () => {
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
