import { connect } from 'react-redux';
import WeaponsCard from './component';
import { removeAllFirearms } from '../../actions';
import './WeaponsCard.css';

const mapStateToProps = (state) => ({
  firearms: state.gear.firearms,
  grenades: state.gear.grenades,
  launchers: state.gear.launchers,
});

export default connect(mapStateToProps, { removeAllFirearms })(WeaponsCard);
