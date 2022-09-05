/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import MagazineRow from '../../../gear-rows/magazine-row';

import { getLauncherByName } from '../../../../data/firearms/launchers';

const UnderslugAmmo = ({
  firearmName,
  attached,
  magazines,
  increaseUnderslungLauncherAmmo,
  decreaseUnderslungLauncherAmmo,
}) => {
  const launcher = getLauncherByName(attached);

  const handleDecreaseUnderslungAmmo = (payload, qty) => {
    if (qty === 0) {
      return;
    }

    decreaseUnderslungLauncherAmmo(payload);
  };

  if (!launcher || !magazines) {
    return null;
  }

  return magazines.map((mag, index) => (
    <MagazineRow
      key={`${launcher.mag[index].class}`}
      text={`${launcher.mag[index].class} Rnd`}
      weight={launcher.mag[index].weight}
      qty={mag.qty}
      increaseItem={() => increaseUnderslungLauncherAmmo({ firearmToModify: firearmName, magazineIndex: index })}
      decreaseItem={() => handleDecreaseUnderslungAmmo(
        { firearmToModify: firearmName, magazineIndex: index }, mag.qty)}
    />
  ),
  );
};

UnderslugAmmo.propTypes = {
  firearmName: PropTypes.string.isRequired,
  attached: PropTypes.string,
  magazines: PropTypes.arrayOf(PropTypes.object),
  increaseUnderslungLauncherAmmo: PropTypes.func.isRequired,
  decreaseUnderslungLauncherAmmo: PropTypes.func.isRequired,
};

export default UnderslugAmmo;
