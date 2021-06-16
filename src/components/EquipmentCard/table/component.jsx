import React from 'react';
import PropTypes from 'prop-types';

import { correctFloatingPoint } from '../../../utils';

const EquipmentCardTable = (
  { equipment,
    decreaseEquipmentQty,
    increaseEquipmentQty,
    removeEquipment,
    totalEquipmentWeight },
) => {
  const handleDecreaseQty = (name, qty) => {
    if (qty < 2) {
      return;
    }

    decreaseEquipmentQty(name);
  };

  return (
    <div>

      <div className="gear-table-header--container">
        <span>Equipment</span>
        <span>Weight</span>
        <span>Qty</span>
        <span>Lbs</span>
        <span>{totalEquipmentWeight}</span>
      </div>

      {equipment.map((item) => (
        <div key={item.name} className="gear-table-row--container">

          <span>
            <button aria-label="remove" type="button" className="button--standard button--close" onClick={() => removeEquipment(item.name)} />
            <span>{item.name}</span>
          </span>
          <span>{item.weight}</span>
          <span>{item.qty}</span>
          <span>{correctFloatingPoint(item.qty * item.weight)}</span>
          <span>
            <button aria-label="up" type="button" className="button--standard button--up" onClick={() => increaseEquipmentQty(item.name)} />
            <button aria-label="down" type="button" className="button--standard button--down" onClick={() => handleDecreaseQty(item.name, item.qty)} />
          </span>
        </div>
      ))}

    </div>
  );
};

EquipmentCardTable.propTypes = {
  equipment: PropTypes.arrayOf(PropTypes.object).isRequired,
  decreaseEquipmentQty: PropTypes.func.isRequired,
  increaseEquipmentQty: PropTypes.func.isRequired,
  removeEquipment: PropTypes.func.isRequired,
  totalEquipmentWeight: PropTypes.number.isRequired,
};

export default EquipmentCardTable;
