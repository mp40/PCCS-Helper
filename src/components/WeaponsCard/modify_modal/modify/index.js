import { connect } from 'react-redux';
import FirearmModify from './component';

import { removeFirearmModification,
  modifyFirearm,
  setPrimaryMagazine,
  addCustomMagazine,
  removeMagazine,
  replaceMagazine,
  removeAllModificationsFromFirearm } from '../../../../actions';

const mapStateToProps = (state) => ({
  firearms: state.currentCharacter.firearms,
});

export default connect(mapStateToProps, {
  removeFirearmModification,
  modifyFirearm,
  setPrimaryMagazine,
  addCustomMagazine,
  removeMagazine,
  replaceMagazine,
  removeAllModificationsFromFirearm,
})(FirearmModify);
