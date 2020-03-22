import { modifyObjectQtyInArray } from '../../helpers/actionHelpers';
import { returnUpdatedWeightAndLaunchers } from '../reducerHelpers';

const updateLauncherAmmo = (arr, ammoClass) => arr.map((mag) => {
  if (ammoClass === mag.class) {
    const newMag = mag;
    newMag.qty += 1;
    return newMag;
  }
  return mag;
});

export const increaseLauncherAmmoReducer = (state, action) => {
  const updatedWeapon = action.payload.firearm;

  updatedWeapon.mag = updateLauncherAmmo(updatedWeapon.mag, action.payload.magazine.class);
  const newLauncherArray = modifyObjectQtyInArray(state.gear.launchers, updatedWeapon);
  return returnUpdatedWeightAndLaunchers(state, newLauncherArray);
};
