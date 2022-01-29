import { connect } from 'react-redux';
import SelectLauncherModal from './component';
import { addLauncher } from '../../actions';

const mapStateToProps = (state) => ({
  launchers: state.currentCharacter.launchers,
});

export default connect(mapStateToProps, { addLauncher })(SelectLauncherModal);
