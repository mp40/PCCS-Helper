import { connect } from 'react-redux';
import GameSheet from './component';

import { selectKnockoutValue, selectHandCombatActions, selectGunCombatActions } from '../../selectors';

const mapStateToProps = (state) => ({
  name: state.currentCharacter.name,
  gunLevel: state.currentCharacter.gunLevel,
  handLevel: state.currentCharacter.handLevel,
  equipment: state.currentCharacter.equipment,
  firearms: state.currentCharacter.firearms,
  grenades: state.currentCharacter.grenades,
  helmet: state.currentCharacter.helmet,
  vest: state.currentCharacter.vest,
  gunCombatActions: selectGunCombatActions(state),
  handCombatActions: selectHandCombatActions(state),
  knockoutValue: selectKnockoutValue(state),
});

export default connect(mapStateToProps)(GameSheet);
