import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gunObjShape } from '../../helpers/proptypeShapes';
import {
  renderModifyWeaponHeader,
  renderModificationOption,
  renderModificationNotes,
  rendeWeaponModifications,
  renderModifyMagazines,
} from './SubComponents';
import WeaponsCardCustomMag from '../WeaponsCardCustomMag';
import WeaponsCardModifyWeight from '../WeaponsCardModifyWeight';

import '../WeaponsCard/WeaponsCard.css';

class WeaponsCardModifyWeapon extends Component {
  setPrimaryMag = (index) => {
    const { gunObj, setPrimaryMagazine } = this.props;

    setPrimaryMagazine({ firearm: gunObj.name, magazine: index });
  }

  handleRemoveMod = (modNote) => {
    const { gunObj, removeFirearmModification } = this.props;
    removeFirearmModification({ firearm: gunObj.name, modNote });
  }

  handleAddCustomMag = (newCustomMagazine) => {
    const { addCustomMagazine, gunObj, toggleOffWeaponCardViews } = this.props;
    addCustomMagazine({ firearm: gunObj.name, magazine: newCustomMagazine });
    toggleOffWeaponCardViews('createCustomMag');
  }

  handleModifyFirearmWeight = (modNote) => {
    const { modifyFirearm, toggleOffWeaponCardViews, gunObj } = this.props;
    modifyFirearm({ firearm: gunObj.name, modNote });
    toggleOffWeaponCardViews('modifyFirearmWeight');
  }

  handleRemoveMagazine = (payload) => {
    const { removeMagazine } = this.props;
    removeMagazine(payload);
  }

  render() {
    const {
      gunObj,
      createCustomMag,
      modifyFirearmWeight,
      removeAllGunMods,
      toggleOnWeaponsCardViews,
    } = this.props;

    if (!createCustomMag && !modifyFirearmWeight) {
      return (
        <div style={{ marginLeft: '5rem' }} className="modifyWeaponPanel">
          {renderModifyWeaponHeader(removeAllGunMods)}
          {renderModifyMagazines(toggleOnWeaponsCardViews, gunObj, this.setPrimaryMag, this.handleRemoveMagazine)}
          {rendeWeaponModifications(toggleOnWeaponsCardViews)}
          {gunObj.modNotes && renderModificationNotes(gunObj.modNotes, this.handleRemoveMod)}
        </div>
      );
    }
    if (createCustomMag) {
      return (
        renderModificationOption(this.handleAddCustomMag, WeaponsCardCustomMag)
      );
    }
    return (
      renderModificationOption(this.handleModifyFirearmWeight, WeaponsCardModifyWeight)
    );
  }
}

WeaponsCardModifyWeapon.propTypes = {
  removeMagazine: PropTypes.func,
  modifyFirearm: PropTypes.func,
  addCustomMagazine: PropTypes.func,
  setPrimaryMagazine: PropTypes.func,
  removeFirearmModification: PropTypes.func,
  createCustomMag: PropTypes.bool,
  modifyFirearmWeight: PropTypes.bool,
  removeAllGunMods: PropTypes.func,
  toggleOnWeaponsCardViews: PropTypes.func,
  toggleOffWeaponCardViews: PropTypes.func,
  gunObj: gunObjShape,
};

export default WeaponsCardModifyWeapon;
