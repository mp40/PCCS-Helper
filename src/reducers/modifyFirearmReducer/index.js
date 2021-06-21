export const modifyFirearmReducer = (state, action) => {
  const { firearm, modNote } = action.payload;

  const newFirearmsArray = state.currentCharacter.firearms.map((gun) => {
    if (gun.name === firearm) {
      let updatedMods = gun.modNotes || [];
      updatedMods = [...updatedMods, modNote];

      return { ...gun, modNotes: updatedMods };
    }
    return gun;
  });

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      firearms: newFirearmsArray } };
};
