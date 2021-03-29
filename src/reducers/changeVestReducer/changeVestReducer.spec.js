import { changeVestReducer } from './index';
import { MockState } from '../mockState';

describe('changeVestReducer function', () => {
  let state = new MockState();

  it('should add vest to character', () => {
    const action = { payload: { name: 'vest one', pf: 4, weight: 5 } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + action.payload.weight,
        vest: action.payload,
      } };

    state = changeVestReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should change vest if vest already present', () => {
    const action = { payload: { name: 'Other Vest', pf: 8, weight: 10 } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + action.payload.weight,
        baseSpeed: 2.5,
        maxSpeed: 5,
        gunCombatActions: 3,
        handCombatActions: 3,
        vest: action.payload,
      } };

    state = changeVestReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
