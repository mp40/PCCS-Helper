import { connect } from 'react-redux';
import NameCard from './component';

import { changeCharacterName } from '../../actions';

const mapStateToProps = state => ({
  currentCharacter: state.currentCharacter,
});

export default connect(mapStateToProps, { changeCharacterName })(NameCard);
