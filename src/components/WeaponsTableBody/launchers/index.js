import { connect } from 'react-redux';

import {
  increaseLauncherQty,
  decreaseLauncherQty,
  removeLauncher,
  increaseLauncherAmmo,
  decreaseLauncherAmmo,
} from '../../../actions';

import Launchers from './component';

const mapStateToProps = (state) => ({
  launchers: state.currentCharacter.launchers,
});

export default connect(mapStateToProps, {
  increaseLauncherQty,
  decreaseLauncherQty,
  removeLauncher,
  increaseLauncherAmmo,
  decreaseLauncherAmmo,
})(Launchers);
