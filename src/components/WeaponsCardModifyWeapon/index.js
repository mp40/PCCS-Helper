import { connect } from 'react-redux';
import WeaponsCardModifyWeapon from './component';
import { removeFirearmModification, modifyFirearm } from '../../actions';

const mapStateToProps = state => ({
  gear: state.gear,
});

export default connect(mapStateToProps, { removeFirearmModification, modifyFirearm })(WeaponsCardModifyWeapon);
