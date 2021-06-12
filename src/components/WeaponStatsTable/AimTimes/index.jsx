import React from 'react';
import PropTypes from 'prop-types';

import { getScopeByName } from '../../../data/firearms/optics';

const AimTimes = ({ aim, index, sal, optic, launcher }) => {
  const getModifiedAimTime = () => {
    let opticMod = 0;
    let launcherMod = 0;

    if (optic) {
      opticMod = getScopeByName(optic).bonus[index];
    }

    if (launcher && index < 2) {
      launcherMod = -3;
    }

    return aim.mod[index] + sal + opticMod + launcherMod;
  };

  return (
    <td>
      <span>{aim.ac[index]}</span>
      <span>
        {index < aim.mod.length && getModifiedAimTime()}
      </span>
    </td>
  );
};

AimTimes.propTypes = {
  aim: PropTypes.objectOf(PropTypes.array).isRequired,
  index: PropTypes.number.isRequired,
  sal: PropTypes.number,
  optic: PropTypes.string,
  launcher: PropTypes.bool,
};

AimTimes.defaultProps = {
  sal: 0,
};

export default AimTimes;
