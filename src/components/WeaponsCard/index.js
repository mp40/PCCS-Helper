import { connect } from 'react-redux';
import WeaponsCard from './component';
import { removeAllWeapons } from '../../actions';

const mapStateToProps = (state) => ({
  firearms: state.currentCharacter.firearms,
  grenades: state.currentCharacter.grenades,
  launchers: state.currentCharacter.launchers,
});

export default connect(mapStateToProps, { removeAllWeapons })(WeaponsCard);
