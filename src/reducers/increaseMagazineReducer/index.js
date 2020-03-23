import { modifyObjectQtyInArray } from '../../helpers/actionHelpers';
import { returnUpdatedWeightAndFirearms } from '../reducerHelpers';

export const increaseMagazineReducer = (state, action) => {
  const newGunObj = action.payload.weapon;

  newGunObj.mag = modifyObjectQtyInArray(newGunObj.mag, action.payload.magazine, 1);
  const newFirearmArray = modifyObjectQtyInArray(state.gear.firearms, newGunObj);

  return returnUpdatedWeightAndFirearms(state, newFirearmArray);
};
