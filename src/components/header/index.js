import { connect } from 'react-redux';
import NavBar from './component';

import { updateSavedCharacters } from '../../actions';

export default connect(null, { updateSavedCharacters })(NavBar);
