import { connect } from 'react-redux';
import CharacterInfo from './component';

const mapStateToProps = (state) => ({
  gunLevel: state.currentCharacter.gunLevel,
  handLevel: state.currentCharacter.handLevel,
  baseSpeed: state.currentCharacter.baseSpeed,
  maxSpeed: state.currentCharacter.maxSpeed,
  knockoutValue: state.currentCharacter.knockoutValue,
  damageBonus: state.currentCharacter.damageBonus,
});

export default connect(mapStateToProps)(CharacterInfo);
