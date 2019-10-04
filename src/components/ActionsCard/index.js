import { connect } from 'react-redux';
import ActionsCard from './component';

const mapStateToProps = state => ({
  combatStats: {
    baseSpeed: state.combatStats.baseSpeed,
    maxSpeed: state.combatStats.maxSpeed,
    damageBonus: state.combatStats.damageBonus,
    combatActions: state.combatStats.combatActions,
  },
});

export default connect(mapStateToProps)(ActionsCard);
