import { connect } from 'react-redux';
import { addGrenade } from '../../actions';
import GrenadeSelectModal from './component';

const mapStateToProps = (state) => ({
  grenades: state.gear.grenades,
});

export default connect(mapStateToProps, { addGrenade })(GrenadeSelectModal);
