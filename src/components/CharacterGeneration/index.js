import { connect } from 'react-redux';
import { selectTotalWeightOfAllGearAndWeapons } from '../../selectors';

import CharacterGeneration from './component';

const mapStateToProps = (state) => ({
  totalWeight: selectTotalWeightOfAllGearAndWeapons(state),
});

export default connect(mapStateToProps)(CharacterGeneration);
