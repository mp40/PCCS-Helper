import { connect } from 'react-redux';
import WeaponsCardSelectModal from './component';
import { addFirearm } from '../../actions';

const mapStateToProps = (state) => ({
  firearms: state.gear.firearms,
});

export default connect(mapStateToProps, { addFirearm })(WeaponsCardSelectModal);
