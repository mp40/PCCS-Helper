export const increaseFirearmReducer = (state, action) => {
  const firearmToUpdate = action.payload;

  const updatedFirearms = state.currentCharacter.firearms.map((gun) => {
    if (gun.name === firearmToUpdate) {
      return { ...gun, qty: gun.qty + 1 };
    }

    return gun;
  });

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      firearms: updatedFirearms } };
};
