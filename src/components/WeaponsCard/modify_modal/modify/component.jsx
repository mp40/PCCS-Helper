import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { gunObjShape } from '../../../../helpers/proptypeShapes';

import Magazines from './magazines';
import Modifications from './modifications';
import Form from './form';

const FirearmModify = ({
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

  const setPrimaryMag = (index) => {
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
    <div>
      {(!createCustomMag && !modifyFirearmWeight)
        && (
          <>
            <button
              type="button"
              className="--button"
              onClick={() => toggleCreateCustomMag(true)}
            >
              add magazine
            </button>
            <button
              type="button"
              className="--button"
              onClick={() => toggleModifyFirearmWeight(true)}
            >
              add modification
            </button>
            <button
              type="button"
              className="--button"
              onClick={() => removeAllModificationsFromFirearm(gunObj.name)}
            >
              remove all mods
            </button>
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
        <Form
          formType="Magazine"
          handleModification={handleAddCustomMag}
          toggleOffWeaponCardViews={() => toggleCreateCustomMag(false)}
        />
      )}
      {modifyFirearmWeight && (
        <Form
          formType="Firearm"
          handleModification={handleModifyFirearmWeight}
          toggleOffWeaponCardViews={() => toggleModifyFirearmWeight(false)}
        />
      )}
    </div>
  );
};

FirearmModify.propTypes = {
  replaceMagazine: PropTypes.func.isRequired,
  removeMagazine: PropTypes.func.isRequired,
  modifyFirearm: PropTypes.func.isRequired,
  addCustomMagazine: PropTypes.func.isRequired,
  setPrimaryMagazine: PropTypes.func.isRequired,
  removeFirearmModification: PropTypes.func.isRequired,
  removeAllModificationsFromFirearm: PropTypes.func.isRequired,
  gunObj: gunObjShape.isRequired,
};

export default FirearmModify;
