import { NewCharacter } from '../reducers/newCharacter';

export const getInitialReduxState = () => ({
  currentCharacter: new NewCharacter(),
  savedCharacters: [],
});
