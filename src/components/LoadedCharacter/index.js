import { connect } from 'react-redux';
import LoadedCharacter from './component';

import { selectCurrentView } from '../../actions';

import { selectKnockoutValue, selectGunCombatActions, selectHandCombatActions } from '../../selectors';

const mapStateToProps = (state) => ({
  name: state.currentCharacter.name,
  gunLevel: state.currentCharacter.gunLevel,
  gunCombatActions: selectGunCombatActions(state),
  handCombatActions: selectHandCombatActions(state),
  knockoutValue: selectKnockoutValue(state),
  helmet: state.currentCharacter.helmet,
  vest: state.currentCharacter.vest,
  firearms: state.currentCharacter.firearms,
  grenades: state.currentCharacter.grenades,
});

export default connect(mapStateToProps, { selectCurrentView })(LoadedCharacter);
