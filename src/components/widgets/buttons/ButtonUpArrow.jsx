import PropTypes from 'prop-types';
import { standardButtonTemplate } from './SubComponents';
import './buttons.css';

const ButtonUpArrow = ({ onClick }) => (
  standardButtonTemplate(onClick, String.fromCharCode(8593))
);

ButtonUpArrow.propTypes = {
  onClick: PropTypes.func,
};

export default ButtonUpArrow;
