import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gearShape } from '../../helpers/proptypeShapes';
import WeaponsCardBody from '../WeaponsCardBody';
import WeaponsCardWeaponStats from '../WeaponsCardWeaponStats';
import WeaponsCardSelectModal from '../WeaponsCardSelectModal';
import WeaponsCardModifyWeapon from '../WeaponsCardModifyWeapon';
import ButtonDeleteX from '../widgets/buttons/ButtonDeleteX';
import { handleIncrement } from '../../helpers/gaurds';
import { rifles, smgs, mgs, pistols, sniperRifles, shotguns } from '../../data/firearms';

import {
  calculateFirearmsArrayWeight,
  calculateTotalWeight,
} from '../../helpers/actionHelpers';

import './WeaponsCard.css';

export const getSelectedWeapons = firearms => (firearms === undefined ? [] : firearms);

class WeaponsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFirearms: false,
      modifyFirearm: false,
      firearmToModify: null,
      createCustomMag: false,
      modifyFirearmWeight: false,
    };
  }

  calculateNewWeight = (newGunArray) => {
    const { gear } = this.props;
    return calculateTotalWeight(gear.uniform, gear.equipment, newGunArray);
  }

  toggleShowFirearms = () => {
    const { showFirearms } = this.state;
    this.setState({ showFirearms: !showFirearms });
  }

  toggleModifyWeapon = (gunObj) => {
    const { modifyFirearm } = this.state;
    this.setState({ firearmToModify: gunObj.name });
    this.setState({ modifyFirearm: !modifyFirearm });
  }

  closeModifyWeapon =() => {
    this.setState({ modifyFirearm: false });
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

  handleModifyFirearm = (newGun) => {
    const { gear, characterStats, modifyFirearmList } = this.props;
    const newGunArray = gear.firearms.map(gunObj => (gunObj.name === newGun.name ? newGun : gunObj));

    modifyFirearmList(this.calculateNewWeight(newGunArray), newGunArray, characterStats);
  }

  handleAddCustomMag = (newCustomMag) => {
    const { addCustomMagazine } = this.props;
    const { firearmToModify } = this.state;

    addCustomMagazine({ firearm: firearmToModify, magazine: newCustomMag });
    this.toggleCreateCustomMag();
  }

  toggleCreateCustomMag = () => {
    const { createCustomMag } = this.state;
    this.setState({ createCustomMag: !createCustomMag });
  }

  toggleModifyFirearmWeight = () => {
    const { modifyFirearmWeight } = this.state;
    this.setState({ modifyFirearmWeight: !modifyFirearmWeight });
  }

  handleModifyFirearmWeight = (modNote) => {
    const { modifyFirearm } = this.props;
    const { firearmToModify } = this.state;

    this.toggleModifyFirearmWeight();
    modifyFirearm({ firearm: firearmToModify, modNote });
  }

  removeAllGunMods = () => {
    const { removeAllModificationsFromFirearm } = this.props;
    const { firearmToModify } = this.state;

    removeAllModificationsFromFirearm(firearmToModify);
  }

  render() {
    const { gear } = this.props;
    const { firearmToModify, showFirearms, modifyFirearm, createCustomMag, modifyFirearmWeight } = this.state;
    const selectedGuns = getSelectedWeapons(gear.firearms);

    const weaponsWeight = calculateFirearmsArrayWeight(selectedGuns);

    const gunToModify = selectedGuns.filter(gunObj => gunObj.name === firearmToModify)[0];

    return (
      <div style={{ width: '33%' }} className="WeaponSelect">

        <WeaponsCardBody
          selectedGuns={selectedGuns}
          weaponsWeight={weaponsWeight}
          toggleShowFirearms={this.toggleShowFirearms}
          handleRemoveAllGuns={this.handleRemoveAllGuns}
          handleRemoveGun={this.handleRemoveGun}
          handleIncrementGunQty={this.handleIncrementGunQty}
          handleIncrementMagQty={this.handleIncrementMagQty}
          toggleModifyWeapon={this.toggleModifyWeapon}
        />

        {showFirearms
          && (
            <WeaponsCardSelectModal
              closeShowFirearms={this.toggleShowFirearms}
            />
          )
        }

        {modifyFirearm
          && (
            <div className="equipmentModalContainer">
              <div className="WeaponStatTableContainer" style={{ fontSize: 'medium' }}>
                <div style={{ marginTop: '2px', marginLeft: '2px' }}>
                  <ButtonDeleteX
                    id="closeGunStatView"
                    onClick={this.closeModifyWeapon}
                  />
                </div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '40rem' }}>
                    <WeaponsCardWeaponStats
                      gunObj={gunToModify}
                    />
                  </div>
                  <WeaponsCardModifyWeapon
                    gunObj={gunToModify}
                    createCustomMag={createCustomMag}
                    modifyFirearmWeight={modifyFirearmWeight}
                    handleModifyFirearm={this.handleModifyFirearm}
                    toggleCreateCustomMag={this.toggleCreateCustomMag}
                    handleAddCustomMag={this.handleAddCustomMag}
                    toggleModifyFirearmWeight={this.toggleModifyFirearmWeight}
                    handleModifyFirearmWeight={this.handleModifyFirearmWeight}
                    removeAllGunMods={this.removeAllGunMods}
                  />
                </div>
              </div>


            </div>
          )
        }

      </div>

    );
  }
}

WeaponsCard.propTypes = {
  removeAllModificationsFromFirearm: PropTypes.func,
  addCustomMagazine: PropTypes.func,
  modifyFirearm: PropTypes.func,
  increaseMagazineQty: PropTypes.func,
  decreaseMagazineQty: PropTypes.func,
  removeFirearm: PropTypes.func,
  removeAllFirearms: PropTypes.func,
  increaseFirearmQty: PropTypes.func,
  decreaseFirearmQty: PropTypes.func,
  modifyFirearmList: PropTypes.func,
  gear: gearShape,
  characterStats: PropTypes.objectOf(PropTypes.number),
};

export default WeaponsCard;
