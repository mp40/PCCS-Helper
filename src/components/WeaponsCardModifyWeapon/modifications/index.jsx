import React from 'react';
import PropTypes from 'prop-types';
import { gunObjShape } from '../../../helpers/proptypeShapes';

import CheckBox from '../../widgets/buttons/CheckBox';
import ClickButton from '../../widgets/buttons/ClickButton';

import { magazineTableHeadings } from '../data';
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
        <ButtonSlim
          name="remove"
          className="removeModification"
          onClick={() => removeFirearmModification({ firearm: firearmName, modNote: noteObj })}
        />
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
