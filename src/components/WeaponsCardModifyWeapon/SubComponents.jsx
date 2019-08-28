import React from 'react';
import WeaponsCardCustomMag from '../WeaponsCardCustomMag';
import WeaponsCardModifyWeight from '../WeaponsCardModifyWeight';
import ButtonSlim from '../widgets/buttons/ButtonSlim';

export const addModButtonWithMargin = (id, func, value) => (
  <div style={{ marginBottom: '5px' }}>
    <ButtonSlim
      name="add"
      id={id}
      onClick={() => func(value)}
    />
  </div>
);

export const renderAmmoCapacity = (magObj) => {
  if (magObj.type === 'Rnd') {
    return `${magObj.cap} loose rounds - `;
  }
  return `${magObj.cap} round ${magObj.type} - `;
};

const renderModificationOption = ComponentName => (handleModification, toggleOffWeaponCardViews) => (
  <div style={{ marginLeft: '5rem' }}>
    <ComponentName
      handleModification={handleModification}
      toggleOffWeaponCardViews={toggleOffWeaponCardViews}
    />
  </div>
);

export const renderWeaponsCardCustomMag = renderModificationOption(WeaponsCardCustomMag);
export const renderWeaponsCardModifyWeight = renderModificationOption(WeaponsCardModifyWeight);

export const renderMagazinesHeading = toggleOnWeaponsCardViews => (
  <div style={{ marginTop: '5px' }}>
    <div style={{ paddingRight: '5px', paddingTop: '5px', fontWeight: 'bold' }}>Magazines</div>
    {addModButtonWithMargin('addCustomMagazine', toggleOnWeaponsCardViews, 'createCustomMag')}
  </div>
);

export const renderRemoveMagazineButton = (handleMagazineExistence, firearm, magazine, removed = false) => {
  const buttonName = removed === true ? 'replace' : 'remove';
  return (
    <ButtonSlim
      name={buttonName}
      className="handleMagazineInInventory"
      onClick={() => handleMagazineExistence(buttonName, { firearm, magazine })}
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
          onClick={() => setPrimaryMag(index, magObj.removed)}
          id={`${gunObj.name}MagAtIndex${index}`}
        />
      )}
      {index > 0 && renderRemoveMagazineButton(handleMagazineExistence, gunObj.name, magObj, magObj.removed)}
    </div>

  </div>
));
