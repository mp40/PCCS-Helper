import { connect } from 'react-redux';
import GameSheet from './component';
import { selectCurrentView } from '../../actions';

// const mapStateToProps = (state) => ({
//   currentCharacter: state.currentCharacter,
//   characterStats: state.characterStats,
//   combatStats: state.combatStats,
//   gear: state.gear,

// });
// mptodo check this shit and maybe refactor

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
  combatStats: {
    baseSpeed: state.currentCharacter.baseSpeed,
    maxSpeed: state.currentCharacter.maxSpeed,
    SAL: state.currentCharacter.SAL,
    CE: state.currentCharacter.CE,
    ISF: state.currentCharacter.ISF,
    ASF: state.currentCharacter.ASF,
    knockoutValue: state.currentCharacter.knockoutValue,
    damageBonus: state.currentCharacter.damageBonus,
    gunCombatActions: state.currentCharacter.gunCombatActions,
    handCombatActions: state.currentCharacter.handCombatActions,
  },
  gear: {
    uniform: state.currentCharacter.uniform,
    equipment: state.currentCharacter.equipment,
    firearms: state.currentCharacter.firearms,
    grenades: state.currentCharacter.grenades,
    launchers: state.currentCharacter.launchers,
  },

});

export default connect(mapStateToProps, { selectCurrentView })(GameSheet);
