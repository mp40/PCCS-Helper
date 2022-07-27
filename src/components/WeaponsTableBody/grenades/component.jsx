import React from 'react';
import PropTypes from 'prop-types';

import EquipmentRow from '../../gear-rows/equipment-row';

import { getGrenadeWeightByName } from '../../../data/grenades';

const Grenades = ({
  grenades,
  removeGrenade,
  increaseGrenadeQty,
  decreaseGrenadeQty,
}) => {
  const handleDecreaseGrenade = (payload, qty) => {
    if (qty === 1) {
      return;
    }

    decreaseGrenadeQty(payload);
  };

  return grenades.map((grenade) => (
    <EquipmentRow
      key={grenade.name}
      text={grenade.name}
      removeItem={() => removeGrenade(grenade.name)}
      weight={getGrenadeWeightByName(grenade.name)}
      qty={grenade.qty}
      increaseItem={() => increaseGrenadeQty(grenade.name)}
      decreaseItem={() => handleDecreaseGrenade(grenade.name, grenade.qty)}
    />
  ));
};

Grenades.propTypes = {
  increaseGrenadeQty: PropTypes.func.isRequired,
  decreaseGrenadeQty: PropTypes.func.isRequired,
  removeGrenade: PropTypes.func.isRequired,
  grenades: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Grenades;
