import { modifyObjectQtyInArray } from '../../helpers/actionHelpers';
import { returnUpdatedWeightAndFirearms, increaseLauncherAmmo } from '../reducerHelpers';

export const increaseMagazineReducer = (state, action) => {
  const newGunObj = action.payload.weapon;

  newGunObj.mag = action.payload.magazine.class
    ? increaseLauncherAmmo(newGunObj.mag, action.payload.magazine.class)
    : modifyObjectQtyInArray(newGunObj.mag, action.payload.magazine, 1);

  const newFirearmArray = modifyObjectQtyInArray(state.gear.firearms, newGunObj);

  return returnUpdatedWeightAndFirearms(state, newFirearmArray);
};
