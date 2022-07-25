/* eslint-disable max-len */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import GearTableEntry from '../GearTableEntry';

import { getFullFirearmSystemWeightByObject } from '../../data/firearms';
import { getGrenadeWeightByName } from '../../data/grenades';
import { getLauncherByName } from '../../data/firearms/launchers';
import { getLauncherWeightByName } from '../../data/launchers';

import { gunObjShape, launcherShape } from '../../helpers/proptypeShapes';

const WeaponsTableBody = ({
  totalWeaponWeight,
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

      <div className="gear-card-body">
        {firearms.map((firearm, index) => (
          <Fragment key={firearm.name}>

            <GearTableEntry
              text={`${firearm.name}${firearm?.launcher ? ` - ${firearm.launcher.attached}` : ''}`}
              removeItem={() => removeFirearm(firearm.name)}
              modifyItem={index}
              weight={getFullFirearmSystemWeightByObject(firearm)}
              qty={firearm.qty}
              increaseItem={() => increaseFirearmQty(firearm.name)}
              decreaseItem={() => handleDecreaseWeapon(decreaseFirearmQty, firearm.name, firearm.qty)}
            />

            {firearm.mag.map((m, i) => {
              if (m.removed) {
                return null;
              }
              return (
                <GearTableEntry
                  key={`${m.type}${m.cap}${m.weight}`}
                  text={getMagazineText(m.type, m.cap)}
                  removeItem={false}
                  modifyItem={false}
                  weight={m.weight}
                  qty={m.qty}
                  increaseItem={() => increaseMagazineQty({ firearmToModify: firearm.name, magazineIndex: i })}
                  decreaseItem={() => handleDecreaseAmmo(decreaseMagazineQty, { firearmToModify: firearm.name, magazineIndex: i }, m.qty)}
                />
              );
            })}

            {firearm?.launcher && firearm.launcher.mag.map((m, i) => {
              const launcher = getLauncherByName(firearm.launcher.attached);
              return (
                <GearTableEntry
                  key={`${launcher.mag[i].class}`}
                  text={`${launcher.mag[i].class} Rnd`}
                  removeItem={false}
                  modifyItem={false}
                  weight={launcher.mag[i].weight}
                  qty={m.qty}
                  increaseItem={() => increaseUnderslungLauncherAmmo({ firearmToModify: firearm.name, magazineIndex: i })}
                  decreaseItem={() => handleDecreaseAmmo(decreaseUnderslungLauncherAmmo, { firearmToModify: firearm.name, magazineIndex: i }, m.qty)}
                />
              );
            })}
          </Fragment>
        ))}

        {grenades.map((grenade) => (
          <GearTableEntry
            key={grenade.name}
            text={grenade.name}
            removeItem={() => removeGrenade(grenade.name)}
            modifyItem={false}
            weight={getGrenadeWeightByName(grenade.name)}
            qty={grenade.qty}
            increaseItem={() => increaseGrenadeQty(grenade.name)}
            decreaseItem={() => handleDecreaseWeapon(decreaseGrenadeQty, grenade.name, grenade.qty)}
          />
        ))}

        {launchers.map((launcher) => (
          <Fragment key={launcher.name}>
            <GearTableEntry
              text={launcher.name}
              removeItem={() => removeLauncher(launcher.name)}
              modifyItem={false}
              weight={getLauncherWeightByName(launcher.name)}
              qty={launcher.qty}
              increaseItem={() => increaseLauncherQty(launcher.name)}
              decreaseItem={() => handleDecreaseWeapon(decreaseLauncherQty, launcher.name, launcher.qty)}
            />
            {launcher.mag.map((m, i) => {
              if (!m.class) {
                return null;
              }

              return (
                <GearTableEntry
                  key={m.class}
                  text={`${m.class} Rnd`}
                  removeItem={false}
                  modifyItem={false}
                  weight={m.weight}
                  qty={m.qty}
                  increaseItem={() => increaseLauncherAmmo({ launcherToModify: launcher.name, magazineIndex: i })}
                  decreaseItem={() => handleDecreaseAmmo(decreaseLauncherAmmo, { launcherToModify: launcher.name, magazineIndex: i }, m.qty)}
                />
              );
            }) }
          </Fragment>
        ))}
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
  // toggleModifyWeapon: PropTypes.func.isRequired,
  firearms: PropTypes.arrayOf(gunObjShape).isRequired,
  grenades: PropTypes.arrayOf(PropTypes.object).isRequired,
  launchers: PropTypes.arrayOf(launcherShape).isRequired,
};

export default WeaponsTableBody;
