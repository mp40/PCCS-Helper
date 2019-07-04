import { connect } from 'react-redux';
import WeaponsCard from './component';
import {
  increaseFirearmQty,
  decreaseFirearmQty,
  removeFirearm,
  removeAllFirearms,
  increaseMagazineQty,
  decreaseMagazineQty,
  removeAllModificationsFromFirearm,
} from '../../actions';
import './WeaponsCard.css';

const mapStateToProps = state => ({
  totalWeight: state.totalWeight,
  gear: state.gear,
});

export default connect(mapStateToProps,
  { increaseFirearmQty,
    decreaseFirearmQty,
    removeFirearm,
    removeAllFirearms,
    increaseMagazineQty,
    decreaseMagazineQty,
    removeAllModificationsFromFirearm })(WeaponsCard);
