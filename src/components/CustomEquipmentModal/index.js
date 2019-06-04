import { connect } from 'react-redux';
import { modifyEquipment } from '../../actions';
import CustomEquipmentModal from './component';

import './CustomEquipmentModal.css';

const mapStateToProps = state => ({
  totalWeight: state.totalWeight,
  characterStats: state.characterStats,
  gear: state.gear,
});

export default connect(mapStateToProps, { modifyEquipment })(CustomEquipmentModal);
