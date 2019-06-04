import { connect } from 'react-redux';
import WeaponsCardSelectModal from './component';
import { modifyFirearmList } from '../../actions';

const mapStateToProps = state => ({
  totalWeight: state.totalWeight,
  characterStats: state.characterStats,
  gear: state.gear,
});

export default connect(mapStateToProps, { modifyFirearmList })(WeaponsCardSelectModal);
