export const updateSavedCharacterReducer = (state, action) => {
  const updatedCharacter = action.payload;

  const savedCharacters = state.savedCharacters.map((character) => {
    if (updatedCharacter.character_id === character.character_id) {
      return updatedCharacter;
    }

    return character;
  });

  return {
    ...state,
    savedCharacters,
  };
};
