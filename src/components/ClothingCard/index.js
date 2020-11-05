import { connect } from 'react-redux';
import { changeUniform } from '../../actions';
import ClothingCard from './component';

import './ClothingCard.css';

const mapStateToProps = (state) => ({
  uniform: state.currentCharacter.uniform,
});

export default connect(mapStateToProps, { changeUniform })(ClothingCard);
