import { connect } from 'react-redux';
import LoadCharacterModal from './component';
import { selectCurrentView, hydrateCurrentCharacter } from '../../actions';

const mapStateToProps = (state) => ({
  savedCharacters: state.savedCharacters,
});

export default connect(mapStateToProps,
  {
    selectCurrentView,
    hydrateCurrentCharacter,
  },
)(LoadCharacterModal);
