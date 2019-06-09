import { connect } from 'react-redux';
import { updateAttributes, modifyStrengthValue, modifyIntelligenceValue, modifyHealthValue, modifyWillpowerValue, modifyAgilityValue } from '../../actions';

import AttributeCard from './component';

const mapStateToProps = state => ({
  totalWeight: state.totalWeight,
  characterStats: state.characterStats,
  gear: {
    equipment: state.gear.equipment,
  },
});

export default connect(mapStateToProps,
  { updateAttributes,
    modifyStrengthValue,
    modifyIntelligenceValue,
    modifyHealthValue,
    modifyWillpowerValue,
    modifyAgilityValue })(AttributeCard);
