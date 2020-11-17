import { modifyStrengthValueReducer } from './index';
import { MockState } from '../mockState';

describe('strengthStatReducer function', () => {
  let state = new MockState();

  it('should return correct values when strength changes to 3', () => {
    const action = { payload: 3 };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        str: action.payload,
        baseSpeed: 2.5,
        maxSpeed: 5,
        gunCombatActions: 3,
        handCombatActions: 3,
        damageBonus: 1,
      } };

    state = modifyStrengthValueReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should return correct values when strength changes to 18', () => {
    const action = { payload: 18 };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        str: action.payload,
        baseSpeed: 4,
        maxSpeed: 8,
        gunCombatActions: 5,
        handCombatActions: 5,
        damageBonus: 2,
      } };

    state = modifyStrengthValueReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
