import { connect } from 'react-redux';
import NavBar from './component';
import './NavBar.css';

const mapStateToProps = state => ({
  currentView: state.currentView,
  totalWeight: state.totalWeight,
});

export default connect(mapStateToProps)(NavBar);
