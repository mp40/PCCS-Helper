import { connect } from 'react-redux';
import { changeHelmet, changeVest } from '../../actions';
import BodyArmourCard from './component';

const mapStateToProps = state => ({
  helmet: state.gear.helmet,
  vest: state.gear.vest,
});

export default connect(mapStateToProps, { changeHelmet, changeVest })(BodyArmourCard);
