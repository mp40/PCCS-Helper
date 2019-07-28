import React from 'react';
import ButtonSlim from '../widgets/buttons/ButtonSlim';

export const renderAmmoCapacity = (magObj) => {
  if (magObj.type === 'Rnd') {
    return `${magObj.cap} loose rounds - `;
  }
  return `${magObj.cap} round ${magObj.type} - `;
};

export const renderModifyWeaponHeader = removeAllGunMods => (
  <>
    <div style={{ fontWeight: 'bold' }}>Modify Weapon</div>
    <ButtonSlim
      name="remove all mods"
      className="removeAllMods"
      onClick={removeAllGunMods.bind(this)}
    />
  </>
);

export const renderModificationOption = (handleModification, ComponentName, toggleOffWeaponCardViews) => (
  <div style={{ marginLeft: '5rem' }}>
    <ComponentName
      handleModification={handleModification}
      toggleOffWeaponCardViews={toggleOffWeaponCardViews}
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
      <ButtonSlim
        name="remove"
        className="removeModification"
        onClick={handleRemoveMod.bind(this, noteObj)}

      />
    </div>
  ))
);

export const rendeWeaponModifications = toggleOnWeaponsCardViews => (
  <div>
    <div style={{ paddingTop: '5px', fontWeight: 'bold' }}>Modifications</div>
    <div style={{ paddingBottom: '5px' }}>
      <ButtonSlim
        name="add"
        id="modifyWeaponWeight"
        onClick={toggleOnWeaponsCardViews.bind(this, 'modifyFirearmWeight')}
      />
    </div>
  </div>
);

export const renderMagazinesHeading = toggleOnWeaponsCardViews => (
  <div style={{ marginTop: '5px' }}>
    <div style={{ paddingRight: '5px', paddingTop: '5px', fontWeight: 'bold' }}>Magazines</div>
    <div style={{ marginBottom: '5px' }}>
      <ButtonSlim
        name="add"
        id="addCustomMagazine"
        onClick={toggleOnWeaponsCardViews.bind(this, 'createCustomMag')}
      />
    </div>
  </div>
);

export const renderRemoveMagazineButton = (handleMagazineExistence, firearm, magazine, removed = false) => {
  const buttonName = removed === true ? 'replace' : 'remove';
  return (
    <ButtonSlim
      name={buttonName}
      className="handleMagazineInInventory"
      onClick={handleMagazineExistence.bind(this, buttonName, { firearm, magazine })}
    />
  );
};

export const renderMagazines = (gunObj, setPrimaryMag, handleMagazineExistence) => gunObj.mag.map((magObj, index) => (
  <div key={`${magObj.cap}${magObj.weight}`} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
    <div>
      {renderAmmoCapacity(magObj)}
      {`${magObj.weight} lbs`}
    </div>
    <div className="modifyMagazinesButtons" style={{ marginLeft: '1px' }}>
      {index > 0
      && (
        <ButtonSlim
          name="primary"
          className="handleMagazineInInventory"
          onClick={setPrimaryMag.bind(this, index, magObj.removed)}
          id={`${gunObj.name}MagAtIndex${index}`}
        />
      )}
      {index > 0 && renderRemoveMagazineButton(handleMagazineExistence, gunObj.name, magObj, magObj.removed)}
    </div>

  </div>
));

export const renderModifyMagazines = (toggleOnWeaponsCardViews, gunObj, setPrimaryMag, handleMagazineExistence) => (
  <div className="modifyMagazines">
    {renderMagazinesHeading(toggleOnWeaponsCardViews)}
    {renderMagazines(gunObj, setPrimaryMag, handleMagazineExistence)}
  </div>
);
