import React from 'react';
import PropTypes from 'prop-types';
import { gearShape } from '../../helpers/proptypeShapes';
import WeaponsModalSelection from '../WeaponsModalSelection';
import { isNotValidObjectToAdd } from '../../helpers/gaurds';

import { rifles, pistols, smgs, mgs, sniperRifles, shotguns } from '../../data/firearms';

const WeaponsCardSelectModal = ({ addFirearm, gear, toggleOffWeaponCardViews }) => {
  const handleAddFirearm = (gunObj) => {
    if (isNotValidObjectToAdd(gear.firearms, gunObj)) {
      return;
    }
    addFirearm(gunObj);
  };

  const firearmsArray = [...rifles(), ...pistols(), ...smgs(), ...mgs(), ...sniperRifles(), ...shotguns()];

  return (
    <div className="equipmentModalContainer">
      <WeaponsModalSelection
        firearmsArray={firearmsArray}
        toggleOffWeaponCardViews={toggleOffWeaponCardViews}
        handleAddFirearm={handleAddFirearm}
      />
    </div>
  );
};
// }

WeaponsCardSelectModal.propTypes = {
  addFirearm: PropTypes.func,
  toggleOffWeaponCardViews: PropTypes.func,
  gear: gearShape,
};

export default WeaponsCardSelectModal;
