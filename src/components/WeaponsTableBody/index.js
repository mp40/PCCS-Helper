import { connect } from 'react-redux';

import {
  removeGrenade,
  increaseGrenadeQty,
  decreaseGrenadeQty,
  removeFirearm,
  increaseFirearmQty,
  decreaseFirearmQty,
  increaseMagazineQty,
  decreaseMagazineQty,
  increaseLauncherQty,
  decreaseLauncherQty,
  removeLauncher,
  increaseLauncherAmmo,
  decreaseLauncherAmmo,
  increaseUnderslungLauncherAmmo,
  decreaseUnderslungLauncherAmmo,
} from '../../actions';

import { selectTotalWeightOfFirearms } from '../../selectors';

import WeaponsTableBody from './component';
// const mapStateToProps = (state) => ({
//   firearms: state.currentCharacter.firearms,
// });

// export const increaseUnderslungLauncherAmmo = (launcherAndAmmoType) => ({
//   type: 'UNDERSLUNG_LAUNCHER_AMMO_QTY_INCREASED',
//   payload: launcherAndAmmoType,
// });

// export const decreaseUnderslungLauncherAmmo = (launcherAndAmmoType) => ({
//   type: 'UNDERSLUNG_LAUNCHER_AMMO_QTY_DECREASED',
//   payload: launcherAndAmmoType,
// });

const mapStateToProps = (state) => ({
  totalFirearmWeight: selectTotalWeightOfFirearms(state),
});

export default connect(mapStateToProps, {
  removeGrenade,
  increaseGrenadeQty,
  decreaseGrenadeQty,
  removeFirearm,
  increaseFirearmQty,
  decreaseFirearmQty,
  increaseMagazineQty,
  decreaseMagazineQty,
  increaseLauncherQty,
  decreaseLauncherQty,
  removeLauncher,
  increaseLauncherAmmo,
  decreaseLauncherAmmo,
  increaseUnderslungLauncherAmmo,
  decreaseUnderslungLauncherAmmo,
})(WeaponsTableBody);
