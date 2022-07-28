import { connect } from 'react-redux';
import Launchers from './component';

import { updateUnderslungLauncher, removeUnderslungLauncher } from '../../../../actions';

export default connect(null, { updateUnderslungLauncher, removeUnderslungLauncher })(Launchers);
