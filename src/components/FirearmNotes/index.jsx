import React from 'react';
import { gunObjShape } from '../../helpers/proptypeShapes';

const renderSpareAmmoNote = (magazine) => {
  if (magazine.type === 'Rnd') {
    const roundsString = magazine.cap === 1 ? 'Single Round' : 'Single Rounds';
    return (
      <div key={`${magazine.qty}${magazine.cap}`}>{`${magazine.qty} x ${roundsString}`}</div>
    );
  }
  return (
    <div key={`${magazine.qty}${magazine.cap}`}>{`${magazine.qty} x ${magazine.cap} rnd ${magazine.type}`}</div>
  );
};

const renderModificationNotes = modification => (
  <div key={modification.note}>{modification.note}</div>
);

const FirearmNotes = ({ gunObj }) => (
  <div className="firearm-notes">
    <div className="firearm-notes-heading">Notes</div>
    <div style={{ marginBottom: '0.1cm' }}>
      {gunObj.mag.map(magazine => renderSpareAmmoNote(magazine))}
    </div>
    <div style={{ marginBottom: '0.1cm' }}>
      {gunObj.bipod && <div>Bipod</div>}
      {gunObj.optics && <div>Optics</div>}
      {gunObj.selector && <div>{gunObj.selector}</div>}
    </div>
    {gunObj.modNotes && gunObj.modNotes.map(modification => renderModificationNotes(modification))}
  </div>
);

FirearmNotes.propTypes = {
  gunObj: gunObjShape,
};

export default FirearmNotes;
