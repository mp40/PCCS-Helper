import { modifyObjectQtyInArray } from '../../helpers/actionHelpers';
import { returnUpdatedWeightAndFirearms, decreaseLauncherAmmo } from '../reducerHelpers';

export const decreaseMagazineReducer = (state, action) => {
  const newGunObj = action.payload.weapon;

  newGunObj.mag = action.payload.magazine.class
    ? decreaseLauncherAmmo(newGunObj.mag, action.payload.magazine.class)
    : modifyObjectQtyInArray(newGunObj.mag, action.payload.magazine, -1);

  const newFirearmArray = modifyObjectQtyInArray(state.gear.firearms, newGunObj);

  return returnUpdatedWeightAndFirearms(state, newFirearmArray);
};
