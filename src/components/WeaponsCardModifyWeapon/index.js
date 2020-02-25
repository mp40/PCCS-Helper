import { connect } from 'react-redux';
import WeaponsCardModifyWeapon from './component';

import { removeFirearmModification,
  modifyFirearm,
  setPrimaryMagazine,
  addCustomMagazine,
  removeMagazine,
  replaceMagazine,
  removeAllModificationsFromFirearm } from '../../actions';

const mapStateToProps = (state) => ({
  gear: state.gear,
});

export default connect(mapStateToProps, {
  removeFirearmModification,
  modifyFirearm,
  setPrimaryMagazine,
  addCustomMagazine,
  removeMagazine,
  replaceMagazine,
  removeAllModificationsFromFirearm,
})(WeaponsCardModifyWeapon);
