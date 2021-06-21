export const updateSavedCharactersReducer = (state, action) => {
  console.log('redr', action.payload);
  return { ...state,
    savedCharacters: [...action.payload] };
};
