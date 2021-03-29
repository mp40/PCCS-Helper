import { connect } from 'react-redux';
import HomePage from './component';
import { viewCreateCharacter } from '../../actions';

export default connect(null, { viewCreateCharacter })(HomePage);
