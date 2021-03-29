import { updateSavedCharactersReducer } from './index';
import { MockState } from '../mockState';

describe('update saved characters reducer', () => {
  let state = new MockState();

  it('should update saved characters', () => {
    const action = { payload: [{ name: 'new character' }] };

    const updatedState = { ...state,
      savedCharacters: [...action.payload] };

    state = updateSavedCharactersReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
