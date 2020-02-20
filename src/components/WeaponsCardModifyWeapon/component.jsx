import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { gunObjShape } from '../../helpers/proptypeShapes';
import { renderWeaponsCardCustomMag, renderWeaponsCardModifyWeight } from './SubComponents';
import ModifyHome from './ModifyHome';

import { renderMagazinesHeading, renderMagazines, addModButtonWithMargin } from './SubComponents';

import ButtonSlim from '../widgets/buttons/ButtonSlim';

import {magazineTableHeadings} from './data';

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
    console.log("??>", index, gunObj.name)
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


  const renderRemoveMagazineButton = (handleMagazineExistence, firearm, magazine, removed = false) => {
    const buttonName = removed === true ? 'replace' : 'remove';
    return (
      <ButtonSlim
      name={buttonName}
      className="handleMagazineInInventory"
      onClick={() => handleMagazineExistence(buttonName, { firearm, magazine })}
      />
      );
    };
    const handleMagazineExistence = (typeOfAction, payload) => (typeOfAction === 'remove' ? removeMagazine(payload) : replaceMagazine(payload));

  return (
    <>
      {(!createCustomMag && !modifyFirearmWeight)
    && (
      <div style={{ marginLeft: '3.5rem' }} className="modifyWeaponPanel">
        <span>Magazines</span>
        <ButtonSlim
          name="add"
          // id={id}
          onClick={() => toggleCreateCustomMag(true)}
        />
        <table>
          <thead>
            <tr>
              {magazineTableHeadings.map((value) => (
                <th>{value}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {gunObj.mag.map((magObj, index) => (
              <tr>
                <td>{magObj.type}</td>
                <td>{magObj.cap}</td>
                <td>{magObj.weight}</td>
                <td>
                  {/* <span className="checkbox">
                    <span className="inner" />
                  </span> */}
                  <button
                    type="button"
                    className={`${'?'} radioButton`}
                    onClick={() => setPrimaryMag(index, false)}
                  >
                    <span className="outerCircle">
                      <span className="inner" />
                    </span>
                  </button>
                </td>
                <td>
                  <span className="checkbox">
                    <span className="inner" />
                  </span>
                  {/* <span className="outerCircle">
                    <span className="inner"></span>
                  </span> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    // <ModifyHome
    //   gunObj={gunObj}
    //   removeAllGunMods={removeAllGunMods}
    //   toggleOnWeaponsCardViews={toggleOnWeaponsCardViews}
    //   setPrimaryMag={setPrimaryMag}
    //   handleMagazineExistence={handleMagazineExistence}
    //   handleRemoveMod={handleRemoveMod}
    // />
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