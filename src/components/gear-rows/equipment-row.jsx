import React from 'react';
import PropTypes from 'prop-types';

import RowFragment from './row-fragment';

const EquipmentRow = ({
  text,
  removeItem,
  weight,
  qty,
  increaseItem,
  decreaseItem,
}) => (
  <div className="gear-table-row--container">

    <span>
      <button aria-label="remove" type="button" className="button--standard button--close" onClick={() => removeItem()} />
      <span>{text}</span>
    </span>

    <RowFragment
      weight={weight}
      qty={qty}
      increaseItem={increaseItem}
      decreaseItem={decreaseItem}
    />

  </div>
);

EquipmentRow.propTypes = {
  text: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
  weight: PropTypes.number.isRequired,
  qty: PropTypes.number.isRequired,
  increaseItem: PropTypes.func.isRequired,
  decreaseItem: PropTypes.func.isRequired,
};

export default EquipmentRow;
