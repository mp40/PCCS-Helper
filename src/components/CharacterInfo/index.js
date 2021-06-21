import { connect } from 'react-redux';
import CharacterInfo from './component';

import { selectKnockoutValue, selectMovementAndDamageBonus } from '../../selectors';

const mapStateToProps = (state) => ({
  gunLevel: state.currentCharacter.gunLevel,
  handLevel: state.currentCharacter.handLevel,
  knockoutValue: selectKnockoutValue(state),
  ...selectMovementAndDamageBonus(state),
});

export default connect(mapStateToProps)(CharacterInfo);
