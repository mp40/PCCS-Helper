import { connect } from 'react-redux';
import Print from './component';

import { selectCurrentView } from '../../actions';

export default connect(null, { selectCurrentView })(Print);
