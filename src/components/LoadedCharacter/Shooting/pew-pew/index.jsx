import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { AlmStateContext, FirearmContext, AlmDispatchContext } from '../context';
import { updateAims } from '../actions';

import FireSelector from '../FireSelector';

import { getOddsOfHitting } from './data';
import { getTargetSizeMod } from '../firearm-data/data';

import styles from './styles.module.css';

const PewPew = ({ rof, setRof, alm }) => {
  const [roundsFired, setRoundsFired] = useState(0);
  const [sab, setSab] = useState(0);

  const dispatch = useContext(AlmDispatchContext);
  const { target } = useContext(AlmStateContext);
  const firearm = useContext(FirearmContext);

  const autoROF = Number(String(firearm.rof).split('*').pop());

  const targetSizeMod = getTargetSizeMod(rof, target);

  const getRoundsPerShot = () => {
    if (rof === 'Auto') {
      return autoROF;
    }

    if (rof === '3RB') {
      return 3;
    }

    return 1;
  };

  const getRoundsClassName = () => {
    const { cap } = firearm.mag[0];

    if (roundsFired >= cap) {
      return styles.emptyMag;
    }

    if (cap - roundsFired <= getRoundsPerShot()) {
      return styles.lowMag;
    }

    return '';
  };

  const handleNewShot = () => {
    setRoundsFired(roundsFired + getRoundsPerShot());
    dispatch(updateAims(1));
  };

  const handleSustainedFire = () => {
    const roundsExpended = autoROF;

    setRoundsFired(roundsFired + roundsExpended);
    setSab(sab + firearm.sab);
  };

  const handleCeaseFire = () => {
    setSab(0);
    dispatch(updateAims(1));
  };

  const handleReload = () => {
    setSab(0);
    setRoundsFired(0);
    dispatch(updateAims(1));
  };

  return (
    <div className={styles.firing}>
      <div>
        <span>{'Rounds Fired: '}</span>
        <span className={getRoundsClassName()}>{roundsFired}</span>
        <span>{` / ${firearm.mag[0].cap}`}</span>
      </div>
      <div>{`Hit Chance: ${getOddsOfHitting(alm - sab, targetSizeMod, rof)}%`}</div>

      <div className={styles.pewpew}>
        <FireSelector single={!firearm.selector} selector={String(firearm.rof)} rof={rof} setRof={setRof} />
        <div>
          {sab === 0 && <button type="button" onClick={() => handleNewShot()}>FIRE</button>}
          {sab > 0 && <button type="button" onClick={() => handleCeaseFire()}>Cease Fire</button>}
          {rof === 'Auto' && <button type="button" onClick={() => handleSustainedFire()}>Sustained Fire</button>}
          <button type="button" onClick={() => handleReload()}>Reload</button>
        </div>

      </div>

    </div>
  );
};

PewPew.propTypes = {
  alm: PropTypes.number.isRequired,
  rof: PropTypes.string.isRequired,
  setRof: PropTypes.func.isRequired,
};

export default PewPew;
