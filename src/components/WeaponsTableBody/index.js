import { connect } from 'react-redux';

import { selectTotalWeightOfAllWeapons } from '../../selectors';

import WeaponsTableBody from './component';

const mapStateToProps = (state) => ({
  totalWeaponWeight: selectTotalWeightOfAllWeapons(state),
});

export default connect(mapStateToProps, null)(WeaponsTableBody);
