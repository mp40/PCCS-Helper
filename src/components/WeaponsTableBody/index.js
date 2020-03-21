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
} from '../../actions';
import WeaponsTableBody from './component';

export default connect(null, {
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
})(WeaponsTableBody);
