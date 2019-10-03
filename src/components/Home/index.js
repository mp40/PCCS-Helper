import { connect } from 'react-redux';
import HomePage from './component';
import { selectCurrentView } from '../../actions';
import './Home.css';

export default connect(null, { selectCurrentView })(HomePage);
