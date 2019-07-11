import React from 'react';
// import PropTypes from 'prop-types';
import ButtonSlim from '../widgets/buttons/ButtonSlim';

export const renderModifyWeaponHeader = removeAllGunMods => (
  <>
    <div>Modify Weapon</div>
    <button
      type="button"
      className="removeAllMods"
      onClick={removeAllGunMods.bind(this)}
    >
              Remove All Mods
    </button>
  </>
);

export const renderModificationOption = (handleModification, ComponentName) => (
  <div style={{ marginLeft: '5rem' }}>
    <ComponentName
      handleModification={handleModification}
    />
  </div>
);

export const renderModificationNotes = (notes, handleRemoveMod) => (
  notes.map(noteObj => (
    <div key={`${noteObj.note}${noteObj.weightMod}`}>
      <span>{noteObj.note}</span>
      <span>
        {`${noteObj.weightMod} lbs`}
      </span>
      <button
        type="submit"
        className="removeModification"
        onClick={handleRemoveMod.bind(this, noteObj)}
      >
          remove
      </button>
    </div>
  ))
);

export const rendeWeaponModifications = toggleOnWeaponsCardViews => (
  <div style={{ display: 'flex' }}>
    <div style={{ paddingTop: '5px' }}>Weight</div>
    <div style={{ marginLeft: '5px', paddingTop: '4px', display: 'inline-block', height: '5px' }}>
      <ButtonSlim
        name="set"
        id="modifyWeaponWeight"
        onClick={toggleOnWeaponsCardViews.bind(this, 'modifyFirearmWeight')}
      />
    </div>
  </div>
);

export const renderMagazinesHeading = toggleOnWeaponsCardViews => (
  <div style={{ display: 'flex' }}>
    <div style={{ paddingRight: '5px', paddingTop: '5px' }}>Magazines</div>
    <div>
      <ButtonSlim
        name="+"
        id="addCustomMagazine"
        onClick={toggleOnWeaponsCardViews.bind(this, 'createCustomMag')}
      />
    </div>
  </div>
);

export const renderRemoveMagazineButton = (handleMagazineExistence, firearm, magazine, removed = false) => {
  const buttonName = removed === true ? 'replace' : 'remove';
  return (
    <button
      type="button"
      className="handleMagazineInInventory"
      onClick={handleMagazineExistence.bind(this, buttonName, { firearm, magazine })}
    >
      {buttonName}
    </button>
  );
};

export const renderMagazines = (gunObj, setPrimaryMag, handleMagazineExistence) => gunObj.mag.map((magObj, index) => (
  <div key={`${magObj.cap}${magObj.weight}`}>
    {`${magObj.cap} round ${magObj.type}`}
    {`${magObj.weight} lbs`}
    {index > 0
      ? <button type="button" id={`${gunObj.name}MagAtIndex${index}`} onClick={setPrimaryMag.bind(this, index)} style={{ opacity: '0.6' }}>primary</button>
      : <button type="button" id={`${gunObj.name}MagAtIndex${index}`}>primary</button>
      }
    {index > 0 && renderRemoveMagazineButton(handleMagazineExistence, gunObj.name, magObj, magObj.removed)}
  </div>
));

export const renderModifyMagazines = (toggleOnWeaponsCardViews, gunObj, setPrimaryMag, handleMagazineExistence) => (
  <div className="modifyMagazines">
    {renderMagazinesHeading(toggleOnWeaponsCardViews)}
    {renderMagazines(gunObj, setPrimaryMag, handleMagazineExistence)}
  </div>
);
