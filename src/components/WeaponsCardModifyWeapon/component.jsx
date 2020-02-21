import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { gunObjShape } from '../../helpers/proptypeShapes';
import { renderWeaponsCardCustomMag, renderWeaponsCardModifyWeight, renderMagazinesHeading, renderMagazines, addModButtonWithMargin } from './SubComponents';
import ModifyHome from './ModifyHome';


import ButtonSlim from '../widgets/buttons/ButtonSlim';

import { magazineTableHeadings } from './data';

import '../WeaponsCard/WeaponsCard.css';
import './styles.css';

const WeaponsCardModifyWeapon = ({
  // createCustomMag,
  // modifyFirearmWeight,
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
  // createCustomMag,
  // modifyFirearmWeight,
  const [createCustomMag, toggleCreateCustomMag] = useState(false);
  const [modifyFirearmWeight, toggleModifyFirearmWeight] = useState(false);

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


  const handleMagazineExistence = (payload) => (payload.magazine.removed ? replaceMagazine(payload) : removeMagazine(payload));

  // console.log('>>>', gunObj.mag);
  return (
    <>
      {(!createCustomMag && !modifyFirearmWeight)
    && (
      <div className="modifyWeaponPanel">
        <span>Magazines</span>
        <ButtonSlim
          name="add"
          // id={id}
          onClick={() => toggleCreateCustomMag(true)}
        />
        <table className="magazineTable">
          <thead>
            <tr>
              {magazineTableHeadings.map((value) => (
                <th>{value}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {gunObj.mag.map((magObj, index) => (
              <tr className={`${magObj.removed ? 'removedMagazine' : ''}${index === 0 ? 'primaryMagazine' : ''}`}>
                <td>{magObj.type}</td>
                <td>{magObj.cap}</td>
                <td>{magObj.weight}</td>
                <td>
                  <button
                    type="button"
                    className={`index${index} selectPrimaryButton`}
                    onClick={() => setPrimaryMag(index, false)}
                  >
                    <span className="buttonCircle" />
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className={`index${index} removeMagazineButton selectPrimaryButton`}
                    onClick={() => handleMagazineExistence({ firearm: gunObj.name, magazine: magObj })}
                  >
                    <span className="checkbox">
                      <span className="inner" />
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
      {createCustomMag && renderWeaponsCardCustomMag(handleAddCustomMag, toggleOffWeaponCardViews)}
      {modifyFirearmWeight && renderWeaponsCardModifyWeight(handleModifyFirearmWeight, toggleOffWeaponCardViews)}
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

/*
import { removeFirearmModification,
  modifyFirearm,
  setPrimaryMagazine,
  addCustomMagazine,
  removeMagazine,
  replaceMagazine } from '../../actions';
*/
