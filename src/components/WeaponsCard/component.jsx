import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { gunObjShape } from '../../helpers/proptypeShapes';

import WeaponsTableBody from '../WeaponsTableBody';
import WeaponsModalSelection from '../WeaponsModalSelection';
import FirearmModifyModal from './modify_modal';

import GrenadeSelectModal from '../GrenadeSelectModal';
import SelectLauncherModal from '../SelectLauncherModal';

import { hydrateFirearmByObject } from '../../data/firearms/hydrate';

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

  toggleModifyWeapon = (firearm) => {
    const { modifyFirearm } = this.state;
    this.setState({ firearmToModify: firearm });
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

    const gunToModify = firearms.filter((gunObj) => gunObj.name === firearmToModify)[0];

    return (
      <div className="card-standard gear-card">
        <div>

          <button
            type="button"
            className="button--standard"
            onClick={() => this.toggleOnWeaponsCardViews('showFirearms')}
          >
            Add Firearm
          </button>

          <button
            type="button"
            className="button--standard"
            onClick={() => this.toggleOnWeaponsCardViews('showGrenades')}
          >
            Add Grenade
          </button>

          <button
            type="button"
            className="button--standard"
            onClick={() => this.toggleOnWeaponsCardViews('showLaunchers')}
          >
            Add Launcher
          </button>

          <button
            type="button"
            className="button--standard"
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

        {showFirearms && this.renderWeaponSelect()}
        {modifyFirearm && (
          <FirearmModifyModal
            gunToModify={hydrateFirearmByObject(gunToModify)}
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
  firearms: PropTypes.arrayOf(gunObjShape).isRequired,
  grenades: PropTypes.arrayOf(PropTypes.object).isRequired,
  launchers: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeAllWeapons: PropTypes.func.isRequired,
};

export default WeaponsCard;
