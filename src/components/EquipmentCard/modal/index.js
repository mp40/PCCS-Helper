import { connect } from 'react-redux';
import { addEquipment } from '../../../actions';
import EquipmentModal from './component';
// import './EquipmentDropdown.css';

// const mapStateToProps = (state) => ({
//   // gear: {
//   //   equipment: state.currentCharacter.equipment,
//   // },
// });

// export default connect(mapStateToProps, { addEquipment })(EquipmentDropdown);

export default connect(null, { addEquipment })(EquipmentModal);
