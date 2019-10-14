import { changeNameReducer } from './index';
import { MockState } from '../mockState';

describe('changing character name', () => {
  it('should be possible to give a character a name', () => {
    const state = new MockState();
    const action = { payload: 'Vimes' };
    expect(state.currentCharacter).toBe(undefined);
    const newState = changeNameReducer(state, action);
    expect(newState.currentCharacter).toBe(action.payload);
  });
});
