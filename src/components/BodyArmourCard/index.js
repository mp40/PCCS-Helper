import { connect } from 'react-redux';
import { changeHelmet, changeVest } from '../../actions';
import BodyArmourCard from './component';

const mapStateToProps = state => ({
  helmet: state.gear.helmet || undefined,
  vest: state.gear.vest || undefined,
});

export default connect(mapStateToProps, { changeHelmet, changeVest })(BodyArmourCard);
