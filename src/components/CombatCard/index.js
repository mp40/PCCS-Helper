import { connect } from 'react-redux';
import { modifyGunCombatLevel, modifyMeleeCombatLevel } from '../../actions';

import CombatCard from './component';

const mapStateToProps = (state) => ({
  gunLevel: state.currentCharacter.gunLevel,
  handLevel: state.currentCharacter.handLevel,
});

export default connect(mapStateToProps, { modifyGunCombatLevel, modifyMeleeCombatLevel })(CombatCard);
