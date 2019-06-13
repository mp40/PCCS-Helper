import { connect } from 'react-redux';
import { changeUniform } from '../../actions';
import ClothingCard from './component';

import './ClothingCard.css';


const mapStateToProps = state => ({
  gear: state.gear,
});

export default connect(mapStateToProps, { changeUniform })(ClothingCard);
