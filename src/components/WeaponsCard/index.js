import { connect } from 'react-redux';
import WeaponsCard from './component';
import { modifyFirearmList, increaseFirearmQty, decreaseFirearmQty } from '../../actions';
import './WeaponsCard.css';

const mapStateToProps = state => ({
  totalWeight: state.totalWeight,
  characterStats: state.characterStats,
  gear: state.gear,
});

export default connect(mapStateToProps, { modifyFirearmList, increaseFirearmQty, decreaseFirearmQty })(WeaponsCard);
