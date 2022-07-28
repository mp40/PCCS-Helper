import { connect } from 'react-redux';
import ModifyCard from './component';

const mapStateToProps = (state) => ({
  firearms: state.currentCharacter.firearms,
});

export default connect(mapStateToProps, null)(ModifyCard);
