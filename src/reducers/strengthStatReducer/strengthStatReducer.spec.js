import { modifyStrengthValueReducer } from './index';
import { MockState } from '../mockState';

describe('strengthStatReducer function', () => {
  let state;

  beforeEach(() => {
    state = new MockState();
  });

  it('should return correct values when strength changes to 3', () => {
    const action = { payload: 3 };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        str: action.payload,
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
      } };

    state = modifyStrengthValueReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
