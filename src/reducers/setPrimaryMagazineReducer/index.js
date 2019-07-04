const findIndexOfFirearmToSetPrimary = (firearmArray, firearm) => firearmArray.findIndex(
  element => element.name === firearm,
);

const findIndexOfNewPrimary = (magazineArray, magazine) => magazineArray.findIndex(
  element => element.cap === magazine.cap && element.weight === magazine.weight,
);

const getPrimaryMagazine = (magazineArray, indexOfPrimary) => magazineArray.splice(indexOfPrimary, 1)[0];

export const setPrimaryMagazineReducer = (state, action) => {
  const indexOfFirearmToSetPrimary = findIndexOfFirearmToSetPrimary(state.gear.firearms, action.payload.firearm);

  const indexOfNewPrimary = findIndexOfNewPrimary(
    state.gear.firearms[indexOfFirearmToSetPrimary].mag, action.payload.magazine,
  );

  const updatedFirearmsArray = state.gear.firearms;

  const primaryMag = getPrimaryMagazine(updatedFirearmsArray[indexOfFirearmToSetPrimary].mag, indexOfNewPrimary);

  updatedFirearmsArray[indexOfFirearmToSetPrimary].mag.unshift(primaryMag);

  return { ...state,
    gear: { ...state.gear,
      firearms: updatedFirearmsArray } };
};
