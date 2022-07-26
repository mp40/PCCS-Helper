import React from 'react';
import PropTypes from 'prop-types';

import EquipmentRow from '../../gear-rows/equipment-row';

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

      <div className="gear-card-body">
        {equipment.map((item) => (
          <EquipmentRow
            key={item.name}
            text={item.name}
            removeItem={() => removeEquipment(item.name)}
            modifyItem={false}
            weight={item.weight}
            qty={item.qty}
            increaseItem={() => increaseEquipmentQty(item.name)}
            decreaseItem={() => handleDecreaseQty(item.name, item.qty)}
          />
        ))}
      </div>
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
