export const increaseMagazineReducer = (state, action) => {
  const { firearmToModify, magazineIndex } = action.payload;

  const newFirearms = state.currentCharacter.firearms.map((gun) => {
    if (firearmToModify === gun.name) {
      const updatedMag = [...gun.mag];
      updatedMag[magazineIndex].qty += 1;

      return { ...gun, mag: updatedMag };
    }

    return gun;
  });

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      firearms: newFirearms } };
};
