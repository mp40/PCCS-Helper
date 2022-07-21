import { connect } from 'react-redux';
import LoadedCharacter from './component';
import { parseFirearmsForMelee, parseEquipmentForMelee } from '../../helpers/melee';

import { selectKnockoutValue, selectGunCombatActions, selectHandCombatActions } from '../../selectors';

const mapStateToProps = (state) => ({
  name: state.currentCharacter.name,
  gunLevel: state.currentCharacter.gunLevel,
  handLevel: state.currentCharacter.handLevel,
  gunCombatActions: selectGunCombatActions(state),
  handCombatActions: selectHandCombatActions(state),
  knockoutValue: selectKnockoutValue(state),
  helmet: state.currentCharacter.helmet,
  vest: state.currentCharacter.vest,
  firearms: state.currentCharacter.firearms,
  grenades: state.currentCharacter.grenades,
  launchers: state.currentCharacter.launchers,
  melee: [
    ...parseFirearmsForMelee(state.currentCharacter.firearms),
    ...parseEquipmentForMelee(state.currentCharacter.equipment),
  ],
});

export default connect(mapStateToProps, null)(LoadedCharacter);
