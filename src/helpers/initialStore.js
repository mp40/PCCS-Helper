import { NewCharacter } from '../reducers/newCharacter';

export const initialStore = {
  currentCharacter: new NewCharacter(),
  savedCharacters: [],
};
