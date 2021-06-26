import { connect } from 'react-redux';
import GameSheet from './component';

import { selectCurrentView } from '../../actions';

import { selectKnockoutValue, selectHandCombatActions, selectGunCombatActions } from '../../selectors';

const mapStateToProps = (state) => ({
  name: state.currentCharacter.name,
  str: state.currentCharacter.str,
  int: state.currentCharacter.int,
  hlt: state.currentCharacter.hlt,
  wil: state.currentCharacter.wil,
  agi: state.currentCharacter.agi,
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

export default connect(mapStateToProps, { selectCurrentView })(GameSheet);
