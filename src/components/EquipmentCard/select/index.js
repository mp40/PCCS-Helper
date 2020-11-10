import { connect } from 'react-redux';
import { addEquipment } from '../../../actions';
import EquipmentModal from './component';

export default connect(null, { addEquipment })(EquipmentModal);
