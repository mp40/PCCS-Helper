import { connect } from 'react-redux';
import HomePage from './component';
import { selectCurrentView } from '../../actions';
import './Home.css';


const mapStateToProps = state => ({
  currentView: state.currentView,
  totalWeight: state.totalWeight,
  gear: state.gear,
});

export default connect(mapStateToProps, { selectCurrentView })(HomePage);
