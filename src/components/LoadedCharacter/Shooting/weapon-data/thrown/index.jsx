/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

import { AlmStateContext } from '../../context';

import { getOddsOfHitting } from '../../pew-pew/data';
import { getTargetSizeMod } from '../ballistic/data';

import { grenadeShape } from '../../../../../helpers/proptypeShapes';

const getGrenadeTof = (range) => {
  switch (range) {
    case range < 7.1:
      return 2.3;
    case range < 18.1:
      return 4.3;
    case range < 35.1:
      return 6.3;
    default:
      return 8.3;
  }
};

const ThrownData = ({ alm, grenade }) => {
  const { target, range } = useContext(AlmStateContext);

  const targetSizeMod = getTargetSizeMod('Single', target);
  return (
    <div>
      <div>{`Hit Chance: ${getOddsOfHitting(alm, targetSizeMod, 'Single')}%`}</div>
      <div>{`FL: ${grenade.fl}`}</div>
      <div>{`AT: ${grenade.at}`}</div>
      <div>{`TOF: ${getGrenadeTof(range)}`}</div>
    </div>
  );
};

ThrownData.propTypes = {
  grenade: grenadeShape,
  alm: PropTypes.number.isRequired,
};

export default ThrownData;
