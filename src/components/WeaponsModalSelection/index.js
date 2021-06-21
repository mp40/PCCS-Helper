import { connect } from 'react-redux';
import WeaponsModalSelection from './component';
import { addFirearm } from '../../actions';

const mapStateToProps = (state) => ({
  firearms: state.currentCharacter.firearms,
});

export default connect(mapStateToProps, { addFirearm })(WeaponsModalSelection);
