import PropTypes from 'prop-types';
import { standardButtonTemplate } from './SubComponents';
import './buttons.css';

const ButtonDeleteX = ({ onClick }) => (
  standardButtonTemplate(onClick, 'X')
);

ButtonDeleteX.propTypes = {
  onClick: PropTypes.func,
};

export default ButtonDeleteX;
