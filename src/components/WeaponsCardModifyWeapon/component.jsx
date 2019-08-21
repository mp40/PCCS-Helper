import React from 'react';
import PropTypes from 'prop-types';
import { gunObjShape } from '../../helpers/proptypeShapes';
import { renderModificationOption } from './SubComponents';
import ModifyHome from './ModifyHome';
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

  return (
    <>
      {(!createCustomMag && !modifyFirearmWeight)
    && (
    <ModifyHome
      removeAllGunMods={removeAllGunMods}
      toggleOnWeaponsCardViews={toggleOnWeaponsCardViews}
      gunObj={gunObj}
      setPrimaryMag={setPrimaryMag}
      handleMagazineExistence={handleMagazineExistence}
      handleRemoveMod={handleRemoveMod}
    />
    )}
      {createCustomMag && renderModificationOption(handleAddCustomMag, WeaponsCardCustomMag, toggleOffWeaponCardViews)}
      {modifyFirearmWeight
        && renderModificationOption(handleModifyFirearmWeight, WeaponsCardModifyWeight, toggleOffWeaponCardViews)
        }
    </>
  );
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
