import { connect } from 'react-redux';
import WeaponsCard from './component';
import { removeAllFirearms } from '../../actions';
import './WeaponsCard.css';

const mapStateToProps = (state) => ({
  firearms: state.currentCharacter.firearms,
  grenades: state.currentCharacter.grenades,
  launchers: state.currentCharacter.launchers,
});

export default connect(mapStateToProps, { removeAllFirearms })(WeaponsCard);
