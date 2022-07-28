import { connect } from 'react-redux';

import {
  removeFirearm,
  increaseFirearmQty,
  decreaseFirearmQty,
  increaseMagazineQty,
  decreaseMagazineQty,
  increaseUnderslungLauncherAmmo,
  decreaseUnderslungLauncherAmmo,
} from '../../../actions';

import Firearms from './component';

const mapStateToProps = (state) => ({
  firearms: state.currentCharacter.firearms,
});

export default connect(mapStateToProps, {
  removeFirearm,
  increaseFirearmQty,
  decreaseFirearmQty,
  increaseMagazineQty,
  decreaseMagazineQty,
  increaseUnderslungLauncherAmmo,
  decreaseUnderslungLauncherAmmo,
})(Firearms);
