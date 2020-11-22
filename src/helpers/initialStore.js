import { NewCharacter } from '../reducers/newCharacter';

export const initialStore = {
  currentView: 'home',
  currentCharacter: new NewCharacter(),
  savedCharacters: [],
};
