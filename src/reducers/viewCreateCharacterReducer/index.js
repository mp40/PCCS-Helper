import { NewCharacter } from '../newCharacter';

export const viewCreateCharacterReducer = (state, action) => {
  const newCharacter = new NewCharacter();

  return { ...state,
    currentView: action.payload,
    currentCharacter: newCharacter };
};
