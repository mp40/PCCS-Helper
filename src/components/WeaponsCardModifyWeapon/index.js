import { connect } from 'react-redux';
import WeaponsCardModifyWeapon from './component';

import { removeFirearmModification,
  modifyFirearm,
  setPrimaryMagazine,
  addCustomMagazine,
  removeMagazine,
  replaceMagazine,
  removeAllModificationsFromFirearm } from '../../actions';

// mptodo - check this shit
// const mapStateToProps = (state) => ({
//   gear: state.gear,
// });

export default connect(null, {
  removeFirearmModification,
  modifyFirearm,
  setPrimaryMagazine,
  addCustomMagazine,
  removeMagazine,
  replaceMagazine,
  removeAllModificationsFromFirearm,
})(WeaponsCardModifyWeapon);
