import { modifyObjectQtyInArray } from '../../helpers/actionHelpers';
import { returnUpdatedWeightAndLaunchers, increaseLauncherAmmo } from '../reducerHelpers';

export const increaseLauncherAmmoReducer = (state, action) => {
  const updatedWeapon = action.payload.weapon;

  updatedWeapon.mag = increaseLauncherAmmo(updatedWeapon.mag, action.payload.magazine.class);
  const newLauncherArray = modifyObjectQtyInArray(state.gear.launchers, updatedWeapon);
  return returnUpdatedWeightAndLaunchers(state, newLauncherArray);
};
