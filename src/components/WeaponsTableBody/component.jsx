import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { getFullFirearmSystemWeightByObject } from '../../data/firearms';
import { getGrenadeWeightByName } from '../../data/grenades';
import { getLauncherByName } from '../../data/firearms/launchers';
import { getLauncherWeightByName } from '../../data/launchers';

import { correctFloatingPoint } from '../../utils';

import { gunObjShape, launcherShape } from '../../helpers/proptypeShapes';

import styles from './styles.module.css';

const WeaponsTableBody = ({
  totalWeaponWeight,
  toggleModifyWeapon,
  firearms,
  grenades,
  launchers,
  removeGrenade,
  increaseGrenadeQty,
  decreaseGrenadeQty,
  removeFirearm,
  increaseFirearmQty,
  decreaseFirearmQty,
  increaseMagazineQty,
  decreaseMagazineQty,
  increaseLauncherQty,
  decreaseLauncherQty,
  removeLauncher,
  increaseLauncherAmmo,
  decreaseLauncherAmmo,
  increaseUnderslungLauncherAmmo,
  decreaseUnderslungLauncherAmmo,
}) => {
  const handleDecreaseWeapon = (fn, payload, qty) => {
    if (qty === 1) {
      return;
    }

    fn(payload);
  };

  const handleDecreaseAmmo = (fn, payload, qty) => {
    if (qty === 0) {
      return;
    }

    fn(payload);
  };

  const getMagazineText = (type, cap) => {
    if (type === 'Rnd') {
      return 'Single Round';
    }
    return `${cap} round ${type}`;
  };

  return (
    <div>
      <div className="gear-table-header--container">
        <span>Weapon</span>
        <span>Weight</span>
        <span>Qty</span>
        <span>Lbs</span>
        <span>{totalWeaponWeight}</span>
      </div>

      {/* mptodo the below and equipment has v simalr patterns - refactor plz */}
      <div className="gear-card-body">
        {firearms.map((firearm) => (
          <Fragment key={firearm.name}>
            <div key={firearm.name} className="gear-table-row--container">

              <span>
                <button aria-label="remove" type="button" className="button--standard button--close" onClick={() => removeFirearm(firearm.name)} />
                <button type="button" className="button--standard" onClick={() => toggleModifyWeapon(firearm.name)}>{`${firearm.name}${firearm?.launcher ? ` - ${firearm.launcher.attached}` : ''}`}</button>
              </span>
              <span>{getFullFirearmSystemWeightByObject(firearm)}</span>
              <span>{firearm.qty}</span>
              <span>{correctFloatingPoint(getFullFirearmSystemWeightByObject(firearm) * firearm.qty)}</span>
              <span>
                <button aria-label="up" type="button" className="button--standard button--up" onClick={() => increaseFirearmQty(firearm.name)} />
                <button aria-label="down" type="button" className="button--standard button--down" onClick={() => handleDecreaseWeapon(decreaseFirearmQty, firearm.name, firearm.qty)} />
              </span>
            </div>
            {firearm.mag.map((m, i) => {
              if (m.removed) {
                return null;
              }
              return (
                <div key={`${m.type}${m.cap}${m.weight}`} className={`gear-table-row--container ${styles.magazineRow}`}>
                  <span>{getMagazineText(m.type, m.cap)}</span>
                  <span>{m.weight}</span>
                  <span>{m.qty}</span>
                  <span>{correctFloatingPoint(m.qty * m.weight)}</span>
                  <span>
                    <button aria-label="up" type="button" className="button--standard button--up" onClick={() => increaseMagazineQty({ firearmToModify: firearm.name, magazineIndex: i })} />
                    <button aria-label="down" type="button" className="button--standard button--down" onClick={() => handleDecreaseAmmo(decreaseMagazineQty, { firearmToModify: firearm.name, magazineIndex: i }, m.qty)} />
                  </span>
                </div>
              );
            })}
            {firearm?.launcher && firearm.launcher.mag.map((m, i) => {
              const launcher = getLauncherByName(firearm.launcher.attached);
              return (
                <div key={`${launcher.mag[i].class}`} className={`gear-table-row--container ${styles.magazineRow}`}>
                  <span>{`${launcher.mag[i].class} Rnd`}</span>
                  <span>{launcher.mag[i].weight}</span>
                  <span>{m.qty}</span>
                  <span>{correctFloatingPoint(m.qty * launcher.mag[i].weight)}</span>
                  <span>
                    <button aria-label="up" type="button" className="button--standard button--up" onClick={() => increaseUnderslungLauncherAmmo({ firearmToModify: firearm.name, magazineIndex: i })} />
                    <button aria-label="down" type="button" className="button--standard button--down" onClick={() => handleDecreaseAmmo(decreaseUnderslungLauncherAmmo, { firearmToModify: firearm.name, magazineIndex: i }, m.qty)} />
                  </span>
                </div>
              );
            })}
          </Fragment>
        ))}

        {grenades.map((grenade) => (
          <div key={grenade.name} className="gear-table-row--container">
            <span>
              <button aria-label="remove" type="button" className="button--standard button--close" onClick={() => removeGrenade(grenade.name)} />
              <span>{grenade.name}</span>
            </span>
            <span>{grenade.weight}</span>
            <span>{grenade.qty}</span>
            <span>{correctFloatingPoint(getGrenadeWeightByName(grenade.name) * grenade.qty)}</span>
            <span>
              <button aria-label="up" type="button" className="button--standard button--up" onClick={() => increaseGrenadeQty(grenade.name)} />
              <button aria-label="down" type="button" className="button--standard button--down" onClick={() => handleDecreaseWeapon(decreaseGrenadeQty, grenade.name, grenade.qty)} />
            </span>
          </div>
        ))}

        {launchers.map((launcher) => {
          const weight = getLauncherWeightByName(launcher.name);

          return (
            <Fragment key={launcher.name}>
              <div className="gear-table-row--container">
                <span>
                  <button aria-label="remove" type="button" className="button--standard button--close" onClick={() => removeLauncher(launcher.name)} />
                  <span>{launcher.name}</span>
                </span>
                <span>{weight}</span>
                <span>{launcher.qty}</span>
                <span>{correctFloatingPoint(weight * launcher.qty)}</span>
                <span>
                  <button aria-label="up" type="button" className="button--standard button--up" onClick={() => increaseLauncherQty(launcher.name)} />
                  <button aria-label="down" type="button" className="button--standard button--down" onClick={() => handleDecreaseWeapon(decreaseLauncherQty, launcher.name, launcher.qty)} />
                </span>
              </div>
              {launcher.mag.map((m, i) => {
                if (!m.class) {
                  return null;
                }

                return (
                  <div key={m.class} className={`gear-table-row--container ${styles.magazineRow}`}>
                    <span>{`${m.class} Rnd`}</span>
                    <span>{m.weight}</span>
                    <span>{m.qty}</span>
                    <span>{correctFloatingPoint(m.qty * m.weight)}</span>
                    <span>
                      <button aria-label="up" type="button" className="button--standard button--up" onClick={() => increaseLauncherAmmo({ launcherToModify: launcher.name, magazineIndex: i })} />
                      <button aria-label="down" type="button" className="button--standard button--down" onClick={() => handleDecreaseAmmo(decreaseLauncherAmmo, { launcherToModify: launcher.name, magazineIndex: i }, m.qty)} />
                    </span>
                  </div>
                );
              }) }
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

WeaponsTableBody.propTypes = {
  totalWeaponWeight: PropTypes.number.isRequired,
  increaseMagazineQty: PropTypes.func.isRequired,
  decreaseMagazineQty: PropTypes.func.isRequired,
  removeFirearm: PropTypes.func.isRequired,
  increaseFirearmQty: PropTypes.func.isRequired,
  decreaseFirearmQty: PropTypes.func.isRequired,
  increaseGrenadeQty: PropTypes.func.isRequired,
  decreaseGrenadeQty: PropTypes.func.isRequired,
  removeGrenade: PropTypes.func.isRequired,
  increaseLauncherQty: PropTypes.func.isRequired,
  decreaseLauncherQty: PropTypes.func.isRequired,
  removeLauncher: PropTypes.func.isRequired,
  increaseLauncherAmmo: PropTypes.func.isRequired,
  decreaseLauncherAmmo: PropTypes.func.isRequired,
  increaseUnderslungLauncherAmmo: PropTypes.func.isRequired,
  decreaseUnderslungLauncherAmmo: PropTypes.func.isRequired,
  toggleModifyWeapon: PropTypes.func.isRequired,
  firearms: PropTypes.arrayOf(gunObjShape).isRequired,
  grenades: PropTypes.arrayOf(PropTypes.object).isRequired,
  launchers: PropTypes.arrayOf(launcherShape).isRequired,
};

export default WeaponsTableBody;
