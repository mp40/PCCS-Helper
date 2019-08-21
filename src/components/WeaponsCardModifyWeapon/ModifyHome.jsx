import React from 'react';
import PropTypes from 'prop-types';
import { gunObjShape } from '../../helpers/proptypeShapes';
import ButtonSlim from '../widgets/buttons/ButtonSlim';

import { renderMagazinesHeading, renderMagazines } from './SubComponents';

const ModifyHome = ({
  removeAllGunMods,
  toggleOnWeaponsCardViews,
  gunObj,
  setPrimaryMag,
  handleMagazineExistence,
  handleRemoveMod,
}) => {
  const renderModifyWeaponHeader = () => (
    <>
      <div style={{ fontWeight: 'bold' }}>Modify Weapon</div>
      <ButtonSlim
        name="remove all mods"
        className="removeAllMods"
        onClick={() => removeAllGunMods()}
      />
    </>
  );
  const renderModifyMagazines = () => (
    <div className="modifyMagazines">
      {renderMagazinesHeading(toggleOnWeaponsCardViews)}
      {renderMagazines(gunObj, setPrimaryMag, handleMagazineExistence)}
    </div>
  );
  const rendeWeaponModifications = () => (
    <div>
      <div style={{ paddingTop: '5px', fontWeight: 'bold' }}>Modifications</div>
      <div style={{ paddingBottom: '5px' }}>
        <ButtonSlim
          name="add"
          id="modifyWeaponWeight"
          onClick={() => toggleOnWeaponsCardViews('modifyFirearmWeight')}
        />
      </div>
    </div>
  );
  const renderModificationNotes = notes => (
    notes.map(noteObj => (
      <div key={`${noteObj.note}${noteObj.weightMod}`}>
        <span>{noteObj.note}</span>
        <span>
          {`${noteObj.weightMod} lbs`}
        </span>
        <ButtonSlim
          name="remove"
          className="removeModification"
          onClick={() => handleRemoveMod(noteObj)}

        />
      </div>
    ))
  );
  return (
    <div style={{ marginLeft: '3.5rem' }} className="modifyWeaponPanel">
      {renderModifyWeaponHeader()}
      {renderModifyMagazines()}
      {rendeWeaponModifications()}
      {gunObj.modNotes && renderModificationNotes(gunObj.modNotes)}
    </div>
  );
};

ModifyHome.propTypes = {
  setPrimaryMag: PropTypes.func,
  handleMagazineExistence: PropTypes.func,
  handleRemoveMod: PropTypes.func,
  removeAllGunMods: PropTypes.func,
  toggleOnWeaponsCardViews: PropTypes.func,
  gunObj: gunObjShape,
};
export default ModifyHome;
