export const addCustomMagazineReducer = (state, action) => {
  const updatedFirearmsArray = state.gear.firearms.map((element) => {
    const gun = element;
    if (gun.name === action.payload.firearm) {
      gun.mag = [...gun.mag, action.payload.magazine];
    }
    return gun;
  });

  return { ...state,
    gear: { ...state.gear,
      firearms: updatedFirearmsArray } };
};
