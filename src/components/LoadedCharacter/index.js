import { connect } from 'react-redux';
import LoadedCharacter from './component';

import { selectCurrentView } from '../../actions';

const mapStateToProps = (state) => ({
  currentCharacter: state.currentCharacter,
});

export default connect(mapStateToProps, { selectCurrentView })(LoadedCharacter);
