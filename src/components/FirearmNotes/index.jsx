import React from 'react';
import { PropTypes } from 'prop-types';
import { gunObjShape } from '../../helpers/proptypeShapes';

import emptyFirearm from '../WeaponStatsTable/emptyFirearm';

import { getLauncherByName } from '../../data/firearms/launchers';

import './FirearmNotes.css';

const renderSpareAmmoNote = (magazine) => {
  if (magazine.type === 'Rnd') {
    const roundsString = magazine.qty === 1 ? 'Single Round' : 'Single Rounds';
    return (
      <div key={`${magazine.qty}${magazine.cap}`}>{`${magazine.qty} x ${roundsString}`}</div>
    );
  }
  return (
    <div key={`${magazine.qty}${magazine.cap}`}>{`${magazine.qty} x ${magazine.cap} rnd ${magazine.type}`}</div>
  );
};

const renderModificationNotes = (modification) => (
  <div key={modification.note}>{modification.note}</div>
);

const FirearmNotes = ({ gunObj, viewSpareAmmo }) => (
  <div className="firearm-notes">
    {(viewSpareAmmo || gunObj.bipod || gunObj.optics || gunObj.launcher || gunObj.selector || gunObj.modNotes) && <div className="firearm-notes-heading">Notes</div>}
    <div style={{ marginBottom: '0.1cm' }}>
      {viewSpareAmmo && gunObj.mag.map((magazine) => renderSpareAmmoNote(magazine))}
    </div>
    <div style={{ marginBottom: '0.1cm' }}>
      {gunObj.bipod && <div>Bipod</div>}
      {gunObj.optics && <div>Optics</div>}
      {gunObj?.launcher?.attached
      && (
      <>
        <div>{gunObj.launcher.attached}</div>
        {getLauncherByName(gunObj.launcher.attached).mag.map((m, i) => (
          <div key={m.class}>{`${m.class} x ${gunObj.launcher.mag[i].qty}`}</div>
        ))}
      </>
)}
      {gunObj.selector && <div>{gunObj.selector}</div>}
    </div>
    {gunObj.modNotes && gunObj.modNotes.map((modification) => renderModificationNotes(modification))}
  </div>
);

FirearmNotes.propTypes = {
  gunObj: gunObjShape,
  viewSpareAmmo: PropTypes.bool,
};

FirearmNotes.defaultProps = {
  gunObj: emptyFirearm(),
  viewSpareAmmo: true,
};

export default FirearmNotes;
