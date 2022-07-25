import { connect } from 'react-redux';
import Optics from './component';

import { updateOptic, removeOptic } from '../../../../actions';

export default connect(null, { updateOptic, removeOptic })(Optics);
