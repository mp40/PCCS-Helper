import { connect } from 'react-redux';
import ActionsCard from './component';

import { selectCombatStats } from '../../selectors';

const mapStateToProps = (state) => ({
  combatStats: selectCombatStats(state),
});

export default connect(mapStateToProps)(ActionsCard);
