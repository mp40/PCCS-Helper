export const updateOpticReducer = (state, action) => {
  const { firearmToUpdate, optic } = action.payload;

  const newFirearmsArray = state.currentCharacter.firearms.map((gun) => {
    if (gun.name === firearmToUpdate) {
      return { ...gun, attachedOptic: optic };
    }

    return gun;
  });

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      firearms: newFirearmsArray } };
};
