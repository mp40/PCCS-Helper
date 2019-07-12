import PropTypes from 'prop-types';
import { standardButtonTemplate } from './SubComponents';
import './buttons.css';

const ButtonStandard = ({ onClick, name }) => (
  standardButtonTemplate(onClick, name)
);

ButtonStandard.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
};

export default ButtonStandard;
