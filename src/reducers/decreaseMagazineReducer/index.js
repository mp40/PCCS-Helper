export const decreaseMagazineReducer = (state, action) => {
  const { firearmToModify, magazineIndex } = action.payload;

  const updatedFirearms = state.currentCharacter.firearms.map((gun) => {
    if (gun.name === firearmToModify) {
      const updatedMag = [...gun.mag];
      updatedMag[magazineIndex].qty -= 1;

      return { ...gun, mag: updatedMag };
    }

    return gun;
  });

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      firearms: updatedFirearms } };
};
