import { modifyGunCombatLevelReducer } from './index';
import { mockState } from '../mockState';

describe('gunCombatLevelReducer function', () => {
  it('should return correct values when gunLevel changes to 1', () => {
    const action = { payload: 1 };
    const newState = modifyGunCombatLevelReducer(mockState(), action);
    expect(newState.characterStats.str).toEqual(10);
    expect(newState.characterStats.int).toEqual(10);
    expect(newState.characterStats.hlt).toEqual(10);
    expect(newState.characterStats.wil).toEqual(10);
    expect(newState.characterStats.agi).toEqual(10);
    expect(newState.characterStats.gunLevel).toEqual(1);
    expect(newState.characterStats.handLevel).toEqual(0);
    expect(newState.combatStats.baseSpeed).toEqual(3);
    expect(newState.combatStats.maxSpeed).toEqual(6);
    expect(newState.combatStats.SAL).toEqual(5);
    expect(newState.combatStats.CE).toEqual(0);
    expect(newState.combatStats.ISF).toEqual(15);
    expect(newState.combatStats.ASF).toEqual(10);
    expect(newState.combatStats.knockoutValue).toEqual(5);
    expect(newState.combatStats.damageBonus).toEqual(1);
    expect(newState.combatStats.combatActions[0]).toEqual(5);
    expect(newState.combatStats.combatActions[1]).toEqual(4);
  });
  it('should return correct values when gunLevel changes to 10', () => {
    const action = { payload: 10 };
    const newState = modifyGunCombatLevelReducer(mockState(), action);
    expect(newState.characterStats.str).toEqual(10);
    expect(newState.characterStats.int).toEqual(10);
    expect(newState.characterStats.hlt).toEqual(10);
    expect(newState.characterStats.wil).toEqual(10);
    expect(newState.characterStats.agi).toEqual(10);
    expect(newState.characterStats.gunLevel).toEqual(10);
    expect(newState.characterStats.handLevel).toEqual(0);
    expect(newState.combatStats.baseSpeed).toEqual(3);
    expect(newState.combatStats.maxSpeed).toEqual(6);
    expect(newState.combatStats.SAL).toEqual(16);
    expect(newState.combatStats.CE).toEqual(0);
    expect(newState.combatStats.ISF).toEqual(26);
    expect(newState.combatStats.ASF).toEqual(10);
    expect(newState.combatStats.knockoutValue).toEqual(50);
    expect(newState.combatStats.damageBonus).toEqual(1);
    expect(newState.combatStats.combatActions[0]).toEqual(8);
    expect(newState.combatStats.combatActions[1]).toEqual(4);
  });
});
