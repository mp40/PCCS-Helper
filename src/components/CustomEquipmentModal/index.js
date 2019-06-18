import { connect } from 'react-redux';
import { addEquipment } from '../../actions';
import CustomEquipmentModal from './component';

import './CustomEquipmentModal.css';

const mapStateToProps = state => ({
  gear: state.gear,
});

export default connect(mapStateToProps, { addEquipment })(CustomEquipmentModal);
