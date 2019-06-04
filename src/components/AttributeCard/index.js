import { connect } from 'react-redux';
import { updateAttributes } from '../../actions';

import AttributeCard from './component';

const mapStateToProps = state => ({
  totalWeight: state.totalWeight,
  characterStats: state.characterStats,
  gear: {
    equipment: state.gear.equipment,
  },
});

export default connect(mapStateToProps, { updateAttributes })(AttributeCard);
