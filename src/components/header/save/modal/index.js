import { connect } from 'react-redux';
import HeaderSaveModal from './component';

const mapStateToProps = (state) => ({
  currentCharacter: state.currentCharacter,
  characters: state.savedCharacters,
});

export default connect(mapStateToProps)(HeaderSaveModal);
