import { modifyGunCombatLevelReducer } from './index';
import { MockState } from '../mockState';

describe('gunCombatLevelReducer function', () => {
  let state = new MockState();

  it('should return correct values when gunLevel changes to 1', () => {
    const action = { payload: 1 };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        gunLevel: action.payload,
        gunCombatActions: 5,
        SAL: 5,
        ISF: 15,
      } };

    state = modifyGunCombatLevelReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should return correct values when gunLevel changes to 10', () => {
    const action = { payload: 10 };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        gunLevel: action.payload,
        gunCombatActions: 8,
        SAL: 16,
        ISF: 26,
        knockoutValue: 50,
      } };

    state = modifyGunCombatLevelReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
