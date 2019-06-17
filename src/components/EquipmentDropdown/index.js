import { connect } from 'react-redux';
import { modifyEquipment, addEquipment } from '../../actions';
import EquipmentDropdown from './component';
import './EquipmentDropdown.css';


const mapStateToProps = state => ({
  currentView: state.currentView,
  totalWeight: state.totalWeight,
  characterStats: state.characterStats,
  gear: {
    equipment: state.gear.equipment,
  },
});

export default connect(mapStateToProps, { modifyEquipment, addEquipment })(EquipmentDropdown);
