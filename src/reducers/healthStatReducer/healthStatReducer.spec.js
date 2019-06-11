import { modifyHealthValueReducer } from './index';
import { mockState } from '../mockState';

describe('healthStatReducer function', () => {
  it('should return correct values when health changes to 3', () => {
    const action = { payload: 3 };
    const newState = modifyHealthValueReducer(mockState(), action);
    expect(newState.characterStats.str).toEqual(10);
    expect(newState.characterStats.int).toEqual(10);
    expect(newState.characterStats.hlt).toEqual(3);
    expect(newState.characterStats.wil).toEqual(10);
    expect(newState.characterStats.agi).toEqual(10);
    expect(newState.characterStats.gunLevel).toEqual(0);
    expect(newState.characterStats.handLevel).toEqual(0);
    expect(newState.combatStats.baseSpeed).toEqual(3);
    expect(newState.combatStats.maxSpeed).toEqual(6);
    expect(newState.combatStats.SAL).toEqual(0);
    expect(newState.combatStats.CE).toEqual(0);
    expect(newState.combatStats.ISF).toEqual(10);
    expect(newState.combatStats.ASF).toEqual(10);
    expect(newState.combatStats.knockoutValue).toEqual(5);
    expect(newState.combatStats.damageBonus).toEqual(1);
    expect(newState.combatStats.combatActions[0]).toEqual(4);
    expect(newState.combatStats.combatActions[1]).toEqual(4);
  });
  it('should return correct values when health changes to 18', () => {
    const action = { payload: 18 };
    const newState = modifyHealthValueReducer(mockState(), action);
    expect(newState.characterStats.str).toEqual(10);
    expect(newState.characterStats.int).toEqual(10);
    expect(newState.characterStats.hlt).toEqual(18);
    expect(newState.characterStats.wil).toEqual(10);
    expect(newState.characterStats.agi).toEqual(10);
    expect(newState.characterStats.gunLevel).toEqual(0);
    expect(newState.characterStats.handLevel).toEqual(0);
    expect(newState.combatStats.baseSpeed).toEqual(3);
    expect(newState.combatStats.maxSpeed).toEqual(6);
    expect(newState.combatStats.SAL).toEqual(0);
    expect(newState.combatStats.CE).toEqual(0);
    expect(newState.combatStats.ISF).toEqual(10);
    expect(newState.combatStats.ASF).toEqual(10);
    expect(newState.combatStats.knockoutValue).toEqual(5);
    expect(newState.combatStats.damageBonus).toEqual(1);
    expect(newState.combatStats.combatActions[0]).toEqual(4);
    expect(newState.combatStats.combatActions[1]).toEqual(4);
  });
});
