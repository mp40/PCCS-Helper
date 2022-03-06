import { connect } from 'react-redux';
import BodyArmourCard from './component';

const mapStateToProps = (state) => ({
  helmet: state.currentCharacter.helmet || undefined,
  vest: state.currentCharacter.vest || undefined,
});

export default connect(mapStateToProps)(BodyArmourCard);
