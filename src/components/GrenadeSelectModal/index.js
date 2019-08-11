import { connect } from 'react-redux';
import { addGrenade } from '../../actions';
import GrenadeSelectModal from './component';

export default connect(null, { addGrenade })(GrenadeSelectModal);
