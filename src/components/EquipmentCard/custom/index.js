import { connect } from 'react-redux';
import { addEquipment } from '../../../actions';
import CustomEquipment from './component';

export default connect(null, { addEquipment })(CustomEquipment);
