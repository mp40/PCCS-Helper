import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gunObjShape, grenadeShape } from '../../helpers/proptypeShapes';
import GearCard from '../GearCard';
import GearTable from '../GearTable';
import WeaponsTableBody from '../WeaponsTableBody';
import WeaponStatsTable from '../WeaponStatsTable';
import WeaponsCardSelectModal from '../WeaponsCardSelectModal';
import WeaponsCardModifyWeapon from '../WeaponsCardModifyWeapon';
import GrenadeSelectModal from '../GrenadeSelectModal';
import SelectLauncherModal from '../SelectLauncherModal';
import ButtonDeleteX from '../widgets/buttons/ButtonDeleteX';
import { calculateWeaponArrayWeight } from '../../helpers/actionHelpers';

import GearModal from '../GearModal';

import './WeaponsCard.css';

export const getSelectedWeapons = (weaponArray) => (weaponArray === undefined ? [] : weaponArray);

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
    <WeaponsCardSelectModal
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

  renderModifyFirearm = () => {
    const { firearms } = this.props;
    const { firearmToModify } = this.state;
    const selectedGuns = getSelectedWeapons(firearms);
    const gunToModify = selectedGuns.filter((gunObj) => gunObj.name === firearmToModify)[0];

    return (
      <GearModal>
        <GearCard name="modalCard ModifyWeaponStatTableContainer">
          <ButtonDeleteX
            id="closeGunStatView"
            onClick={() => this.toggleOffWeaponCardViews('modifyFirearm')}
          />
          <div>
            <WeaponStatsTable
              weapon={gunToModify}
            />
            <WeaponsCardModifyWeapon
              gunObj={gunToModify}
            />
          </div>
        </GearCard>
      </GearModal>
    );
  }

  render() {
    const { firearms, grenades, launchers, removeAllFirearms } = this.props;
    const { showFirearms, modifyFirearm, showGrenades, showLaunchers } = this.state;
    const selectedGuns = getSelectedWeapons(firearms);
    const selectedGrenades = getSelectedWeapons(grenades);
    const selectedLaunchers = getSelectedWeapons(launchers);
    const firearmsWeight = calculateWeaponArrayWeight(selectedGuns);

    return (
      <GearCard gearType="weapons" hasButtonFunctions buttonFunctions={[() => this.toggleOnWeaponsCardViews('showFirearms'), () => removeAllFirearms([]), () => this.toggleOnWeaponsCardViews('showGrenades'), () => this.toggleOnWeaponsCardViews('showLaunchers')]}>
        <GearTable gearHeading="Weapons" totalWeight={Math.round(firearmsWeight * 1000) / 1000}>
          <WeaponsTableBody
            selectedGuns={selectedGuns}
            selectedGrenades={selectedGrenades}
            selectedLaunchers={selectedLaunchers}
            toggleOnWeaponsCardViews={this.toggleOnWeaponsCardViews}
            toggleModifyWeapon={this.toggleModifyWeapon}
          />
        </GearTable>
        {showFirearms && this.renderWeaponSelect()}
        {modifyFirearm && this.renderModifyFirearm()}
        {showGrenades && this.renderGrenadeSelect()}
        {showLaunchers && this.renderLauncherSelect()}
      </GearCard>
    );
  }
}

WeaponsCard.propTypes = {
  firearms: PropTypes.arrayOf(gunObjShape),
  grenades: PropTypes.arrayOf(grenadeShape),
  launchers: PropTypes.arrayOf(PropTypes.object),
  removeAllFirearms: PropTypes.func.isRequired,
};

export default WeaponsCard;
