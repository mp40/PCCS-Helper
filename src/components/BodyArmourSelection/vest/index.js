import { connect } from 'react-redux';
import Vest from './component';

import { changeVest } from '../../../actions';

const mapStateToProps = (state) => ({
  vest: state.currentCharacter.vest || undefined,
});

export default connect(mapStateToProps, { changeVest })(Vest);
