import { connect } from 'react-redux';
import Helmet from './component';

import { changeHelmet } from '../../../actions';

export default connect(null, { changeHelmet })(Helmet);
