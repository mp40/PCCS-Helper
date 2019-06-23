import { modifyObjectQtyInArray } from '../../helpers/actionHelpers';

export const increaseMagazineReducer = (state, action) => {
  const newGunObj = action.payload.firearm;

  newGunObj.mag = modifyObjectQtyInArray(newGunObj.mag, action.payload.magazine, 1);
  const newGunArray = modifyObjectQtyInArray(state.gear.firearms, newGunObj);

  const newWeight = state.totalWeight + action.payload.magazine.weight;

  return { ...state,
    totalWeight: Math.round(newWeight * 1000) / 1000,
    gear: { ...state.gear,
      firearms: [...newGunArray] } };
};
