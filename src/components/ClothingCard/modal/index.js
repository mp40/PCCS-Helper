import { connect } from 'react-redux';
import { changeUniform } from '../../../actions';
import SelectUniformModal from './component';

export default connect(null, { changeUniform })(SelectUniformModal);
