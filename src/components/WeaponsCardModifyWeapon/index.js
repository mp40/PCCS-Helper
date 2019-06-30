import { connect } from 'react-redux';
import WeaponsCardModifyWeapon from './component';
import { removeFirearmModification } from '../../actions';

const mapStateToProps = state => ({
  gear: state.gear,
});

export default connect(mapStateToProps, { removeFirearmModification })(WeaponsCardModifyWeapon);

// components/WeaponsCardModifyWeapon/index.jsx
