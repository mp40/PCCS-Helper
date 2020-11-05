import { changeHelmetReducer } from './index';
import { MockState } from '../mockState';

describe('changeHelmetReducer function', () => {
  let state = new MockState();

  it('should add helmet to character', () => {
    const action = { payload: { name: 'M1', pf: 4, weight: 2.5 } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + action.payload.weight,
        helmet: action.payload,
      } };

    state = changeHelmetReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should change helmet if helmet already present', () => {
    const action = { payload: { name: 'Other Helmet', pf: 4, weight: 5 } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + action.payload.weight,
        helmet: action.payload,
      } };

    state = changeHelmetReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
