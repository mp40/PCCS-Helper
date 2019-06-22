import { connect } from 'react-redux';
import WeaponsCardSelectModal from './component';
import { addFirearm } from '../../actions';

const mapStateToProps = state => ({
  gear: state.gear,
});

export default connect(mapStateToProps, { addFirearm })(WeaponsCardSelectModal);
