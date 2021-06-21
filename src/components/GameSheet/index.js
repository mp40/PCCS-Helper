import { connect } from 'react-redux';
import GameSheet from './component';

import { selectCurrentView } from '../../actions';

import {selectCombatStats, selectKnockoutValue} from '../../selectors';

const mapStateToProps = (state) => ({
  name: state.currentCharacter.name,
  characterStats: {
    str: state.currentCharacter.str,
    int: state.currentCharacter.int,
    hlt: state.currentCharacter.hlt,
    wil: state.currentCharacter.wil,
    agi: state.currentCharacter.agi,
    gunLevel: state.currentCharacter.gunLevel,
    handLevel: state.currentCharacter.handLevel,
  },
  // combatStats: {
  //     baseSpeed: state.currentCharacter.baseSpeed,
  //     maxSpeed: state.currentCharacter.maxSpeed,
  //   SAL: state.currentCharacter.SAL,
  //   CE: state.currentCharacter.CE,
  //   ISF: state.currentCharacter.ISF,
  //   ASF: state.currentCharacter.ASF,
  //   knockoutValue: state.currentCharacter.knockoutValue,
  //     damageBonus: state.currentCharacter.damageBonus,
  //     gunCombatActions: state.currentCharacter.gunCombatActions,
  //     handCombatActions: state.currentCharacter.handCombatActions,
  // },
  combatStats: {
    ...selectCombatStats(state),
    knockoutValue: selectKnockoutValue(state),
    //calc in sheet
  // SAL: state.currentCharacter.SAL,
  // CE: state.currentCharacter.CE,
  // ISF: state.currentCharacter.ISF,
  // ASF: state.currentCharacter.ASF,
},
  gear: {
    uniform: state.currentCharacter.uniform,
    equipment: state.currentCharacter.equipment,
    firearms: state.currentCharacter.firearms,
    grenades: state.currentCharacter.grenades,
    launchers: state.currentCharacter.launchers,
    helmet: state.currentCharacter.helmet,
    vest: state.currentCharacter.vest,
  },

});
export default connect(mapStateToProps, { selectCurrentView })(GameSheet);
