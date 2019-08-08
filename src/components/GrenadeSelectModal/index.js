import { connect } from 'react-redux';
import { addGrenade } from '../../actions';
import GrenadeSelectModal from './component';


// const mapStateToProps = state => ({
//   gear: {
//     equipment: state.gear.equipment,
//   },
// });

export default connect(null, { addGrenade })(GrenadeSelectModal);
