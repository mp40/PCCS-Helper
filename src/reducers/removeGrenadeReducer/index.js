export const removeGrenadeReducer = (state, action) => {
  const grenadeToRemove = action.payload;

  const newGrenades = state.currentCharacter.grenades.filter((grenade) => grenade.name !== grenadeToRemove);

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      grenades: newGrenades } };
};
