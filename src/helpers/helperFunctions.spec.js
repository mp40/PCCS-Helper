const {
  calcBaseSpeed,
  findKey,
  findSAL,
  calcMaxSpeed,
  calcSkillFactor,
  calcCombatActions,
  calcKV,
  calcDB,
  actionsPerImpulse,
} = require('./helperFunctions');

const {
  table1aBaseSpeed,
  table1bMaxSpeed,
  table1dCombatActions,
  table1dDamageBonus,
} = require('../data/tablesCreateCharacter');

describe('calculate SAL', () => {
  it('should return the correct SAL based on skill level', () => {
    expect(findSAL(0)).toEqual(0);
    expect(findSAL(1)).toEqual(5);
    expect(findSAL(2)).toEqual(7);
    expect(findSAL(3)).toEqual(9);
    expect(findSAL(4)).toEqual(10);
    expect(findSAL(5)).toEqual(11);
    expect(findSAL(20)).toEqual(26);
  });
});

describe('calculate Base Speed', () => {
  it('should find the correct index from weight', () => {
    expect(findKey(5, table1aBaseSpeed.lbs)).toEqual(0);
    expect(findKey(10, table1aBaseSpeed.lbs)).toEqual(0);
    expect(findKey(13, table1aBaseSpeed.lbs)).toEqual(1);
    expect(findKey(15, table1aBaseSpeed.lbs)).toEqual(1);
    expect(findKey(20, table1aBaseSpeed.lbs)).toEqual(2);
    expect(findKey(23, table1aBaseSpeed.lbs)).toEqual(3);
    expect(findKey(25, table1aBaseSpeed.lbs)).toEqual(3);
    expect(findKey(99, table1aBaseSpeed.lbs)).toEqual(14);
    expect(findKey(100, table1aBaseSpeed.lbs)).toEqual(14);
    expect(findKey(125, table1aBaseSpeed.lbs)).toEqual(15);
    expect(findKey(150, table1aBaseSpeed.lbs)).toEqual(16);
    expect(findKey(199, table1aBaseSpeed.lbs)).toEqual(17);
    expect(findKey(200, table1aBaseSpeed.lbs)).toEqual(17);
  });
  it('should find base speed using STR and Weight', () => {
    expect(calcBaseSpeed(21, 200)).toEqual(2);
    expect(calcBaseSpeed(21, 10)).toEqual(4.5);
    expect(calcBaseSpeed(1, 10)).toEqual(1.5);
    expect(calcBaseSpeed(1, 20)).toEqual(1);
    expect(calcBaseSpeed(14, 45)).toEqual(1.5);
    expect(calcBaseSpeed(14, 90)).toEqual(1);
  });
  it('should return 0 if weight exceeds carrying capicity', () => {
    expect(calcBaseSpeed(1, 25)).toEqual(0);
    expect(calcBaseSpeed(14, 200)).toEqual(0);
  });
});

describe('calculate Max Speed', () => {
  it('should find the correct index from Base Speed', () => {
    expect(findKey(1, table1bMaxSpeed.baseSpeed)).toEqual(0);
    expect(findKey(1.5, table1bMaxSpeed.baseSpeed)).toEqual(1);
    expect(findKey(2, table1bMaxSpeed.baseSpeed)).toEqual(2);
    expect(findKey(2.5, table1bMaxSpeed.baseSpeed)).toEqual(3);
    expect(findKey(3, table1bMaxSpeed.baseSpeed)).toEqual(4);
    expect(findKey(3.5, table1bMaxSpeed.baseSpeed)).toEqual(5);
    expect(findKey(4, table1bMaxSpeed.baseSpeed)).toEqual(6);
    expect(findKey(4.5, table1bMaxSpeed.baseSpeed)).toEqual(7);
  });
  it('should find max speed using AGI and base speed', () => {
    expect(calcMaxSpeed(21, 1)).toEqual(2);
    expect(calcMaxSpeed(21, 4.5)).toEqual(13);
    expect(calcMaxSpeed(14, 1)).toEqual(2);
    expect(calcMaxSpeed(14, 1.5)).toEqual(3);
    expect(calcMaxSpeed(14, 2)).toEqual(4);
    expect(calcMaxSpeed(14, 2.5)).toEqual(6);
    expect(calcMaxSpeed(14, 3)).toEqual(7);
    expect(calcMaxSpeed(14, 3.5)).toEqual(8);
    expect(calcMaxSpeed(1, 1)).toEqual(1);
    expect(calcMaxSpeed(1, 1.5)).toEqual(1);
    expect(calcMaxSpeed(1, 4)).toEqual(3);
    expect(calcMaxSpeed(1, 4.5)).toEqual(3);
  });
  it('should return 0 if Base Speed is 0', () => {
    expect(calcMaxSpeed(10, 0)).toEqual(0);
  });
});

describe('calculate ISF', () => {
  it('should return INT plus SAL', () => {
    expect(calcSkillFactor(10, 10)).toEqual(20);
    expect(calcSkillFactor(10, 9)).toEqual(19);
  });
});

