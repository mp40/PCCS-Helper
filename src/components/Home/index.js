import { connect } from 'react-redux';
import HomePage from './component';
import { viewCreateCharacter } from '../../actions';
import './Home.css';

export default connect(null, { viewCreateCharacter })(HomePage);
