export const increaseLauncherAmmoReducer = (state, action) => {
  const { launcherToModify, magazineIndex } = action.payload;

  const newLaunchers = state.currentCharacter.launchers.map((launcher) => {
    if (launcher.name === launcherToModify) {
      const updatedMag = [...launcher.mag];
      updatedMag[magazineIndex].qty += 1;

      return { ...launcher, mag: updatedMag };
    }

    return launcher;
  });

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      launchers: newLaunchers } };
};
