export const replaceMagazineReducer = (state, action) => {
  const updatedFirearmsArray = state.gear.firearms.map((element) => {
    const gun = element;
    if (gun.name === action.payload.firearm) {
      gun.mag.map((ele) => {
        const mag = ele;
        if (
          mag.removed === true
        && mag.cap === action.payload.magazine.cap
        && mag.weight === action.payload.magazine.weight
        ) {
          mag.removed = false;
        }
        return mag;
      });
    }
    return gun;
  });
  return { ...state,
    gear: { ...state.gear,
      firearms: updatedFirearmsArray } };
};
