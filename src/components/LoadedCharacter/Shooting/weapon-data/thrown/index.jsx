import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { AlmStateContext } from '../../context';

import { getOddsOfHitting } from '../../pew-pew/data';
import { getTargetSizeMod } from '../ballistic/data';

import { grenadeShape } from '../../../../../helpers/proptypeShapes';

import { getGrenadeTof } from './data';

import styles from './styles.module.css';

const ThrownData = ({ alm, grenade }) => {
  const { target, range } = useContext(AlmStateContext);

  const targetSizeMod = getTargetSizeMod('Single', target);
  return (
    <div className={styles.wrapper}>
      <div>
        <div>{`Hit Chance: ${getOddsOfHitting(alm, targetSizeMod, 'Single')}%`}</div>
        <div>{`TOF: ${getGrenadeTof(range)}`}</div>
      </div>
      <div>
        <div>{`FL: ${grenade.fl}`}</div>
        <div>{`AT: ${grenade.at}`}</div>
      </div>
    </div>
  );
};

ThrownData.propTypes = {
  grenade: grenadeShape,
  alm: PropTypes.number.isRequired,
};

export default ThrownData;
