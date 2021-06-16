import { connect } from 'react-redux';
import { selectCurrentView } from '../../actions';
import { selectTotalWeightOfAllGearAndWeapons } from '../../selectors';

import CharacterGeneration from './component';

const mapStateToProps = (state) => ({
  totalWeight: selectTotalWeightOfAllGearAndWeapons(state),
});

export default connect(mapStateToProps, { selectCurrentView })(CharacterGeneration);
