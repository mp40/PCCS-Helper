import { connect } from 'react-redux';
import App from './component';

import { updateSavedCharacters } from '../../actions';

export default connect(null, { updateSavedCharacters })(App);
