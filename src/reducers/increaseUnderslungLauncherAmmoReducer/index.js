export const increaseUnderslungLauncherAmmoReducer = (state, action) => {
  const { firearmToModify, magazineIndex } = action.payload;

  const newFirearms = state.currentCharacter.firearms.map((gun) => {
    if (firearmToModify === gun.name) {
      const updatedMag = [...gun.launcher.mag];
      updatedMag[magazineIndex].qty += 1;

      return { ...gun, launcher: { ...gun.launcher, mag: updatedMag } };
    }

    return gun;
  });

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      firearms: newFirearms } };
};
