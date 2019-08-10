import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gearShape } from '../../helpers/proptypeShapes';
import WeaponsCardBody from '../WeaponsCardBody';
import WeaponsCardWeaponStats from '../WeaponsCardWeaponStats';
import WeaponsCardSelectModal from '../WeaponsCardSelectModal';
import WeaponsCardModifyWeapon from '../WeaponsCardModifyWeapon';
import GrenadeSelectModal from '../GrenadeSelectModal';
import ButtonDeleteX from '../widgets/buttons/ButtonDeleteX';
import { handleIncrement } from '../../helpers/gaurds';

import './WeaponsCard.css';

export const getSelectedWeapons = weaponArray => (weaponArray === undefined ? [] : weaponArray);

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

  handleIncrementGunQty = (firearm, increment) => {
    const { increaseFirearmQty, decreaseFirearmQty } = this.props;
    handleIncrement(firearm, increment, increaseFirearmQty, decreaseFirearmQty);
  }

  handleRemoveGun = (gunObj) => {
    const { removeFirearm } = this.props;
    removeFirearm(gunObj);
  }

  handleIncrementMagQty = (firearm, magazine, increment) => {
    const { increaseMagazineQty, decreaseMagazineQty } = this.props;
    handleIncrement({ firearm, magazine }, increment, increaseMagazineQty, decreaseMagazineQty);
  }

  handleRemoveAllGuns = () => {
    const { removeAllFirearms } = this.props;
    removeAllFirearms([]);
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
    const gunToModify = selectedGuns.filter(gunObj => gunObj.name === firearmToModify)[0];

    return (
      <div className="equipmentModalContainer">
        <div className="ModifyWeaponStatTableContainer" style={{ fontSize: 'medium' }}>
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

  renderFirearmStats = gunToModify => (
    <div style={{ width: '40rem' }}>
      <WeaponsCardWeaponStats
        gunObj={gunToModify}
      />
    </div>
  )

  render() {
    const { gear } = this.props;
    const { showFirearms, modifyFirearm, showGrenades } = this.state;
    const selectedGuns = getSelectedWeapons(gear.firearms);
    const selectedGrenades = getSelectedWeapons(gear.grenades);

    return (
      <div style={{ width: '33%' }} className="WeaponSelect">

        <WeaponsCardBody
          selectedGuns={selectedGuns}
          selectedGrenades={selectedGrenades}
          toggleOnWeaponsCardViews={this.toggleOnWeaponsCardViews}
          handleRemoveAllGuns={this.handleRemoveAllGuns}
          handleRemoveGun={this.handleRemoveGun}
          handleIncrementGunQty={this.handleIncrementGunQty}
          handleIncrementMagQty={this.handleIncrementMagQty}
          toggleModifyWeapon={this.toggleModifyWeapon}
        />
        {showFirearms && this.renderWeaponSelect()}
        {modifyFirearm && this.renderModifyFirearm()}
        {showGrenades && this.renderGrenadeSelect()}
      </div>
    );
  }
}

WeaponsCard.propTypes = {
  removeAllModificationsFromFirearm: PropTypes.func,
  increaseMagazineQty: PropTypes.func,
  decreaseMagazineQty: PropTypes.func,
  removeFirearm: PropTypes.func,
  removeAllFirearms: PropTypes.func,
  increaseFirearmQty: PropTypes.func,
  decreaseFirearmQty: PropTypes.func,
  gear: gearShape,
};

export default WeaponsCard;
