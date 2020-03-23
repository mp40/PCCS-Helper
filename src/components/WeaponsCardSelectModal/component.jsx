import React from 'react';
import PropTypes from 'prop-types';
import { gunObjShape } from '../../helpers/proptypeShapes';

import WeaponsModalSelection from '../WeaponsModalSelection';
import GearModal from '../GearModal';

import { isNotValidObjectToAdd } from '../../helpers/gaurds';

const WeaponsCardSelectModal = ({ addFirearm, firearms, toggleOffWeaponCardViews }) => {
  const handleAddFirearm = (gunObj) => {
    if (isNotValidObjectToAdd(firearms, gunObj)) {
      return;
    }
    addFirearm(gunObj);
  };

  return (
    <GearModal>
      <WeaponsModalSelection
        toggleOffWeaponCardViews={toggleOffWeaponCardViews}
        handleAddFirearm={handleAddFirearm}
      />
    </GearModal>
  );
};

WeaponsCardSelectModal.propTypes = {
  addFirearm: PropTypes.func,
  toggleOffWeaponCardViews: PropTypes.func,
  firearms: gunObjShape,
};

export default WeaponsCardSelectModal;
