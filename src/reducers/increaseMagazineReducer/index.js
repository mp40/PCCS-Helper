import { modifyObjectQtyInArray } from '../../helpers/actionHelpers';
import { returnUpdatedWeightAndFirearms } from '../reducerHelpers';

export const increaseMagazineReducer = (state, action) => {
  const newGunObj = action.payload.firearm;

  newGunObj.mag = modifyObjectQtyInArray(newGunObj.mag, action.payload.magazine, 1);
  const newFirearmArray = modifyObjectQtyInArray(state.gear.firearms, newGunObj);

  const newTotalWeight = state.totalWeight + action.payload.magazine.weight;

  return returnUpdatedWeightAndFirearms(state, newTotalWeight, newFirearmArray);
};
