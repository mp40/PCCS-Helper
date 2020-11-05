import { changeNameReducer } from './index';
import { MockState } from '../mockState';

describe('changing character name', () => {
  it('should be possible to give a character a name', () => {
    let state = new MockState();
    const action = { payload: 'Vimes' };

    state = changeNameReducer(state, action);

    expect(state.currentCharacter.name).toBe(action.payload);
  });
});
