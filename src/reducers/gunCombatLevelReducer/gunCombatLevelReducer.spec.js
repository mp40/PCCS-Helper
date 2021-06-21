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

      } };

    state = modifyGunCombatLevelReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
