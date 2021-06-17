export const removeAllFirearmModificationsReducer = (state, action) => {
  const firearmToUpdate = action.payload;

  const newFirearmsArray = state.currentCharacter.firearms.map((gun) => {
    if (gun.name === firearmToUpdate) {
      const updatedGun = { ...gun };
      delete updatedGun.modNotes;

      return { ...updatedGun,
        mag: updatedGun.mag.filter((m) => m.custom === undefined) };
    }

    return gun;
  });

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      firearms: newFirearmsArray } };
};
