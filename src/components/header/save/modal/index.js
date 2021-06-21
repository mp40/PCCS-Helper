import { connect } from 'react-redux';
import HeaderSaveModal from './component';

import { addSavedCharacter, updateSavedCharacter } from '../../../../actions';

const mapStateToProps = (state) => ({
  currentCharacter: state.currentCharacter,
  characters: state.savedCharacters,
});

export default connect(mapStateToProps, { addSavedCharacter, updateSavedCharacter })(HeaderSaveModal);
