import { connect } from 'react-redux';
import { updateWeight, updateAttributes } from '../../actions';
import CharacterGeneration from './component';

import './CharacterGeneration.css';


const mapStateToProps = () => ({});

export default connect(mapStateToProps, { updateWeight, updateAttributes })(CharacterGeneration);
