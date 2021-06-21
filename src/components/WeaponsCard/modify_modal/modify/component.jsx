import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { gunObjShape } from '../../../../helpers/proptypeShapes';

import Magazines from './magazines';
import Modifications from './modifications';
import Optics from './optics';
import Launchers from './launchers';

import Form from './form';

import styles from './styles.module.css';

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
    addCustomMagazine({ firearmToUpdate: gunObj.name, magazine: newCustomMagazine });
    toggleCreateCustomMag(false);
  };

  const handleModifyFirearmWeight = (modNote) => {
    modifyFirearm({ firearm: gunObj.name, modNote });
    toggleModifyFirearmWeight(false);
  };

  const handleMagazineExistence = (payload, isRemoved) => (
    isRemoved ? replaceMagazine(payload) : removeMagazine(payload)
  );

  return (
    <div className={styles.wrapper}>
      {(!createCustomMag && !modifyFirearmWeight)
        && (
          <>
            <div className={styles.header}>
              <button
                type="button"
                onClick={() => toggleCreateCustomMag(true)}
              >
                add magazine
              </button>
              <button
                type="button"
                onClick={() => toggleModifyFirearmWeight(true)}
              >
                add modification
              </button>
              <button
                type="button"
                onClick={() => removeAllModificationsFromFirearm(gunObj.name)}
              >
                remove all mods
              </button>
            </div>
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

            <Optics firearm={gunObj.name} optics={gunObj.optics} />

            {gunObj?.launcher?.ableToAttach && (
            <Launchers
              firearm={gunObj.name}
              ableToAttach={gunObj.launcher.ableToAttach}
              attachedLauncher={gunObj.launcher.attached}
            />
          )}
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
