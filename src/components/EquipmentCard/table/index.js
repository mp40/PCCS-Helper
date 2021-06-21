import { connect } from 'react-redux';
import EquipmentCardTable from './component';

import { removeEquipment,
  increaseEquipmentQty,
  decreaseEquipmentQty } from '../../../actions';

import { selectTotalWeightOfEquipment } from '../../../selectors';

const mapStateToProps = (state) => ({
  totalEquipmentWeight: selectTotalWeightOfEquipment(state),
});

export default connect(mapStateToProps, {
  removeEquipment,
  increaseEquipmentQty,
  decreaseEquipmentQty,
})(EquipmentCardTable);
