import { connect } from 'react-redux';
import GameSheet from './component';
import { selectCurrentView } from '../../actions';

const mapStateToProps = state => ({
  characterStats: state.characterStats,
  combatStats: state.combatStats,
  gear: state.gear,

});

export default connect(mapStateToProps, { selectCurrentView })(GameSheet);
