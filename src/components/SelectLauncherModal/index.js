import { connect } from 'react-redux';
import SelectLauncherModal from './component';
import { addLauncher } from '../../actions';

export default connect(null, { addLauncher })(SelectLauncherModal);
