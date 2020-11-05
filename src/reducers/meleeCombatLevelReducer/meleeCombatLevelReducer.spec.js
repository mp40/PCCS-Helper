import { modifyMeleeCombatLevelReducer } from './index';
import { MockState } from '../mockState';

describe('meleeCombatLevelReducer function', () => {
  let state = new MockState();

  it('should return correct values when handLevel changes to 1', () => {
    const action = { payload: 1 };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        handLevel: action.payload,
        handCombatActions: 5,
        CE: 5,
        ASF: 15,
        damageBonus: 1.5,
      } };

    state = modifyMeleeCombatLevelReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should return correct values when handLevel changes to 10', () => {
    const action = { payload: 10 };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        handLevel: action.payload,
        handCombatActions: 8,
        CE: 16,
        ASF: 26,
        knockoutValue: 50,
        damageBonus: 2.5,
      } };

    state = modifyMeleeCombatLevelReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
