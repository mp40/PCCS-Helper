import { connect } from 'react-redux';
import NameCardModal from './component';

import { changeCharacterName } from '../../../actions';

export default connect(null, { changeCharacterName })(NameCardModal);
