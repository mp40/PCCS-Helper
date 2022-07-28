import React from 'react';
import PropTypes from 'prop-types';

import { correctFloatingPoint } from '../../utils';

const RowFragment = ({
  weight,
  qty,
  increaseItem,
  decreaseItem,
}) => (
  <>
    <span>{weight}</span>
    <span>{qty}</span>
    <span>{correctFloatingPoint(weight * qty)}</span>
    <span>
      <button aria-label="up" type="button" className="button--standard button--up" onClick={() => increaseItem()} />
      <button aria-label="down" type="button" className="button--standard button--down" onClick={() => decreaseItem()} />
    </span>
  </>
);

RowFragment.propTypes = {
  weight: PropTypes.number.isRequired,
  qty: PropTypes.number.isRequired,
  increaseItem: PropTypes.func.isRequired,
  decreaseItem: PropTypes.func.isRequired,
};

export default RowFragment;
