import { connect } from 'react-redux';
import WeaponsCard from './component';
import { removeAllModificationsFromFirearm } from '../../actions';
import './WeaponsCard.css';

const mapStateToProps = state => ({
  totalWeight: state.totalWeight,
  gear: state.gear,
});

export default connect(mapStateToProps, { removeAllModificationsFromFirearm })(WeaponsCard);
