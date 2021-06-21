export const replaceMagazineReducer = (state, action) => {
  const { firearmToUpdate, magazineIndex } = action.payload;

  const newFirearmsArray = state.currentCharacter.firearms.map((gun) => {
    if (gun.name === firearmToUpdate) {
      const updatedMag = [...gun.mag];
      delete updatedMag[magazineIndex].removed;

      return { ...gun, mag: updatedMag };
    }

    return gun;
  });

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      firearms: newFirearmsArray } };
};
