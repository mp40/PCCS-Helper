import { connect } from 'react-redux';
import Helmet from './component';

import { changeHelmet } from '../../../actions';

const mapStateToProps = (state) => ({
  helmet: state.currentCharacter.helmet || undefined,
});

export default connect(mapStateToProps, { changeHelmet })(Helmet);
