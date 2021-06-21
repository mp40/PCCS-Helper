import { connect } from 'react-redux';
import { modifyStrengthValue, modifyIntelligenceValue, modifyHealthValue, modifyWillpowerValue, modifyAgilityValue } from '../../actions';

import AttributeCard from './component';

const mapStateToProps = (state) => ({
  str: state.currentCharacter.str,
  int: state.currentCharacter.int,
  hlt: state.currentCharacter.hlt,
  wil: state.currentCharacter.wil,
  agi: state.currentCharacter.agi,
});

export default connect(mapStateToProps,
  { modifyStrengthValue,
    modifyIntelligenceValue,
    modifyHealthValue,
    modifyWillpowerValue,
    modifyAgilityValue })(AttributeCard);
