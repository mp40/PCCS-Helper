import { connect } from 'react-redux';
import ActionsCard from './component';

const mapStateToProps = (state) => ({
  combatStats: {
    baseSpeed: state.currentCharacter.baseSpeed,
    maxSpeed: state.currentCharacter.maxSpeed,
    damageBonus: state.currentCharacter.damageBonus,
    gunCombatActions: state.currentCharacter.gunCombatActions,
    handCombatActions: state.currentCharacter.handCombatActions,
  },
});

export default connect(mapStateToProps)(ActionsCard);
