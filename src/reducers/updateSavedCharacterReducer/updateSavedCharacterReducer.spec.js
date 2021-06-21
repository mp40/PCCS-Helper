import { updateSavedCharacterReducer } from './index';
import { MockState } from '../mockState';

describe('addSavedCharacterReducer', () => {
  it('should update the character with same id', () => {
    const action = { payload: { character_name: 'Updated Second', character_id: 2 } };

    let state = new MockState();
    state.savedCharacters = [
      { character_name: 'First', character_id: 1 },
      { character_name: 'Second', character_id: 2 },
      { character_name: 'Third', character_id: 3 },
    ];

    state = updateSavedCharacterReducer(state, action);

    expect(state.savedCharacters).toStrictEqual([
      { character_name: 'First', character_id: 1 },
      action.payload,
      { character_name: 'Third', character_id: 3 },
    ]);
  });
});
