import PropTypes from 'prop-types';
import { standardButtonTemplate } from './SubComponents';
import './buttons.css';

const ButtonDownArrow = ({ onClick }) => (
  standardButtonTemplate(onClick, String.fromCharCode(8595))
);

ButtonDownArrow.propTypes = {
  onClick: PropTypes.func,
};

export default ButtonDownArrow;
