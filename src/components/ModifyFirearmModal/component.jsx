import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { gearShape, gunObjShape } from '../../helpers/proptypeShapes';
import GearCard from '../GearCard';
import GearTable from '../GearTable';
import WeaponsTableBody from '../WeaponsTableBody';
import WeaponsCardWeaponStats from '../WeaponsCardWeaponStats';
import WeaponsCardSelectModal from '../WeaponsCardSelectModal';
import WeaponsCardModifyWeapon from '../WeaponsCardModifyWeapon';
import GrenadeSelectModal from '../GrenadeSelectModal';
import ButtonDeleteX from '../widgets/buttons/ButtonDeleteX';
import { calculateFirearmsArrayWeight } from '../../helpers/actionHelpers';

import GearModal from '../GearModal';

const ModifyFirearmModal = ({ gunToModify,
  // handleCloseFirearmStats,
  // toggleOnWeaponsCardViews,
  // toggleOffWeaponCardViews,
  removeAllModificationsFromFirearm }) =>
// const [modifyFirearmWeight, toggleModifyWeight] = useState(false);
// const [createCustomMag, toggleCreateMagazine] = useState(false);

  (
    <GearModal>
      <GearCard name="modalCard ModifyWeaponStatTableContainer">
        <ButtonDeleteX
          id="closeGunStatView"
        />
        <div>
          <WeaponsCardWeaponStats
            gunObj={gunToModify}
          />
          <WeaponsCardModifyWeapon
            gunObj={gunToModify}
            // createCustomMag={createCustomMag}
            // modifyFirearmWeight={modifyFirearmWeight}
            // toggleOnWeaponsCardViews={this.toggleOnWeaponsCardViews}
            // toggleOffWeaponCardViews={this.toggleOffWeaponCardViews}
            removeAllGunMods={() => removeAllModificationsFromFirearm(gunToModify.name)}
          />
        </div>
      </GearCard>
    </GearModal>
  );
ModifyFirearmModal.propTypes = {
  gunToModify: gunObjShape,
  removeAllModificationsFromFirearm: PropTypes.func,
};

export default ModifyFirearmModal;
