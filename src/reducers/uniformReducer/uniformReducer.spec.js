import { changeUniformReducer } from './index';
import { MockState } from '../mockState';

describe('changeUniformReducer function', () => {
  let state = new MockState();

  it('should update to Tropical uniform', () => {
    const action = { payload: 'Tropical' };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        uniform: 'Tropical',
      } };

    state = changeUniformReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should update to Winter uniform', () => {
    const action = { payload: 'Winter' };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        uniform: 'Winter',
      } };

    state = changeUniformReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
