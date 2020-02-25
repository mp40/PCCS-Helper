import { connect } from 'react-redux';
import WeaponsCard from './component';
import { removeAllFirearms } from '../../actions';
import './WeaponsCard.css';

const mapStateToProps = (state) => ({
  totalWeight: state.totalWeight,
  gear: state.gear,
});

export default connect(mapStateToProps, { removeAllFirearms })(WeaponsCard);

//mptodo -> also, do I need all gear? or just gear.firearms && gear.grenades?