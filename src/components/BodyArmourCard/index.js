import { connect } from 'react-redux';
import BodyArmourCard from './component';

import { changeHelmet, changeVest } from '../../actions';

const mapStateToProps = (state) => ({
  helmet: state.currentCharacter.helmet || undefined,
  vest: state.currentCharacter.vest || undefined,
});

export default connect(mapStateToProps, { changeHelmet, changeVest })(BodyArmourCard);
