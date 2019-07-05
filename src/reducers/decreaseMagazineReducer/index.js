import { modifyObjectQtyInArray } from '../../helpers/actionHelpers';
import { correctFloatingPoint } from '../reducerHelpers';

export const decreaseMagazineReducer = (state, action) => {
  const newGunObj = action.payload.firearm;

  newGunObj.mag = modifyObjectQtyInArray(newGunObj.mag, action.payload.magazine, -1);
  const newFirearmsArray = modifyObjectQtyInArray(state.gear.firearms, newGunObj);
  const newTotalWeight = state.totalWeight - action.payload.magazine.weight;

  return { ...state,
    totalWeight: correctFloatingPoint(newTotalWeight),
    gear: { ...state.gear,
      firearms: [...newFirearmsArray] } };
};
