import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import LauncherRow from '../../gear-rows/launcher-row';

import Magazines from './magazines';

import { getLauncherWeightByName } from '../../../data/launchers';
import { launcherShape } from '../../../helpers/proptypeShapes';

const Launchers = ({
  launchers,
  increaseLauncherQty,
  decreaseLauncherQty,
  removeLauncher,
  increaseLauncherAmmo,
  decreaseLauncherAmmo,
}) => {
  const handleDecreaseLauncher = (payload, qty) => {
    if (qty === 1) {
      return;
    }

    decreaseLauncherQty(payload);
  };

  return launchers.map((launcher) => (
    <Fragment key={launcher.name}>

      <LauncherRow
        text={launcher.name}
        removeItem={() => removeLauncher(launcher.name)}
        weight={getLauncherWeightByName(launcher.name)}
        qty={launcher.qty}
        increaseItem={() => increaseLauncherQty(launcher.name)}
        decreaseItem={() => handleDecreaseLauncher(launcher.name, launcher.qty)}
      />

      <Magazines
        launcherName={launcher.name}
        magazines={launcher.mag}
        increaseLauncherAmmo={increaseLauncherAmmo}
        decreaseLauncherAmmo={decreaseLauncherAmmo}
      />

    </Fragment>
  ));
};

Launchers.propTypes = {
  increaseLauncherQty: PropTypes.func.isRequired,
  decreaseLauncherQty: PropTypes.func.isRequired,
  removeLauncher: PropTypes.func.isRequired,
  increaseLauncherAmmo: PropTypes.func.isRequired,
  decreaseLauncherAmmo: PropTypes.func.isRequired,
  launchers: PropTypes.arrayOf(launcherShape).isRequired,
};

export default Launchers;
