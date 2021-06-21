import { modifyWillpowerValueReducer } from './index';
import { MockState } from '../mockState';

describe('willpowerStatReducer function', () => {
  let state = new MockState();

  it('should return correct values when willpower changes to 3', () => {
    const action = { payload: 3 };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        wil: action.payload,
      } };

    state = modifyWillpowerValueReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should return correct values when willpower changes to 18', () => {
    const action = { payload: 18 };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        wil: action.payload,
      } };

    state = modifyWillpowerValueReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
