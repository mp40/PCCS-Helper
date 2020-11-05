import { changeUniformReducer } from './index';
import { MockState } from '../mockState';

describe('changeUniformReducer function', () => {
  let state = new MockState();

  it('should return correct values when change from Normal to Tropical unifrom', () => {
    const action = { payload: 'Tropical' };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 4.5,
        uniform: 'Tropical',
      } };

    state = changeUniformReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should return correct values when changing unifrom triggers combat action changes', () => {
    const action = { payload: 'Winter' };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 7,
        uniform: 'Winter',
      } };

    state = changeUniformReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
