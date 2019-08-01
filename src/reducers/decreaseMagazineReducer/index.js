import { modifyObjectQtyInArray } from '../../helpers/actionHelpers';
import { returnUpdatedWeightAndFirearms } from '../reducerHelpers';

export const decreaseMagazineReducer = (state, action) => {
  const newGunObj = action.payload.firearm;

  newGunObj.mag = modifyObjectQtyInArray(newGunObj.mag, action.payload.magazine, -1);
  const newFirearmArray = modifyObjectQtyInArray(state.gear.firearms, newGunObj);

  return returnUpdatedWeightAndFirearms(state, newFirearmArray);
};
