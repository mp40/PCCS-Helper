import React, { useState, useContext, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

import { AlmStateContext, FirearmContext } from '../context';

import { getWeaponRangeIndex, getTargetSizeMod } from './data';
import { getRecoilRecoveryValue } from '../../../../data/advancedRules/recoilRecovery';

import styles from './styles.module.css';

const FirearmData = ({ level, alm, rof }) => {
  const state = useContext(AlmStateContext);
  const firearm = useContext(FirearmContext);

  const [ballisticAlm, setBallisticAlm] = useState();
  const [ammoType, setAmmoType] = useState(0);

  const { list, projectiles, ma, ba, kd } = firearm;

  const rangeIndex = getWeaponRangeIndex(list, state.range);

  const targetSizeMod = getTargetSizeMod(rof, state.target);

  useEffect(() => {
    setAmmoType(0);
  }, [firearm]);

  useEffect(() => {
    if (alm > ba[rangeIndex]) {
      setBallisticAlm(ba[rangeIndex]);
    } else {
      setBallisticAlm(alm);
    }
  }, [alm]);

  return (
    <>
      <div className={styles.ammoTypes}>
        {projectiles.map((projectile, index) => (
          <Fragment key={projectile.type}>
            <button type="button" key={projectile.type} onClick={() => setAmmoType(index)}>
              {projectile.type}
            </button>
            <div className={styles.ammoName}>{projectile.type}</div>
            <div className={`${styles.ammoMarker} ${index === ammoType ? styles.selected : ''}`} />
          </Fragment>
        ))}
      </div>

      <div className={styles.data}>
        <div>
          <span className={`${ballisticAlm === ba[rangeIndex] ? styles.baReached : ''}`}>{`ALM: ${ballisticAlm}`}</span>
          <span>{`EAL: ${ballisticAlm + targetSizeMod}`}</span>
        </div>
        <div>
          <span>{`PEN: ${projectiles[ammoType].pen[rangeIndex]}`}</span>
          <span>{`DC: ${projectiles[ammoType].dc[rangeIndex]}`}</span>
          {rof !== 'Single' && ma
            && <span>{`MA: ${firearm.ma[rangeIndex]}`}</span>}
        </div>
        <span>{`Recoil Recovery: ${getRecoilRecoveryValue(kd, level)}`}</span>
      </div>
    </>
  );
};

FirearmData.propTypes = {
  level: PropTypes.number.isRequired,
  alm: PropTypes.number.isRequired,
  rof: PropTypes.string.isRequired,
};

export default FirearmData;
