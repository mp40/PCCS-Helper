import React from 'react';
import { PropTypes } from 'prop-types';
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
  <div>
    {/* {console.log(gunObj.modNotes)} */}
    {gunObj.mag.map(magazine => renderSpareAmmoNote(magazine))}
    {/* <div>{gunObj.modNotes[0].note}</div> */}
    {gunObj.modNotes && gunObj.modNotes.map(modification => renderModificationNotes(modification))}
  </div>
);

FirearmNotes.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  // magazines: PropTypes.array,
  gunObj: gunObjShape,
};

// FirearmNotes.defaultProps = {
//   magazines: [{ qty: 0 }],
// };

export default FirearmNotes;
