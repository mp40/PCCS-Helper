import { modifyAgilityValueReducer } from './index';
import { MockState } from '../mockState';

describe('agilityStatlReducer function', () => {
  let state = new MockState();

  it('should update agility to 3 when payload is 3', () => {
    const action = { payload: 3 };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        agi: action.payload,
      } };

    state = modifyAgilityValueReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should update agility to 18 when payload is 18', () => {
    const action = { payload: 18 };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        agi: action.payload,
      } };

    state = modifyAgilityValueReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
