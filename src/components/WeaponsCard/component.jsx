import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gearShape } from '../../helpers/proptypeShapes';
import WeaponsCardBody from '../WeaponsCardBody';
import WeaponsCardWeaponStats from '../WeaponsCardWeaponStats';
import WeaponsCardSelectModal from '../WeaponsCardSelectModal';
import WeaponsCardModifyWeapon from '../WeaponsCardModifyWeapon';
import ButtonDeleteX from '../widgets/buttons/ButtonDeleteX';
import { isValidToDecreaseQantity, isValidToDecreaseMagazine } from '../../helpers/gaurds';
import { rifles, smgs, mgs, pistols, sniperRifles, shotguns } from '../../data/firearms';

import {
  calculateFirearmsArrayWeight,
  calculateTotalWeight,
} from '../../helpers/actionHelpers';

import './WeaponsCard.css';

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
    if (increment === 'up') {
      increaseFirearmQty(firearm);
    }
    if (increment === 'down' && isValidToDecreaseQantity(firearm)) {
      decreaseFirearmQty(firearm);
    }
  }

  handleRemoveGun = (gunObj) => {
    const { removeFirearm } = this.props;
    removeFirearm(gunObj);
  }

  handleIncrementMagQty = (firearm, magazine, increment) => {
    const { increaseMagazineQty, decreaseMagazineQty } = this.props;
    if (increment === 'up') {
      increaseMagazineQty({ firearm, magazine });
    }
    if (increment === 'down' && isValidToDecreaseMagazine(magazine)) {
      decreaseMagazineQty({ firearm, magazine });
    }
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
    const { gear, characterStats, modifyFirearmList } = this.props;
    const { firearmToModify } = this.state;
    const newGunArray = gear.firearms.map((gunObj) => {
      if (gunObj.name === firearmToModify) {
        gunObj.mag.push(newCustomMag);
      }
      return gunObj;
    });

    modifyFirearmList(this.calculateNewWeight(newGunArray), newGunArray, characterStats);
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

  handleModifyFirearmWeight = (noteObj) => {
    const { gear, characterStats, modifyFirearmList } = this.props;
    const { firearmToModify } = this.state;
    const newGunArray = gear.firearms.map((gunObj) => {
      const newGunObj = gunObj;
      if (newGunObj.name === firearmToModify) {
        newGunObj.weight = Math.round((newGunObj.weight + noteObj.weightMod) * 1000) / 1000;
        if (newGunObj.modNotes) {
          newGunObj.modNotes.push(noteObj);
        } else {
          newGunObj.modNotes = [noteObj];
        }
      }

      return newGunObj;
    });
    modifyFirearmList(this.calculateNewWeight(newGunArray), newGunArray, characterStats);
    this.toggleModifyFirearmWeight();
  }

  removeAllGunMods = (gunObj) => {
    const { gear, characterStats, modifyFirearmList } = this.props;
    const { firearmToModify } = this.state;

    const gunQty = gunObj.qty;
    const firearmsList = [...rifles(), ...smgs(), ...mgs(), ...pistols(), ...sniperRifles(), ...shotguns()];

    const freshGun = firearmsList.filter(obj => obj.name === firearmToModify)[0];

    freshGun.qty = gunQty;

    const newGunArray = gear.firearms.map(obj => (obj.name === firearmToModify ? freshGun : obj));

    modifyFirearmList(this.calculateNewWeight(newGunArray), newGunArray, characterStats);
  }

  render() {
    const { gear } = this.props;
    const { firearmToModify, showFirearms, modifyFirearm, createCustomMag, modifyFirearmWeight } = this.state;
    let selectedGuns = gear.firearms;
    if (selectedGuns === undefined) {
      selectedGuns = [];
    }
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
