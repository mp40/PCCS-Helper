import { connect } from 'react-redux';
import { addEquipment } from '../../actions';
import EquipmentDropdown from './component';
import './EquipmentDropdown.css';


const mapStateToProps = (state) => ({
  gear: {
    equipment: state.gear.equipment,
  },
});

export default connect(mapStateToProps, { addEquipment })(EquipmentDropdown);