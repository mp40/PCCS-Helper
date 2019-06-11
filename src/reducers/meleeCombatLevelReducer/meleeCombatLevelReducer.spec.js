import { modifyMeleeCombatLevelReducer } from './index';
import { mockState } from '../mockState';

describe('meleeCombatLevelReducer function', () => {
  it('should return correct values when gunLevel changes to 1', () => {
    const action = { payload: 2 };
    const newState = modifyMeleeCombatLevelReducer(mockState(), action);
    expect(newState.characterStats.str).toEqual(10);
    expect(newState.characterStats.int).toEqual(10);
    expect(newState.characterStats.hlt).toEqual(10);
    expect(newState.characterStats.wil).toEqual(10);
    expect(newState.characterStats.agi).toEqual(10);
    expect(newState.characterStats.gunLevel).toEqual(0);
    expect(newState.characterStats.handLevel).toEqual(2);
    expect(newState.combatStats.baseSpeed).toEqual(3);
    expect(newState.combatStats.maxSpeed).toEqual(6);
    expect(newState.combatStats.SAL).toEqual(0);
    expect(newState.combatStats.CE).toEqual(7);
    expect(newState.combatStats.ISF).toEqual(10);
    expect(newState.combatStats.ASF).toEqual(17);
    expect(newState.combatStats.knockoutValue).toEqual(10);
    expect(newState.combatStats.damageBonus).toEqual(1.5);
    expect(newState.combatStats.combatActions[0]).toEqual(4);
    expect(newState.combatStats.combatActions[1]).toEqual(6);
  });
  it('should return correct values when gunLevel changes to 10', () => {
    const action = { payload: 11 };
    const newState = modifyMeleeCombatLevelReducer(mockState(), action);
    expect(newState.characterStats.str).toEqual(10);
    expect(newState.characterStats.int).toEqual(10);
    expect(newState.characterStats.hlt).toEqual(10);
    expect(newState.characterStats.wil).toEqual(10);
    expect(newState.characterStats.agi).toEqual(10);
    expect(newState.characterStats.gunLevel).toEqual(0);
    expect(newState.characterStats.handLevel).toEqual(11);
    expect(newState.combatStats.baseSpeed).toEqual(3);
    expect(newState.combatStats.maxSpeed).toEqual(6);
    expect(newState.combatStats.SAL).toEqual(0);
    expect(newState.combatStats.CE).toEqual(17);
    expect(newState.combatStats.ISF).toEqual(10);
    expect(newState.combatStats.ASF).toEqual(27);
    expect(newState.combatStats.knockoutValue).toEqual(55);
    expect(newState.combatStats.damageBonus).toEqual(2.5);
    expect(newState.combatStats.combatActions[0]).toEqual(4);
    expect(newState.combatStats.combatActions[1]).toEqual(8);
  });
});
