import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gearShape } from '../../helpers/proptypeShapes';
import GearCard from '../GearCard';
import GearTable from '../GearTable';
import WeaponsTableBody from '../WeaponsTableBody';
import WeaponsCardWeaponStats from '../WeaponsCardWeaponStats';
import WeaponsCardSelectModal from '../WeaponsCardSelectModal';
import WeaponsCardModifyWeapon from '../WeaponsCardModifyWeapon';
import GrenadeSelectModal from '../GrenadeSelectModal';
import ButtonDeleteX from '../widgets/buttons/ButtonDeleteX';
import { calculateFirearmsArrayWeight } from '../../helpers/actionHelpers';

import './WeaponsCard.css';

export const getSelectedWeapons = (weaponArray) => (weaponArray === undefined ? [] : weaponArray);

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

  renderWeaponSelect = () => (
    <WeaponsCardSelectModal
      toggleOffWeaponCardViews={this.toggleOffWeaponCardViews}
    />
  )

  renderGrenadeSelect = () => (
    <GrenadeSelectModal
      toggleOffWeaponCardViews={this.toggleOffWeaponCardViews}
    />
  )

  renderModifyFirearm = () => {
    const { gear } = this.props;
    const { firearmToModify, createCustomMag, modifyFirearmWeight } = this.state;
    const selectedGuns = getSelectedWeapons(gear.firearms);
    const gunToModify = selectedGuns.filter((gunObj) => gunObj.name === firearmToModify)[0];

    return (
      <div className="equipmentModalContainer">
        <div className="--card ModifyWeaponStatTableContainer" style={{ fontSize: 'medium' }}>
          {this.renderCloseFirearmStatButton()}
          <div style={{ display: 'flex' }}>
            {this.renderFirearmStats(gunToModify)}
            <WeaponsCardModifyWeapon
              gunObj={gunToModify}
              createCustomMag={createCustomMag}
              modifyFirearmWeight={modifyFirearmWeight}
              toggleOnWeaponsCardViews={this.toggleOnWeaponsCardViews}
              toggleOffWeaponCardViews={this.toggleOffWeaponCardViews}
              removeAllGunMods={this.removeAllGunMods}
            />
          </div>
        </div>
      </div>
    );
  }

  renderCloseFirearmStatButton = () => (
    <div style={{ marginTop: '2px', marginLeft: '2px' }}>
      <ButtonDeleteX
        id="closeGunStatView"
        onClick={this.handleCloseFirearmStats}
      />
    </div>
  )

  renderFirearmStats = (gunToModify) => (
    <div style={{ width: '40rem' }}>
      <WeaponsCardWeaponStats
        gunObj={gunToModify}
      />
    </div>
  )

  render() {
    const { gear, removeAllFirearms } = this.props;
    const { showFirearms, modifyFirearm, showGrenades } = this.state;
    const selectedGuns = getSelectedWeapons(gear.firearms);
    const selectedGrenades = getSelectedWeapons(gear.grenades);
    const firearmsWeight = calculateFirearmsArrayWeight(selectedGuns);

    return (
      <GearCard gearType="weapons" buttonFunctions={[() => this.toggleOnWeaponsCardViews('showFirearms'), () => removeAllFirearms([]), () => this.toggleOnWeaponsCardViews('showGrenades')]}>
        <GearTable gearHeading="Weapons" totalWeight={Math.round(firearmsWeight * 1000) / 1000}>
          <WeaponsTableBody
            selectedGuns={selectedGuns}
            selectedGrenades={selectedGrenades}
            toggleOnWeaponsCardViews={this.toggleOnWeaponsCardViews}
            toggleModifyWeapon={this.toggleModifyWeapon}
          />
        </GearTable>
        {showFirearms && this.renderWeaponSelect()}
        {modifyFirearm && this.renderModifyFirearm()}
        {showGrenades && this.renderGrenadeSelect()}
      </GearCard>
    );
  }
}

WeaponsCard.propTypes = {
  removeAllFirearms: PropTypes.func,
  removeAllModificationsFromFirearm: PropTypes.func,
  gear: gearShape,
};

export default WeaponsCard;
