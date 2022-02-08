import { connect } from 'react-redux';
import LoadCharacterModal from './component';
import { hydrateCurrentCharacter } from '../../actions';

const mapStateToProps = (state) => ({
  savedCharacters: state.savedCharacters,
});

export default connect(mapStateToProps,
  {
    hydrateCurrentCharacter,
  },
)(LoadCharacterModal);
