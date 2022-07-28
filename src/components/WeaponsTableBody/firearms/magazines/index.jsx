import React from 'react';
import PropTypes from 'prop-types';

import MagazineRow from '../../../gear-rows/magazine-row';

const Magazines = ({
  firearmName,
  magazines,
  increaseMagazineQty,
  decreaseMagazineQty,
}) => {
  const handleDecreaseMagazine = (payload, qty) => {
    if (qty === 0) {
      return;
    }

    decreaseMagazineQty(payload);
  };

  const getMagazineText = (type, cap) => {
    if (type === 'Rnd') {
      return 'Single Round';
    }
    return `${cap} round ${type}`;
  };

  return magazines.map((mag, index) => {
    if (mag.removed) {
      return null;
    }

    return (
      <MagazineRow
        key={`${mag.type}${mag.cap}${mag.weight}`}
        text={getMagazineText(mag.type, mag.cap)}
        weight={mag.weight}
        qty={mag.qty}
        increaseItem={() => increaseMagazineQty({ firearmToModify: firearmName, magazineIndex: index })}
        decreaseItem={() => handleDecreaseMagazine({ firearmToModify: firearmName, magazineIndex: index }, mag.qty)}
      />
    );
  });
};

Magazines.propTypes = {
  firearmName: PropTypes.string.isRequired,
  magazines: PropTypes.arrayOf(PropTypes.object).isRequired,
  increaseMagazineQty: PropTypes.func.isRequired,
  decreaseMagazineQty: PropTypes.func.isRequired,
};

export default Magazines;
