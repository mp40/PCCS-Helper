import { connect } from 'react-redux';
import ActionsCard from './component';

const mapStateToProps = (state) => ({
  gunCombatActions: state.currentCharacter.gunCombatActions,
  handCombatActions: state.currentCharacter.handCombatActions,
});

export default connect(mapStateToProps)(ActionsCard);
