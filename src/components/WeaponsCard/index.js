import { connect } from 'react-redux';
import WeaponsCard from './component';
import {
  modifyFirearmList,
  increaseFirearmQty,
  decreaseFirearmQty,
  removeFirearm,
  removeAllFirearms,
  increaseMagazineQty,
  decreaseMagazineQty,
  modifyFirearm,
  addCustomMagazine,
} from '../../actions';
import './WeaponsCard.css';

const mapStateToProps = state => ({
  totalWeight: state.totalWeight,
  characterStats: state.characterStats,
  gear: state.gear,
});

export default connect(mapStateToProps,
  { modifyFirearmList,
    increaseFirearmQty,
    decreaseFirearmQty,
    removeFirearm,
    removeAllFirearms,
    increaseMagazineQty,
    decreaseMagazineQty,
    modifyFirearm,
    addCustomMagazine })(WeaponsCard);
