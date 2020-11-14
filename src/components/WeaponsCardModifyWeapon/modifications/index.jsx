import React from 'react';
import PropTypes from 'prop-types';
import ButtonSlim from '../../widgets/buttons/ButtonSlim';

const Modifications = ({ firearmName, modNotes, removeFirearmModification }) => (
  <>
    <div className="modificationsHeading">Modifications</div>
    {modNotes.map((noteObj) => (
      <div key={`${noteObj.note}${noteObj.weightMod}`}>
        <span>{noteObj.note}</span>
        <span>
          {`${noteObj.weightMod} lbs`}
        </span>
        {/* <ButtonSlim
          name="remove"
          className="removeModification"
          onClick={() => removeFirearmModification({ firearm: firearmName, modNote: noteObj })}
        /> */}
        <button
          type="button"
          onClick={() => removeFirearmModification({ firearm: firearmName, modNote: noteObj })}
        >
          Remove
        </button>
      </div>
    ))}
  </>
);

Modifications.propTypes = {
  firearmName: PropTypes.string.isRequired,
  modNotes: PropTypes.arrayOf(PropTypes.object),
  removeFirearmModification: PropTypes.func.isRequired,
};

Modifications.defaultProps = {
  modNotes: [],
};

export default Modifications;
