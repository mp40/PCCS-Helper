import { connect } from 'react-redux';
import ModifyFirearmModal from './component';
import { removeAllModificationsFromFirearm } from '../../actions';

const mapStateToProps = (state) => ({
  gear: state.gear,
});

export default connect(mapStateToProps, { removeAllModificationsFromFirearm })(ModifyFirearmModal);

//mptodo -> do I need gear