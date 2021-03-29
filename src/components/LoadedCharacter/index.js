import { connect } from 'react-redux';
import LoadedCharacter from './component';

// mptodo
const mapStateToProps = (state) => ({
  currentCharacter: state.currentCharacter,
});

export default connect(mapStateToProps, null)(LoadedCharacter);
