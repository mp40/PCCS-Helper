import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WeaponsCardBody from './WeaponsCardBody';
import WeaponsCardWeaponStats from './WeaponsCardWeaponStats';
import WeaponsCardSelectModal from './WeaponsCardSelectModal';
import { modifyFirearmList } from '../actions';

import { rifles, smgs, mgs, pistols, sniperRifles, shotguns } from '../helpers/firearms';

import {
  calculateFirearmsArrayWeight,
  modifyObjectQtyInArray,
  removeObjectFromArray,
  calculateTotalWeight,
} from '../helpers/actionHelpers';

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

  handleIncrementGunQty = (modGunObj, modifier) => {
    const { gear, characterStats } = this.props;
    const { firearmToModify } = this.state;

    if (modGunObj.qty === 1 && modifier === -1) {
      return;
    }

    const newGunArray = gear.firearms.map((gunObj) => {
      const newGunObj = gunObj;
      if (newGunObj.name === firearmToModify) {
        newGunObj.qty += modifier;
      }
      return newGunObj;
    });

    this.props.modifyFirearmList(this.calculateNewWeight(newGunArray), newGunArray, characterStats);
  }

  handleRemoveGun = (gunObj) => {
    const { gear, characterStats } = this.props;
    const newGunArray = removeObjectFromArray(gear.firearms, gunObj);
    this.props.modifyFirearmList(this.calculateNewWeight(newGunArray), newGunArray, characterStats);
  }

  handleIncrementMagQty = (gunObj, magObj, modifier) => {
    const { gear, characterStats } = this.props;
    if (magObj.qty === 0 && modifier === -1) {
      return;
    }
    const newGunObj = gunObj;
    newGunObj.mag = modifyObjectQtyInArray(newGunObj.mag, magObj, modifier);
    const newGunArray = modifyObjectQtyInArray(gear.firearms, newGunObj);
    this.props.modifyFirearmList(this.calculateNewWeight(newGunArray), newGunArray, characterStats);
  }

  handleRemoveAllGuns = () => {
    const { characterStats } = this.props;
    this.props.modifyFirearmList(this.calculateNewWeight([]), [], characterStats);
  }

  handleModifyFirearm = (newGun) => {
    const { gear, characterStats } = this.props;
    const newGunArray = gear.firearms.map(gunObj => (gunObj.name === newGun.name ? newGun : gunObj));

    this.props.modifyFirearmList(this.calculateNewWeight(newGunArray), newGunArray, characterStats);
  }

  handleAddCustomMag = (newCustomMag) => {
    const { gear, characterStats } = this.props;
    const { firearmToModify } = this.state;
    const newGunArray = gear.firearms.map((gunObj) => {
      if (gunObj.name === firearmToModify) {
        gunObj.mag.push(newCustomMag);
      }
      return gunObj;
    });

    this.props.modifyFirearmList(this.calculateNewWeight(newGunArray), newGunArray, characterStats);
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
    const { gear, characterStats } = this.props;
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
    this.props.modifyFirearmList(this.calculateNewWeight(newGunArray), newGunArray, characterStats);
    this.toggleModifyFirearmWeight();
  }

  removeAllGunMods = (gunObj) => {
    const { gear, characterStats } = this.props;
    const { firearmToModify } = this.state;

    const gunQty = gunObj.qty;
    const firearmsList = [...rifles(), ...smgs(), ...mgs(), ...pistols(), ...sniperRifles(), ...shotguns()];

    const freshGun = firearmsList.filter(obj => obj.name === firearmToModify)[0];

    freshGun.qty = gunQty;

    const newGunArray = gear.firearms.map(obj => (obj.name === firearmToModify ? freshGun : obj));

    this.props.modifyFirearmList(this.calculateNewWeight(newGunArray), newGunArray, characterStats);
  }

  render() {
    const { gear } = this.props;
    const { firearmToModify, showFirearms, modifyFirearm, createCustomMag, modifyFirearmWeight } = this.state;
    const selectedGuns = gear.firearms;
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
              <WeaponsCardWeaponStats
                gunObj={gunToModify}
                modifyFirearm={modifyFirearm}
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
          )
        }

      </div>

    );
  }
}

WeaponsCard.propTypes = {
  gear: PropTypes.shape({
    uniform: PropTypes.string,
    equipment: PropTypes.arrayOf(PropTypes.object),
    firearms: PropTypes.arrayOf(PropTypes.object),
  }),
  characterStats: PropTypes.objectOf(PropTypes.number),
};

const mapStateToProps = state => ({
  totalWeight: state.totalWeight,
  characterStats: state.characterStats,
  gear: state.gear,
});


export default connect(mapStateToProps, { modifyFirearmList })(WeaponsCard);