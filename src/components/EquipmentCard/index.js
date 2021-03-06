import { connect } from 'react-redux';
import EquipmentCard from './component';
import { removeEquipment,
  removeAllEquipment,
  increaseEquipmentQty,
  decreaseEquipmentQty } from '../../actions';

const mapStateToProps = (state) => ({
  equipment: state.currentCharacter.equipment,
});

export default connect(mapStateToProps, {
  removeEquipment,
  removeAllEquipment,
  increaseEquipmentQty,
  decreaseEquipmentQty,
})(EquipmentCard);
