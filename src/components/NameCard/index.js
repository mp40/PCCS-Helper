import { connect } from 'react-redux';
import NameCard from './component';

import { changeCharacterName } from '../../actions';

const mapStateToProps = (state) => ({
  name: state.currentCharacter.name,
});

export default connect(mapStateToProps, { changeCharacterName })(NameCard);
