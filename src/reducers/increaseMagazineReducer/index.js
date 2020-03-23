import { modifyObjectQtyInArray } from '../../helpers/actionHelpers';
import { returnUpdatedWeightAndFirearms } from '../reducerHelpers';

const updateLauncherAmmo = (arr, ammoClass) => arr.map((mag) => {
  if (ammoClass === mag.class) {
    const newMag = mag;
    newMag.qty += 1;
    return newMag;
  }
  return mag;
});

export const increaseMagazineReducer = (state, action) => {
  const newGunObj = action.payload.weapon;

  newGunObj.mag = action.payload.magazine.class
    ? updateLauncherAmmo(newGunObj.mag, action.payload.magazine.class)
    : modifyObjectQtyInArray(newGunObj.mag, action.payload.magazine, 1);

  const newFirearmArray = modifyObjectQtyInArray(state.gear.firearms, newGunObj);

  return returnUpdatedWeightAndFirearms(state, newFirearmArray);
};
