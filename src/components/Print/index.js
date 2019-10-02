import { connect } from 'react-redux';
import Print from './component';

const mapStateToProps = state => ({
  characterStats: state.characterStats,
  combatStats: state.combatStats,
  gear: state.gear,

});

export default connect(mapStateToProps)(Print);
