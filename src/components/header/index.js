import { connect } from 'react-redux';
import NavBar from './component';

const mapStateToProps = (state) => ({
  currentView: state.currentView,
  totalWeight: state.currentCharacter.totalWeight,
});

export default connect(mapStateToProps)(NavBar);
