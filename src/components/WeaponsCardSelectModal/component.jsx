import React from 'react';
import PropTypes from 'prop-types';
import { gearShape } from '../../helpers/proptypeShapes';
import WeaponsModalSelection from '../WeaponsModalSelection';
import { isNotValidObjectToAdd } from '../../helpers/gaurds';

import GearModal from '../GearModal';

import GearCard from '../GearCard';

const WeaponsCardSelectModal = ({ addFirearm, gear, toggleOffWeaponCardViews }) => {
  const handleAddFirearm = (gunObj) => {
    if (isNotValidObjectToAdd(gear.firearms, gunObj)) {
      return;
    }
    addFirearm(gunObj);
  };


  return (
    <GearModal>
      {/* <GearCard name="modalCard"> */}
      <WeaponsModalSelection
        toggleOffWeaponCardViews={toggleOffWeaponCardViews}
        handleAddFirearm={handleAddFirearm}
      />
      {/* </GearCard> */}
    </GearModal>
  );
};

WeaponsCardSelectModal.propTypes = {
  addFirearm: PropTypes.func,
  toggleOffWeaponCardViews: PropTypes.func,
  gear: gearShape,
};

export default WeaponsCardSelectModal;
