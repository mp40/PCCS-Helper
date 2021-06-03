import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { gunObjShape, grenadeShape } from '../../helpers/proptypeShapes';

import GearTable from '../GearTable';

import WeaponsTableBody from '../WeaponsTableBody';
import WeaponsModalSelection from '../WeaponsModalSelection';
import FirearmModifyModal from './modify_modal';

import GrenadeSelectModal from '../GrenadeSelectModal';
import SelectLauncherModal from '../SelectLauncherModal';

import { calculateWeaponArrayWeight } from '../../helpers/actionHelpers';

// mptodo -> functional component

class WeaponsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFirearms: false,
      modifyFirearm: false,
      firearmToModify: null,
      showGrenades: false,
      showLaunchers: false,
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

  renderWeaponSelect = () => (
    <WeaponsModalSelection
      toggleOffWeaponCardViews={this.toggleOffWeaponCardViews}
    />
  )

  renderGrenadeSelect = () => (
    <GrenadeSelectModal
      toggleOffWeaponCardViews={this.toggleOffWeaponCardViews}
    />
  )

  renderLauncherSelect = () => (
    <SelectLauncherModal
      toggleOffWeaponCardViews={this.toggleOffWeaponCardViews}
    />
  )

  render() {
    const { firearms, grenades, launchers, removeAllWeapons } = this.props;
    const { showFirearms, modifyFirearm, showGrenades, showLaunchers, firearmToModify } = this.state;
    const firearmsWeight = calculateWeaponArrayWeight(firearms);
    const grenadesWeight = grenades.reduce((acc, obj) => acc + (obj.qty * obj.weight), 0);
    const launchersWeight = calculateWeaponArrayWeight(launchers);

    const gunToModify = firearms.filter((gunObj) => gunObj.name === firearmToModify)[0];

    return (
      <div className="--card --gearCard">
        <div>

          <button
            type="button"
            className="--button"
            onClick={() => this.toggleOnWeaponsCardViews('showFirearms')}
          >
            Add Firearm
          </button>

          <button
            type="button"
            className="--button"
            onClick={() => this.toggleOnWeaponsCardViews('showGrenades')}
          >
            Add Grenade
          </button>

          <button
            type="button"
            className="--button"
            onClick={() => this.toggleOnWeaponsCardViews('showLaunchers')}
          >
            Add Launcher
          </button>

          <button
            type="button"
            className="--button"
            onClick={() => removeAllWeapons([])}
          >
            Clear All
          </button>

        </div>

        <WeaponsTableBody
          firearms={firearms}
          grenades={grenades}
          launchers={launchers}
          toggleOnWeaponsCardViews={this.toggleOnWeaponsCardViews}
          toggleModifyWeapon={this.toggleModifyWeapon}
        />

        {/* <GearTable gearHeading="Weapons" totalWeight={Math.round((firearmsWeight + grenadesWeight + launchersWeight) * 1000) / 1000}>
          <WeaponsTableBody
            firearms={firearms}
            grenades={grenades}
            launchers={launchers}
            toggleOnWeaponsCardViews={this.toggleOnWeaponsCardViews}
            toggleModifyWeapon={this.toggleModifyWeapon}
          />
        </GearTable> */}

        {showFirearms && this.renderWeaponSelect()}
        {modifyFirearm && (
          <FirearmModifyModal
            gunToModify={gunToModify}
            toggleOffWeaponCardViews={this.toggleOffWeaponCardViews}
          />
        )}
        {showGrenades && this.renderGrenadeSelect()}
        {showLaunchers && this.renderLauncherSelect()}
      </div>
    );
  }
}

WeaponsCard.propTypes = {
  firearms: PropTypes.arrayOf(gunObjShape),
  grenades: PropTypes.arrayOf(grenadeShape),
  launchers: PropTypes.arrayOf(PropTypes.object),
  removeAllWeapons: PropTypes.func.isRequired,
};

export default WeaponsCard;
