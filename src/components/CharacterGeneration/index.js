import { connect } from 'react-redux';
import { selectCurrentView } from '../../actions';
import CharacterGeneration from './component';

const mapStateToProps = (state) => ({
  totalWeight: state.currentCharacter.totalWeight,
});

export default connect(mapStateToProps, { selectCurrentView })(CharacterGeneration);
