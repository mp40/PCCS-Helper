export const updateSavedCharactersReducer = (state, action) => ({ ...state,
  savedCharacters: [...action.payload] });
