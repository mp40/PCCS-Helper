import { changeHelmetReducer } from './index';
import { MockState } from '../mockState';

describe('changeHelmetReducer function', () => {
  let state = new MockState();

  it('should add helmet to character', () => {
    const action = { payload: 'M1' };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        helmet: action.payload,
      } };

    state = changeHelmetReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should change helmet if helmet already present', () => {
    const action = { payload: 'Other Helmet' };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        helmet: action.payload,
      } };

    state = changeHelmetReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
