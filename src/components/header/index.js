import { connect } from 'react-redux';
import NavBar from './component';

import { selectCurrentView, updateSavedCharacters } from '../../actions';

const mapStateToProps = (state) => ({
  currentView: state.currentView,
});

export default connect(mapStateToProps, { selectCurrentView, updateSavedCharacters })(NavBar);
