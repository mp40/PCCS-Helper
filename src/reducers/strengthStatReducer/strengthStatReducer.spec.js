import { modifyStrengthValueReducer } from './index';

const mockState = () => ({
  totalWeight: 5,
  characterStats: {
    str: 10,
    int: 10,
    hlt: 10,
    wil: 10,
    agi: 10,
    gunLevel: 0,
    handLevel: 0,
  },
  combatStats: {
    baseSpeed: 3,
    maxSpeed: 6,
    SAL: 0,
    CE: 0,
    ISF: 10,
    ASF: 10,
    knockoutValue: 5,
    damageBonus: 1,
    combatActions: [4, 4],
  },
});

describe('gunCombatLevelReducer function', () => {
  it('should return correct values when gunLevel changes to 1', () => {
    const action = { payload: 3 };
    const newState = modifyStrengthValueReducer(mockState(), action);
    expect(newState.characterStats.str).toEqual(3);
    expect(newState.characterStats.int).toEqual(10);
    expect(newState.characterStats.hlt).toEqual(10);
    expect(newState.characterStats.wil).toEqual(10);
    expect(newState.characterStats.agi).toEqual(10);
    expect(newState.characterStats.gunLevel).toEqual(0);
    expect(newState.characterStats.handLevel).toEqual(0);
    expect(newState.combatStats.baseSpeed).toEqual(2.5);
    expect(newState.combatStats.maxSpeed).toEqual(5);
    expect(newState.combatStats.SAL).toEqual(0);
    expect(newState.combatStats.CE).toEqual(0);
    expect(newState.combatStats.ISF).toEqual(10);
    expect(newState.combatStats.ASF).toEqual(10);
    expect(newState.combatStats.knockoutValue).toEqual(5);
    expect(newState.combatStats.damageBonus).toEqual(1);
    expect(newState.combatStats.combatActions[0]).toEqual(3);
    expect(newState.combatStats.combatActions[1]).toEqual(3);
  });
  it('should return correct values when gunLevel changes to 10', () => {
    const action = { payload: 18 };
    const newState = modifyStrengthValueReducer(mockState(), action);
    expect(newState.characterStats.str).toEqual(18);
    expect(newState.characterStats.int).toEqual(10);
    expect(newState.characterStats.hlt).toEqual(10);
    expect(newState.characterStats.wil).toEqual(10);
    expect(newState.characterStats.agi).toEqual(10);
    expect(newState.characterStats.gunLevel).toEqual(0);
    expect(newState.characterStats.handLevel).toEqual(0);
    expect(newState.combatStats.baseSpeed).toEqual(4);
    expect(newState.combatStats.maxSpeed).toEqual(8);
    expect(newState.combatStats.SAL).toEqual(0);
    expect(newState.combatStats.CE).toEqual(0);
    expect(newState.combatStats.ISF).toEqual(10);
    expect(newState.combatStats.ASF).toEqual(10);
    expect(newState.combatStats.knockoutValue).toEqual(5);
    expect(newState.combatStats.damageBonus).toEqual(2);
    expect(newState.combatStats.combatActions[0]).toEqual(5);
    expect(newState.combatStats.combatActions[1]).toEqual(5);
  });
});
