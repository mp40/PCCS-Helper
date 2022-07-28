import { connect } from 'react-redux';

import {
  removeGrenade,
  increaseGrenadeQty,
  decreaseGrenadeQty,
} from '../../../actions';

import Grenades from './component';

const mapStateToProps = (state) => ({
  grenades: state.currentCharacter.grenades,
});

export default connect(mapStateToProps, {
  removeGrenade,
  increaseGrenadeQty,
  decreaseGrenadeQty,
})(Grenades);
