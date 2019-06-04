import { connect } from 'react-redux';
import { updateAttributes } from '../../actions';
import CombatCard from './component';

const mapStateToProps = state => ({
  currentView: state.currentView,
  totalWeight: state.totalWeight,
  characterStats: state.characterStats,
});

export default connect(mapStateToProps, { updateAttributes })(CombatCard);
