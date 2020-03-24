import { modifyObjectQtyInArray } from '../../helpers/actionHelpers';
import { returnUpdatedWeightAndLaunchers, decreaseLauncherAmmo } from '../reducerHelpers';

export const decreaseLauncherAmmoReducer = (state, action) => {
  const updatedWeapon = action.payload.weapon;

  updatedWeapon.mag = decreaseLauncherAmmo(updatedWeapon.mag, action.payload.magazine.class);
  const newLauncherArray = modifyObjectQtyInArray(state.gear.launchers, updatedWeapon);
  return returnUpdatedWeightAndLaunchers(state, newLauncherArray);
};
