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

const ModifyFirearmModal = ({
  gunToModify,
  // handleCloseFirearmStats,
  // toggleOnWeaponsCardViews,
  // toggleOffWeaponCardViews,
  removeAllModificationsFromFirearm }) => {
  // const [modifyFirearmWeight, toggleModifyWeight] = useState(false);
  // const [createCustomMag, toggleCreateMagazine] = useState(false);

  return (
    <GearModal>
      <GearCard name="modalCard ModifyWeaponStatTableContainer">
        <ButtonDeleteX
          id="closeGunStatView"
          // onClick={handleCloseFirearmStats}
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
};

ModifyFirearmModal.propTypes = {
  gunToModify: gunObjShape,
  removeAllModificationsFromFirearm: PropTypes.func,
};

export default ModifyFirearmModal;

/*

class WeaponsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFirearms: false,
      modifyFirearm: false,
      firearmToModify: null,
      createCustomMag: false,
      modifyFirearmWeight: false,
      showGrenades: false,
    };
  }

  toggleOffWeaponCardViews = (viewToToggle) => {
    this.setState({ [viewToToggle]: false });
  }

  toggleOnWeaponsCardViews = (viewToToggle) => {
    this.setState({ [viewToToggle]: true });
  }

  toggleModifyWeapon = (gunObj) => {
    const { modifyFirearm } = this.state;
    this.setState({ firearmToModify: gunObj.name });
    this.setState({ modifyFirearm: !modifyFirearm });
  }

  removeAllGunMods = () => {
    const { removeAllModificationsFromFirearm } = this.props;
    const { firearmToModify } = this.state;

    removeAllModificationsFromFirearm(firearmToModify);
  }

  handleCloseFirearmStats = () => {
    this.setState({ modifyFirearmWeight: false });
    this.setState({ createCustomMag: false });
    this.toggleOffWeaponCardViews('modifyFirearm');
  }

  */

/*
renderModifyFirearm = () => {
    const { gear } = this.props;
    const { firearmToModify, createCustomMag, modifyFirearmWeight } = this.state;
    const selectedGuns = getSelectedWeapons(gear.firearms);
    const gunToModify = selectedGuns.filter((gunObj) => gunObj.name === firearmToModify)[0];

    return (
      <GearModal>
        <GearCard name="modalCard ModifyWeaponStatTableContainer">
          <ButtonDeleteX
            id="closeGunStatView"
            onClick={this.handleCloseFirearmStats}
          />
          <div>
            <WeaponsCardWeaponStats
              gunObj={gunToModify}
            />
            <WeaponsCardModifyWeapon
              gunObj={gunToModify}
              createCustomMag={createCustomMag}
              modifyFirearmWeight={modifyFirearmWeight}
              toggleOnWeaponsCardViews={this.toggleOnWeaponsCardViews}
              toggleOffWeaponCardViews={this.toggleOffWeaponCardViews}
              removeAllGunMods={this.removeAllGunMods}
            />
          </div>
        </GearCard>
      </GearModal>
    );
  }


*/