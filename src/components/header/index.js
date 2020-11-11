import { connect } from 'react-redux';
import NavBar from './component';

import { selectCurrentView } from '../../actions';

const mapStateToProps = (state) => ({
  currentView: state.currentView,
  totalWeight: state.currentCharacter.totalWeight,
});

export default connect(mapStateToProps, { selectCurrentView })(NavBar);
