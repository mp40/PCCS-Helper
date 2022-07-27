import { connect } from 'react-redux';
import WeaponsCard from './component';
import { removeAllWeapons } from '../../actions';

export default connect(null, { removeAllWeapons })(WeaponsCard);
