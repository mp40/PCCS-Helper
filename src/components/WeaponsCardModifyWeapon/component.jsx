import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { gunObjShape } from '../../helpers/proptypeShapes';

import Magazines from './magazines';
import Modifications from './modifications';

import WeaponsCardCustomMag from '../WeaponsCardCustomMag';
import WeaponsCardModifyWeight from '../WeaponsCardModifyWeight';

import ButtonSlim from '../widgets/buttons/ButtonSlim';

import '../WeaponsCard/WeaponsCard.css';
import './styles.css';

const WeaponsCardModifyWeapon = ({
  gunObj,
  setPrimaryMagazine,
  removeFirearmModification,
  addCustomMagazine,
  modifyFirearm,
  removeMagazine,
  replaceMagazine,
  removeAllModificationsFromFirearm,
}) => {
  const [createCustomMag, toggleCreateCustomMag] = useState(false);
  const [modifyFirearmWeight, toggleModifyFirearmWeight] = useState(false);

  const setPrimaryMag = (index, removed) => {
    if (removed) {
      return;
    }
    setPrimaryMagazine({ firearm: gunObj.name, magazine: index });
  };

  const handleAddCustomMag = (newCustomMagazine) => {
    addCustomMagazine({ firearm: gunObj.name, magazine: newCustomMagazine });
    toggleCreateCustomMag(false);
  };

  const handleModifyFirearmWeight = (modNote) => {
    modifyFirearm({ firearm: gunObj.name, modNote });
    toggleModifyFirearmWeight(false);
  };


  const handleMagazineExistence = (payload) => (
    payload.magazine.removed ? replaceMagazine(payload) : removeMagazine(payload)
  );

  return (
    <div className="modifyWeaponPanel">
      {(!createCustomMag && !modifyFirearmWeight)
        && (
          <>
            <ButtonSlim
              name="add magazine"
              id="addCustomMagazine"
              onClick={() => toggleCreateCustomMag(true)}
            />
            <ButtonSlim
              name="add modification"
              id="modifyWeaponWeight"
              onClick={() => toggleModifyFirearmWeight(true)}
            />
            <ButtonSlim
              name="remove all mods"
              className="removeAllMods"
              onClick={() => removeAllModificationsFromFirearm(gunObj.name)}
            />
            <Magazines
              gunObj={gunObj}
              setPrimaryMag={setPrimaryMag}
              handleMagazineExistence={handleMagazineExistence}
            />
            <Modifications
              firearmName={gunObj.name}
              modNotes={gunObj.modNotes}
              removeFirearmModification={removeFirearmModification}
            />
          </>
        )}
      {createCustomMag && (
        <WeaponsCardCustomMag
          handleModification={handleAddCustomMag}
          toggleOffWeaponCardViews={() => toggleCreateCustomMag(false)}
        />
      )}
      {modifyFirearmWeight && (
        <WeaponsCardModifyWeight
          handleModification={handleModifyFirearmWeight}
          toggleOffWeaponCardViews={() => toggleModifyFirearmWeight(false)}
        />
      )}
    </div>
  );
};

WeaponsCardModifyWeapon.propTypes = {
  replaceMagazine: PropTypes.func,
  removeMagazine: PropTypes.func,
  modifyFirearm: PropTypes.func,
  addCustomMagazine: PropTypes.func,
  setPrimaryMagazine: PropTypes.func,
  removeFirearmModification: PropTypes.func,
  removeAllModificationsFromFirearm: PropTypes.func,
  gunObj: gunObjShape,
};

export default WeaponsCardModifyWeapon;
