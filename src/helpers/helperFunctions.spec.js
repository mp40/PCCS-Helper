const {
  calcBaseSpeed,
  findKey,
  findSAL,
  calcMaxSpeed,
  calcISF,
  calcCombatActions,
  calcKV,
  calcDB,
  calculateStateObject,
  actionsPerImpulse,
} = require('./helperFunctions');

const {
  table1A_BaseSpeed,
  table1B_MaxSpeed,
  table1D_CombatActions,
  table1D_DamageBonus,
} = require('./tables');

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
    expect(findKey(5, table1A_BaseSpeed.lbs)).toEqual(0);
    expect(findKey(10, table1A_BaseSpeed.lbs)).toEqual(0);
    expect(findKey(13, table1A_BaseSpeed.lbs)).toEqual(1);
    expect(findKey(15, table1A_BaseSpeed.lbs)).toEqual(1);
    expect(findKey(20, table1A_BaseSpeed.lbs)).toEqual(2);
    expect(findKey(23, table1A_BaseSpeed.lbs)).toEqual(3);
    expect(findKey(25, table1A_BaseSpeed.lbs)).toEqual(3);
    expect(findKey(99, table1A_BaseSpeed.lbs)).toEqual(14);
    expect(findKey(100, table1A_BaseSpeed.lbs)).toEqual(14);
    expect(findKey(125, table1A_BaseSpeed.lbs)).toEqual(15);
    expect(findKey(150, table1A_BaseSpeed.lbs)).toEqual(16);
    expect(findKey(199, table1A_BaseSpeed.lbs)).toEqual(17);
    expect(findKey(200, table1A_BaseSpeed.lbs)).toEqual(17);
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
    expect(findKey(1, table1B_MaxSpeed.baseSpeed)).toEqual(0);
    expect(findKey(1.5, table1B_MaxSpeed.baseSpeed)).toEqual(1);
    expect(findKey(2, table1B_MaxSpeed.baseSpeed)).toEqual(2);
    expect(findKey(2.5, table1B_MaxSpeed.baseSpeed)).toEqual(3);
    expect(findKey(3, table1B_MaxSpeed.baseSpeed)).toEqual(4);
    expect(findKey(3.5, table1B_MaxSpeed.baseSpeed)).toEqual(5);
    expect(findKey(4, table1B_MaxSpeed.baseSpeed)).toEqual(6);
    expect(findKey(4.5, table1B_MaxSpeed.baseSpeed)).toEqual(7);
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
    expect(calcISF(10, 10)).toEqual(20);
    expect(calcISF(10, 9)).toEqual(19);
  });
});

describe('calculate combat actions', () => {
  it('should find the correct index bsed on ISF', () => {
    expect(findKey(3, table1D_CombatActions.isf)).toEqual(0);
    expect(findKey(7, table1D_CombatActions.isf)).toEqual(0);
    expect(findKey(8, table1D_CombatActions.isf)).toEqual(1);
    expect(findKey(9, table1D_CombatActions.isf)).toEqual(1);
    expect(findKey(10, table1D_CombatActions.isf)).toEqual(2);
    expect(findKey(17, table1D_CombatActions.isf)).toEqual(5);
    expect(findKey(18, table1D_CombatActions.isf)).toEqual(6);
    expect(findKey(19, table1D_CombatActions.isf)).toEqual(6);
    expect(findKey(20, table1D_CombatActions.isf)).toEqual(7);
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
    expect(calcISF(12, 7)).toEqual(19);
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
});

describe('calculate Damage Bonus', () => {
  it('should find the correct key based on asf', () => {
    expect(findKey(3, table1D_DamageBonus.asf)).toEqual(0);
    expect(findKey(7, table1D_DamageBonus.asf)).toEqual(0);
    expect(findKey(9, table1D_DamageBonus.asf)).toEqual(1);
    expect(findKey(10, table1D_DamageBonus.asf)).toEqual(2);
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

describe('calculate state object', () => {
  const str = 14;
  const int = 10;
  const wil = 10;
  const hlt = 10;
  const agi = 12;
  const gunLevel = 4;
  const handLevel = 2;
  const weight = 25;

  const characterStats = {
    str,
    int,
    wil,
    hlt,
    agi,
    gunLevel,
    handLevel,
  };

  const result = calculateStateObject(characterStats, weight);

  it('should return an object', () => {
    expect(typeof {
      result,
    }).toBe('object');
  });
  it('should have a key and value for baseSpeed', () => {
    expect(result).toHaveProperty('baseSpeed', 2);
  });
  it('should have a key and value for maxSpeed', () => {
    expect(result).toHaveProperty('maxSpeed', 4);
  });
  it('should have a key and value for SAL', () => {
    expect(result).toHaveProperty('SAL', 10);
  });
  it('should have a key and value for ISF', () => {
    expect(result).toHaveProperty('ISF', 20);
  });
  it('should have a key and value CE', () => {
    expect(result).toHaveProperty('CE', 7);
  });
  it('should have a key and value for ASF', () => {
    expect(result).toHaveProperty('ASF', 19);
  });
  it("should have a key combatActions, it's value an array containing Gun and Hand actions", () => {
    expect(result).toHaveProperty('combatActions', [5, 4]);
  });
  it('should have a key and value for knockoutValue based on highest combat skill level', () => {
    expect(result).toHaveProperty('knockoutValue', 20);
  });
  it('should have a key and value for damage bonus', () => {
    expect(result).toHaveProperty('damageBonus', 1);
  });
});

describe('converting actions per phase to actions per impulse', () => {
  it('should return an array', () => {
    const result = actionsPerImpulse();
    expect(Array.isArray(result)).toEqual(true);
  });
  it('should return correct result for 1 action', () => {
    const correctResult = [1, 0, 0, 0];
    expect(actionsPerImpulse(1)).toEqual(correctResult);
  });
  it('should return correct result for 2 actions', () => {
    const correctResult = [1, 0, 1, 0];
    expect(actionsPerImpulse(2)).toEqual(correctResult);
  });
  it('should return correct result for 3 action', () => {
    const correctResult = [1, 0, 1, 1];
    expect(actionsPerImpulse(3)).toEqual(correctResult);
  });
  it('should return correct result for 4 actions', () => {
    const correctResult = [1, 1, 1, 1];
    expect(actionsPerImpulse(4)).toEqual(correctResult);
  });
  it('should return correct result for 0 actions', () => {
    const correctResult = [0, 0, 0, 0];
    expect(actionsPerImpulse(0)).toEqual(correctResult);
  });
  it('should return correct result for 5 actions', () => {
    const correctResult = [2, 1, 1, 1];
    expect(actionsPerImpulse(5)).toEqual(correctResult);
  });
  it('should return the correct result for 21 actions', () => {
    const correctResult = [6, 5, 5, 5];
    expect(actionsPerImpulse(21)).toEqual(correctResult);
  });
});
