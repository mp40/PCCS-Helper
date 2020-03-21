import { connect } from 'react-redux';
import SelectLauncherModal from './component';
import { addLauncher } from '../../actions';

// const mapStateToProps = (state) => ({
//   currentView: state.currentView,
//   totalWeight: state.totalWeight,
// });

export default connect(null, { addLauncher })(SelectLauncherModal);

// export default connect(mapStateToProps, { addLauncher })(SelectLauncherModal);
