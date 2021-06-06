import React from 'react';
import PropTypes from 'prop-types';
import GearRow from '../GearRow';

import { getFullFirearmSystemWeightByName, getFullFirearmSystemWeightByObject } from '../../data/firearms';
import { correctFloatingPoint } from '../../utils';

import { hydrateFirearmByObject } from '../../data/firearms/hydrate';

import { gunObjShape, grenadeShape, launcherShape } from '../../helpers/proptypeShapes';

import styles from './styles.module.css';
// hydrateFirearmByObject

// mptodo recieve dehydrtaed guns from store

const WeaponsTableBody = ({
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
}) => {
  const handleDecreaseFirearm = (firearm) => {
    if (firearm.qty <= 1) {
      return;
    }

    decreaseFirearmQty(firearm.name);
  };

  const handleDecreaseMagazine = (firearmToModify, magazineIndex, qty) => {
    if (qty === 0) {
      return;
    }

    decreaseMagazineQty({ firearmToModify, magazineIndex });
  };

  const getMagazineText = (type, cap) => {
    if (type === 'Rnd') {
      return 'Single Round';
    }
    return `${cap} round ${type}`;
  };

  return (
    <div>
      <div className="weapon-table-header--container">
        <span>Weapon</span>
        <span>Weight</span>
        <span>Qty</span>
        <span>Lbs</span>
        <span>x=?</span>
      </div>

      {firearms.map((firearm) => (
        <>
          <div key={firearm.name} className="weapon-table-row--container">

            <span>
              <button aria-label="remove" type="button" className="button--standard button--close" onClick={() => removeFirearm(firearm.name)} />
              <button type="button" className="button--standard" onClick={() => toggleModifyWeapon(firearm.name)}>{firearm.name}</button>
            </span>
            <span>{getFullFirearmSystemWeightByObject(firearm)}</span>
            <span>{firearm.qty}</span>
            <span>{correctFloatingPoint(getFullFirearmSystemWeightByObject(firearm) * firearm.qty)}</span>
            <span>
              <button aria-label="up" type="button" className="button--standard button--up" onClick={() => increaseFirearmQty(firearm.name)} />
              <button aria-label="down" type="button" className="button--standard button--down" onClick={() => handleDecreaseFirearm(firearm)} />
            </span>
          </div>
          {firearm.mag.map((m, i) => (
            <div key={`${m.type}${m.cap}${m.weight}`} className={`weapon-table-row--container ${styles.magazineRow}`}>
              <span>{getMagazineText(m.type, m.cap)}</span>
              <span>{m.weight}</span>
              <span>{m.qty}</span>
              <span>{correctFloatingPoint(m.qty * m.weight)}</span>
              <span>
                <button aria-label="up" type="button" className="button--standard button--up" onClick={() => increaseMagazineQty({ firearmToModify: firearm.name, magazineIndex: i })} />
                <button aria-label="down" type="button" className="button--standard button--down" onClick={() => handleDecreaseMagazine(firearm.name, i, m.qty)} />
              </span>
            </div>
          ))}
        </>
      ))}

      {/* <GearRow
      gear={{ type: 'Firearm', remove: removeFirearm, up: increaseFirearmQty, down: decreaseFirearmQty, modify: toggleModifyWeapon, magUp: increaseMagazineQty, magDown: decreaseMagazineQty, array: firearms }}
    />
    <GearRow
      gear={{ type: 'Grenade', remove: removeGrenade, up: increaseGrenadeQty, down: decreaseGrenadeQty, array: grenades }}
    />
    <GearRow
      gear={{ type: 'Launcher', remove: removeLauncher, up: increaseLauncherQty, down: decreaseLauncherQty, magUp: increaseLauncherAmmo, magDown: decreaseLauncherAmmo, array: launchers }}
    /> */}
    </div>
  );
};

WeaponsTableBody.propTypes = {
  increaseMagazineQty: PropTypes.func,
  decreaseMagazineQty: PropTypes.func,
  removeFirearm: PropTypes.func,
  increaseFirearmQty: PropTypes.func,
  decreaseFirearmQty: PropTypes.func,
  increaseGrenadeQty: PropTypes.func,
  decreaseGrenadeQty: PropTypes.func,
  removeGrenade: PropTypes.func,
  increaseLauncherQty: PropTypes.func,
  decreaseLauncherQty: PropTypes.func,
  removeLauncher: PropTypes.func,
  increaseLauncherAmmo: PropTypes.func,
  decreaseLauncherAmmo: PropTypes.func,
  toggleModifyWeapon: PropTypes.func,
  firearms: PropTypes.arrayOf(gunObjShape),
  grenades: PropTypes.arrayOf(grenadeShape),
  launchers: PropTypes.arrayOf(launcherShape),
};

export default WeaponsTableBody;
