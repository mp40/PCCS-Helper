import React from 'react';
import PropTypes from 'prop-types';
import { gunObjShape } from '../../../helpers/proptypeShapes';

import CheckBox from '../../widgets/buttons/CheckBox';
import ClickButton from '../../widgets/buttons/ClickButton';

import { magazineTableHeadings } from '../data';

const Magazines = ({ gunObj, setPrimaryMag, handleMagazineExistence }) => (
  <>
    <div className="magazinesHeading">Magazines</div>
    <div className="magazineDetailsHeading">
      {magazineTableHeadings.map((value) => (
        <span>{value}</span>
      ))}
    </div>
    {gunObj.mag.map((magObj, index) => (
      <div className={`magazineDetailsBody ${gunObj.name}MagAtIndex${index} ${magObj.removed ? 'removedMagazine' : ''}${index === 0 ? 'primaryMagazine' : ''}`}>
        {['type', 'cap', 'weight'].map((value) => (
          <span>{magObj[value]}</span>
        ))}
        <span>
          <ClickButton name={`index${index} selectPrimaryButton`} preventDefault={index === 0} onClick={() => setPrimaryMag(index, false)} />
        </span>
        <span>
          <CheckBox name={`index${index} removeMagazineButton`} preventDefault={magObj.removed === true} onClick={() => handleMagazineExistence({ firearm: gunObj.name, magazine: magObj })} />
        </span>
      </div>
    ))}
  </>
);

Magazines.propTypes = {
  gunObj: gunObjShape,
  setPrimaryMag: PropTypes.func,
  handleMagazineExistence: PropTypes.func,
};

export default Magazines;
