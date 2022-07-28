import { connect } from 'react-redux';
import Vest from './component';

import { changeVest } from '../../../actions';

export default connect(null, { changeVest })(Vest);
