import { connect } from 'react-redux';
import ModifyCard from './component';
// import { removeAllWeapons } from '../../actions';

const mapStateToProps = (state) => ({
  firearms: state.currentCharacter.firearms,
});

export default connect(mapStateToProps, null)(ModifyCard);
