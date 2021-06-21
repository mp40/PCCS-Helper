import { changeVestReducer } from './index';
import { MockState } from '../mockState';

describe('changeVestReducer function', () => {
  let state = new MockState();

  it('should add vest to character', () => {
    const action = { payload: 'vest one' };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        vest: action.payload,
      } };

    state = changeVestReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should change vest if vest already present', () => {
    const action = { payload: 'Other Vest' };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        vest: action.payload,
      } };

    state = changeVestReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
