export const removeOpticReducer = (state, action) => {
  const firearmToUpdate = action.payload;

  const newFirearmsArray = state.currentCharacter.firearms.map((gun) => {
    if (gun.name === firearmToUpdate) {
      const updatedGun = { ...gun };
      delete updatedGun.attachedOptic;

      return updatedGun;
    }

    return gun;
  });

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      firearms: newFirearmsArray } };
};
