export const decreaseGrenadeReducer = (state, action) => {
  const grenadeToUpdate = action.payload;

  const newGrenades = state.currentCharacter.grenades.map((grenade) => {
    if (grenade.name === grenadeToUpdate) {
      return { ...grenade, qty: grenade.qty - 1 };
    }

    return grenade;
  });

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      grenades: newGrenades } };
};
