import { connect } from 'react-redux';
import EquipmentCard from './component';
import { modifyEquipment, updateAttributes, removeEquipment } from '../../actions';

const mapStateToProps = state => ({
  totalWeight: state.totalWeight,
  characterStats: state.characterStats,
  gear: state.gear,
});


export default connect(mapStateToProps, { modifyEquipment, updateAttributes, removeEquipment })(EquipmentCard);
