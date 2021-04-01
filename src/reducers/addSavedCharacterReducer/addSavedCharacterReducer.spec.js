import { addSavedCharacterReducer } from './index';
import { MockState } from '../mockState';

describe('addSavedCharacterReducer', () => {
  it('should add new charcater to saved characters', () => {
    const action = { payload: { character_name: 'Mr Test', character_id: 3 } };

    let state = new MockState();
    state.savedCharacters = [
      { character_name: 'First', character_id: 1 },
      { character_name: 'Second', character_id: 2 },
    ];

    state = addSavedCharacterReducer(state, action);

    expect(state.savedCharacters).toStrictEqual([
      { character_name: 'First', character_id: 1 },
      { character_name: 'Second', character_id: 2 },
      action.payload,
    ]);
  });
});
