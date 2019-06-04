import { connect } from 'react-redux';
import { updateWeight, updateAttributes } from '../../actions';
import CharacterGeneration from './component';

import './CharacterGeneration.css';

export default connect(null, { updateWeight, updateAttributes })(CharacterGeneration);
