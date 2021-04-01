export const addSavedCharacterReducer = (state, action) => ({
  ...state,
  savedCharacters: [...state.savedCharacters, action.payload],
});
