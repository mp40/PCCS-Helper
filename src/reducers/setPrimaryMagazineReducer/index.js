const getPrimaryMagazine = (magazineArray, indexOfPrimary) => magazineArray.splice(indexOfPrimary, 1)[0];

export const setPrimaryMagazineReducer = (state, action) => {
  let newTotalWeight = state.totalWeight;
  const updatedFirearmsArray = state.gear.firearms.map((element) => {
    const gun = element;
    if (gun.name === action.payload.firearm) {
      gun.weight -= gun.mag[0].weight;
      newTotalWeight -= gun.mag[0].weight;
      const primaryMag = getPrimaryMagazine(gun.mag, action.payload.magazine);
      gun.mag.unshift(primaryMag);
      gun.weight += gun.mag[0].weight;
      newTotalWeight += gun.mag[0].weight;
    }
    return gun;
  });

  return { ...state,
    totalWeight: Math.round(newTotalWeight * 1000) / 1000,
    gear: { ...state.gear,
      firearms: updatedFirearmsArray } };
};
