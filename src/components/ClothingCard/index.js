import { connect } from 'react-redux';
import ClothingCard from './component';

const mapStateToProps = (state) => ({
  uniform: state.currentCharacter.uniform,
});

export default connect(mapStateToProps, null)(ClothingCard);
