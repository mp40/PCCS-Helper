import { modifyIntelligenceValueReducer } from './index';
import { MockState } from '../mockState';

describe('intelligenceStatReducer function', () => {
  let state = new MockState();

  it('should return correct values when intelligence changes to 3', () => {
    const action = { payload: 3 };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        int: action.payload,
      } };

    state = modifyIntelligenceValueReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should return correct values when intelligence changes to 18', () => {
    const action = { payload: 18 };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        int: action.payload,
      } };

    state = modifyIntelligenceValueReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
