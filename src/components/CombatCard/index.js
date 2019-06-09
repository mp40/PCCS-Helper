import { connect } from 'react-redux';
import { modifyGunCombatLevel, modifyMeleeCombatLevel } from '../../actions';
import CombatCard from './component';

// call action here

const mapStateToProps = state => ({
  characterStats: state.characterStats,
});

export default connect(mapStateToProps, { modifyGunCombatLevel, modifyMeleeCombatLevel })(CombatCard);