describe('calculate combat actions', () => {
  it('should find the correct index bsed on ISF', () => {
    expect(findKey(3, table1dCombatActions.isf)).toEqual(0);
    expect(findKey(7, table1dCombatActions.isf)).toEqual(0);
    expect(findKey(8, table1dCombatActions.isf)).toEqual(1);
    expect(findKey(9, table1dCombatActions.isf)).toEqual(1);
    expect(findKey(10, table1dCombatActions.isf)).toEqual(2);
    expect(findKey(17, table1dCombatActions.isf)).toEqual(5);
    expect(findKey(18, table1dCombatActions.isf)).toEqual(6);
    expect(findKey(19, table1dCombatActions.isf)).toEqual(6);
    expect(findKey(20, table1dCombatActions.isf)).toEqual(7);
  });
  it('should find the total Combat Actions based on max speed and ISF', () => {
    expect(calcCombatActions(1, 3)).toEqual(1);
    expect(calcCombatActions(1, 7)).toEqual(1);
    expect(calcCombatActions(1, 39)).toEqual(2);
    expect(calcCombatActions(4, 20)).toEqual(5);
    expect(calcCombatActions(13, 1)).toEqual(6);
    expect(calcCombatActions(13, 39)).toEqual(24);
  });
  it('should return 0 if Max Speed is 0', () => {
    expect(calcCombatActions(0, 20)).toEqual(0);
  });
});

describe('calculate additional Hand to Hand data', () => {
  it('should calculate Combat Effectivness (CE)', () => {
    expect(findSAL(0)).toEqual(0);
    expect(findSAL(5)).toEqual(11);
  });
  it('should calculate Agility Skill Factor (ASF) from AGI and CE', () => {
    expect(calcSkillFactor(12, 7)).toEqual(19);
  });
  it('should calculate Hand to Hand Combat Actions', () => {
    expect(calcCombatActions(2, 17)).toEqual(2);
    expect(calcCombatActions(3, 13)).toEqual(2);
    expect(calcCombatActions(6, 18)).toEqual(6);
  });
});

describe('calculate Knockout Value', () => {
  it('should return (0.5*WIL)* highest Skill Level', () => {
    expect(calcKV(10, 4)).toEqual(20);
    expect(calcKV(6, 2)).toEqual(6);
  });
  it('should round down in case of fractions', () => {
    expect(calcKV(11, 4)).toEqual(20);
    expect(calcKV(7, 2)).toEqual(6);
  });
  it('should times by 1 if highest level is zero', () => {
    expect(calcKV(3, 0)).toEqual(1);
    expect(calcKV(18, 0)).toEqual(9);
  });
});

describe('calculate Damage Bonus', () => {
  it('should find the correct key based on asf', () => {
    expect(findKey(3, table1dDamageBonus.asf)).toEqual(0);
    expect(findKey(7, table1dDamageBonus.asf)).toEqual(0);
    expect(findKey(9, table1dDamageBonus.asf)).toEqual(1);
    expect(findKey(10, table1dDamageBonus.asf)).toEqual(2);
  });
  it('should return the correct value based on max speed and ASF', () => {
    expect(calcDB(4, 13)).toEqual(1);
    expect(calcDB(4, 9)).toEqual(0.5);
    expect(calcDB(4, 10)).toEqual(1);
    expect(calcDB(6, 23)).toEqual(2);
    expect(calcDB(6, 24)).toEqual(2.5);
  });
  it('should return 0 if max speed is 0', () => {
    expect(calcDB(0, 20)).toEqual(0);
  });
});

describe('converting actions per phase to actions per impulse', () => {
  it('should return an array', () => {
    const result = actionsPerImpulse();
    expect(Array.isArray(result)).toStrictEqual(true);
  });
  it('should return correct result for 1 action', () => {
    const correctResult = [1, 0, 0, 0];
    expect(actionsPerImpulse(1)).toStrictEqual(correctResult);
  });
  it('should return correct result for 2 actions', () => {
    const correctResult = [1, 0, 1, 0];
    expect(actionsPerImpulse(2)).toStrictEqual(correctResult);
  });
  it('should return correct result for 3 action', () => {
    const correctResult = [1, 0, 1, 1];
    expect(actionsPerImpulse(3)).toStrictEqual(correctResult);
  });
  it('should return correct result for 4 actions', () => {
    const correctResult = [1, 1, 1, 1];
    expect(actionsPerImpulse(4)).toStrictEqual(correctResult);
  });
  it('should return correct result for 0 actions', () => {
    const correctResult = [0, 0, 0, 0];
    expect(actionsPerImpulse(0)).toStrictEqual(correctResult);
  });
  it('should return correct result for 5 actions', () => {
    const correctResult = [2, 1, 1, 1];
    expect(actionsPerImpulse(5)).toStrictEqual(correctResult);
  });
  it('should return the correct result for 21 actions', () => {
    const correctResult = [6, 5, 5, 5];
    expect(actionsPerImpulse(21)).toStrictEqual(correctResult);
  });
});
