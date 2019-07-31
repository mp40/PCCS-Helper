import { connect } from 'react-redux';
import { changeHelmet } from '../../actions';
import BodyArmourCard from './component';

const mapStateToProps = state => ({
  helmet: state.gear.helmet,
});

export default connect(mapStateToProps, { changeHelmet })(BodyArmourCard);
