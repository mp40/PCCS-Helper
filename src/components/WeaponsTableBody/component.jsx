/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import GearRow from '../GearRow';

import '../CharacterGeneration/CharacterGeneration.css';
import '../WeaponsCard/WeaponsCard.css';

const WeaponsTableBody = ({
  toggleModifyWeapon,
  selectedGuns,
  selectedGrenades,
  selectedLaunchers,
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
}) => (
  <tbody id="characterWeaponList">
    <GearRow
      gear={{ type: 'Firearm', remove: removeFirearm, up: increaseFirearmQty, down: decreaseFirearmQty, modify: toggleModifyWeapon, magUp: increaseMagazineQty, magDown: decreaseMagazineQty, array: selectedGuns }}
    />
    <GearRow
      gear={{ type: 'Grenade', remove: removeGrenade, up: increaseGrenadeQty, down: decreaseGrenadeQty, array: selectedGrenades }}
    />
    <GearRow
      gear={{ type: 'Launcher', remove: removeLauncher, up: increaseLauncherQty, down: decreaseLauncherQty, array: selectedLaunchers }}
    />
  </tbody>
);

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
  toggleModifyWeapon: PropTypes.func,
  selectedGuns: PropTypes.arrayOf(PropTypes.object),
  selectedGrenades: PropTypes.arrayOf(PropTypes.object),
  selectedLaunchers: PropTypes.arrayOf(PropTypes.object),
};

export default WeaponsTableBody;
