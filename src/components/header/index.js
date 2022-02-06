import { connect } from 'react-redux';
import NavBar from './component';

import { updateSavedCharacters } from '../../actions';

const mapStateToProps = (state) => ({
  currentView: state.currentView,
});

export default connect(mapStateToProps, { updateSavedCharacters })(NavBar);
