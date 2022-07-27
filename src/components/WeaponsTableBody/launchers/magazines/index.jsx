import React from 'react';
import PropTypes from 'prop-types';

import MagazineRow from '../../../gear-rows/magazine-row';

const Magazines = ({
  launcherName,
  magazines,
  increaseLauncherAmmo,
  decreaseLauncherAmmo,
}) => {
  const handleDecreaseAmmo = (payload, qty) => {
    if (qty === 0) {
      return;
    }

    decreaseLauncherAmmo(payload);
  };

  return magazines.map((mag, index) => {
    if (mag.weight === '-') {
      return null;
    }

    return (
      <MagazineRow
        key={mag.class}
        text={`${mag.class} Rnd`}
        weight={mag.weight}
        qty={mag.qty}
        increaseItem={() => increaseLauncherAmmo({ launcherToModify: launcherName, magazineIndex: index })}
        decreaseItem={() => handleDecreaseAmmo({ launcherToModify: launcherName, magazineIndex: index }, mag.qty)}
      />
    );
  });
};

Magazines.propTypes = {
  LauncherName: PropTypes.string.isRequired,
  magazines: PropTypes.arrayOf(PropTypes.object).isRequired,
  increaseLauncherAmmo: PropTypes.func.isRequired,
  decreaseLauncherAmmo: PropTypes.func.isRequired,
};

export default Magazines;
