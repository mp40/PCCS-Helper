import React from 'react';
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

const WeaponsCardModifyWeapon = ({
  createCustomMag,
  modifyFirearmWeight,
  gunObj,
  removeAllGunMods,
  toggleOnWeaponsCardViews,
  setPrimaryMagazine,
  removeFirearmModification,
  addCustomMagazine,
  toggleOffWeaponCardViews,
  modifyFirearm,
  removeMagazine,
  replaceMagazine,
}) => {
  const setPrimaryMag = (index, removed) => {
    if (removed) {
      return;
    }
    setPrimaryMagazine({ firearm: gunObj.name, magazine: index });
  };

  const handleRemoveMod = (modNote) => {
    removeFirearmModification({ firearm: gunObj.name, modNote });
  };

  const handleAddCustomMag = (newCustomMagazine) => {
    addCustomMagazine({ firearm: gunObj.name, magazine: newCustomMagazine });
    toggleOffWeaponCardViews('createCustomMag');
  };

  const handleModifyFirearmWeight = (modNote) => {
    modifyFirearm({ firearm: gunObj.name, modNote });
    toggleOffWeaponCardViews('modifyFirearmWeight');
  };

  const handleMagazineExistence = (typeOfAction, payload) => (typeOfAction === 'remove' ? removeMagazine(payload) : replaceMagazine(payload));

  const renderDefaultContent = () => (
    <div style={{ marginLeft: '3.5rem' }} className="modifyWeaponPanel">
      {renderModifyWeaponHeader(removeAllGunMods)}
      {renderModifyMagazines(toggleOnWeaponsCardViews, gunObj, setPrimaryMag, handleMagazineExistence)}
      {rendeWeaponModifications(toggleOnWeaponsCardViews)}
      {gunObj.modNotes && renderModificationNotes(gunObj.modNotes, handleRemoveMod)}
    </div>
  );

  const renderContent = () => {
    if (!createCustomMag && !modifyFirearmWeight) {
      return renderDefaultContent();
    }
    if (createCustomMag) {
      return renderModificationOption(handleAddCustomMag, WeaponsCardCustomMag, toggleOffWeaponCardViews);
    }
    return (
      renderModificationOption(handleModifyFirearmWeight, WeaponsCardModifyWeight, toggleOffWeaponCardViews)
    );
  };

  return renderContent();
};

WeaponsCardModifyWeapon.propTypes = {
  replaceMagazine: PropTypes.func,
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
