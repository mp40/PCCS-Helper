import { connect } from 'react-redux';
import { modifyStrengthValue, modifyIntelligenceValue, modifyHealthValue, modifyWillpowerValue, modifyAgilityValue } from '../../actions';

import AttributeCard from './component';

const mapStateToProps = state => ({
  characterStats: state.characterStats,
});

export default connect(mapStateToProps,
  { modifyStrengthValue,
    modifyIntelligenceValue,
    modifyHealthValue,
    modifyWillpowerValue,
    modifyAgilityValue })(AttributeCard);
