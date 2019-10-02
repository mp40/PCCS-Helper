import { connect } from 'react-redux';
import GameSheet from './component';

const mapStateToProps = state => ({
  characterStats: state.characterStats,
  combatStats: state.combatStats,
  gear: state.gear,

});

export default connect(mapStateToProps)(GameSheet);
