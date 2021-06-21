export const removeFirearmModificationReducer = (state, action) => {
  const { firearmToUpdate, modIndex } = action.payload;

  const newFirearmsArray = state.currentCharacter.firearms.map((gun) => {
    if (gun.name === firearmToUpdate) {
      const updatedMods = gun.modNotes.filter((m, i) => i !== modIndex);

      return { ...gun, modNotes: updatedMods };
    }

    return gun;
  });

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      firearms: newFirearmsArray } };
};
