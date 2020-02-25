import React from 'react';
import PropTypes from 'prop-types';
import ButtonUpArrow from './ButtonUpArrow';
import ButtonDownArrow from './ButtonDownArrow';

const ButtonIncrementArrows = ({ onClickUp, onClickDown, idDown, idUp }) => (
  <>
    <ButtonUpArrow id={idUp} onClick={onClickUp} />
    <ButtonDownArrow id={idDown} onClick={onClickDown} />
  </>
);

ButtonIncrementArrows.propTypes = {
  onClickUp: PropTypes.func,
  onClickDown: PropTypes.func,
  idUp: PropTypes.string,
  idDown: PropTypes.string,
};

export default ButtonIncrementArrows;
