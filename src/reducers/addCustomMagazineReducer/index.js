export const addCustomMagazineReducer = (state, action) => {
  const { firearmToUpdate, magazine } = action.payload;

  const updatedFirearmsArray = state.currentCharacter.firearms.map((gun) => {
    if (gun.name === firearmToUpdate) {
      return { ...gun, mag: [...gun.mag, { ...magazine }] };
    }
    return gun;
  });

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      firearms: updatedFirearmsArray } };
};
