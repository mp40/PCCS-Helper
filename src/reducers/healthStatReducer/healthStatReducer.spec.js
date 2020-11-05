import { modifyHealthValueReducer } from './index';
import { MockState } from '../mockState';

describe('healthStatReducer function', () => {
  let state = new MockState();

  it('should return correct values when health changes to 3', () => {
    const action = { payload: 3 };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        hlt: action.payload,
      } };

    state = modifyHealthValueReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should return correct values when health changes to 18', () => {
    const action = { payload: 18 };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        hlt: action.payload,
      } };

    state = modifyHealthValueReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
