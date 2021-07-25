import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

import RangeSelectModal from './RangeSelectModal';
import StanceSelectModal from './StanceSelectModal';
import TargetSizeSelectModal from './TargetSizeModal';
import MovementSelectModal from './MovementSelectModal';
import VisibilitySelectModal from './VisibilitySelectModal';
import SituationSelectModal from './SituationSelectModal';
import AimsSelectModal from './AimsSelectModal';
import FireSelector from './FireSelector';
import Aiming from './Aiming';

import { getScopeByName } from '../../../data/firearms/optics';

import { gunObjShape } from '../../../helpers/proptypeShapes';

import { getRecoilRecoveryValue } from '../../../data/advancedRules/recoilRecovery';

import {
  getAimTimeMod,
  rangeMods,
  getVisibilityALM,
  getSituationALM,
  findSpeedMods,
  shooterStance,
  targetSizeMods,
  getOddsOfHitting,
  defaultSituationState,
  defaultVisibilityState,
  getWeaponRangeIndex,
  getWeaponMaxRange,
} from './data';

import styles from './styles.module.css';

const LoadedCharacterShooting = ({
  firearm,
  sal,
  level,
  setFirearm,
}) => {
  const [rof, setRof] = useState(!firearm.selector ? 'Single' : 'Auto');
  const [roundsFired, setRoundsFired] = useState(0);
  const [sab, setSab] = useState(0);
  const [ammoType, setAmmoType] = useState(0);
  const [aims, setAims] = useState(1);
  const [stance, setStance] = useState('Standing');
  const [range, setRange] = useState(50);
  const [size, setSize] = useState('Standing Exposed');
  const [movement, setMovement] = useState({ shooter: 0, target: 0 });
  const [visibility, setVisibility] = useState(defaultVisibilityState);
  const [weaponBasedALM, setWeaponBasedALM] = useState(defaultSituationState);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setAims(1);
    setRoundsFired(0);
    setSab(0);
    setWeaponBasedALM(defaultSituationState);
    setAmmoType(0);
    setRof(!firearm.selector ? 'Single' : 'Auto');
  }, [firearm]);

  const movementModInfo = findSpeedMods(movement.shooter + movement.target, range);
  const rangeIndex = getWeaponRangeIndex(firearm.list, range);

  const calculateALM = () => {
    let result = sal - sab;
    const ba = firearm.ba[rangeIndex];

    result += getAimTimeMod(firearm.aim, aims);
    result += rangeMods[range];
    result += shooterStance[stance];
    result += movementModInfo.mod;
    result += getVisibilityALM(visibility);
    result += getSituationALM(weaponBasedALM, stance, aims);

    if (firearm?.optics?.attached && weaponBasedALM.hipFire === false) {
      const optic = getScopeByName(firearm.optics.attached);
      if (range >= optic.minimumRange) {
        result += optic.bonus[aims - 1];
      }

      if (range < optic.minimumRange) {
        result -= 6;
      }
    }

    return result < ba ? result : ba;
  };

  const getTargetSizeMod = () => {
    if (rof === 'Single') {
      return targetSizeMods[size].size;
    }

    return targetSizeMods[size].elev;
  };

  const alm = calculateALM();
  const targetSizeMod = getTargetSizeMod();
  const autoROF = Number(String(firearm.rof).split('*').pop());
  const maxAims = firearm.aim.ac.slice(-1)[0];

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

  const almButtons = [
    {
      text: 'Range',
      key: 'range',
      value: range,
    },
    {
      text: 'Shooter Stance',
      key: 'stance',
      value: stance,
    },
    {
      text: 'Target Size',
      key: 'target',
      value: size,
    },
    {
      text: 'Movement',
      key: 'movement',
      value: `Shooter:${movement.shooter} | Target:${movement.target}`,
    },
    {
      text: 'Situation',
      key: 'situation',
      value: `ALM: ${getSituationALM(weaponBasedALM, stance, aims)}`,
    },
    {
      text: 'Visibility',
      key: 'visibility',
      value: `ALM: ${getVisibilityALM(visibility)}`,
    },
  ];

  const handleNewShot = () => {
    setRoundsFired(roundsFired + getRoundsPerShot());
    setAims(1);
  };

  const handleSustainedFire = () => {
    const roundsExpended = autoROF;

    setRoundsFired(roundsFired + roundsExpended);
    setSab(sab + firearm.sab);
  };

  const handleCeaseFire = () => {
    setSab(0);
    setAims(1);
  };

  const handleReload = () => {
    setSab(0);
    setAims(1);
    setRoundsFired(0);
  };

  return (
    <div className={`${styles.wrapper} --card`}>
      <div className={styles.header}>
        <span>{firearm.name}</span>
        <button
          aria-label="close"
          className={styles.close}
          type="button"
          onClick={() => setFirearm(false)}
        />
      </div>

      <div className={styles.ammoTypes}>
        {firearm.projectiles.map((projectile, index) => (
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
          <span className={`${alm === firearm.ba[rangeIndex] ? styles.baReached : ''}`}>{`ALM: ${alm}`}</span>
          <span>{`EAL: ${alm + targetSizeMod}`}</span>
        </div>
        <div>
          <span>{`PEN: ${firearm.projectiles[ammoType].pen[rangeIndex]}`}</span>
          <span>{`DC: ${firearm.projectiles[ammoType].dc[rangeIndex]}`}</span>
          {rof !== 'Single' && firearm?.ma
            && <span>{`MA: ${firearm.ma[rangeIndex]}`}</span>}
        </div>
        <span>{`Recoil Recovery: ${getRecoilRecoveryValue(firearm.kd, level)}`}</span>
      </div>

      <div className={styles.modalButtonWrapper}>
        {almButtons.map((button) => (
          <button key={button.key} type="button" onClick={() => setModal(button.key)}>
            <span>{button.text}</span>
            <span>{button.value}</span>
          </button>
        ))}

      </div>

      <Aiming aims={aims} maxAims={maxAims} setAims={setAims} setModal={setModal} />

      <div className={styles.firing}>
        <div>
          <span>{'Rounds Fired: '}</span>
          <span className={getRoundsClassName()}>{roundsFired}</span>
          <span>{` / ${firearm.mag[0].cap}`}</span>
        </div>
        <div>{`Hit Chance: ${getOddsOfHitting(alm, targetSizeMod, rof)}%`}</div>

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

      {modal === 'range' && <RangeSelectModal range={range} maxRange={getWeaponMaxRange(firearm.list)} setRange={setRange} setModal={setModal} />}
      {modal === 'stance' && <StanceSelectModal setStance={setStance} setModal={setModal} />}
      {modal === 'target' && <TargetSizeSelectModal setSize={setSize} setModal={setModal} />}
      {modal === 'movement' && <MovementSelectModal setMovement={setMovement} setModal={setModal} movement={movement} />}
      {modal === 'situation' && <SituationSelectModal list={firearm.list} bipod={firearm.bipod || false} foldingStock={String(firearm.length).includes('/')} setModal={setModal} weaponBasedALM={weaponBasedALM} setWeaponBasedALM={setWeaponBasedALM} />}
      {modal === 'visibility' && <VisibilitySelectModal setModal={setModal} visibility={visibility} setVisibility={setVisibility} optics={firearm?.optics?.attached} />}
      {modal === 'aims' && <AimsSelectModal aims={aims} maxAims={maxAims} setAims={setAims} setModal={setModal} />}
    </div>

  );
};

LoadedCharacterShooting.propTypes = {
  firearm: gunObjShape.isRequired,
  sal: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  setFirearm: PropTypes.func.isRequired,
};

export default LoadedCharacterShooting;
