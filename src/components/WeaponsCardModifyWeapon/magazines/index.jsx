import React from 'react';
import PropTypes from 'prop-types';
import { gunObjShape } from '../../../helpers/proptypeShapes';

import CheckBox from '../../widgets/buttons/CheckBox';
import ClickButton from '../../widgets/buttons/ClickButton';

import { magazineTableHeadings } from '../data';

const Magazines = ({ gunObj, setPrimaryMag, handleMagazineExistence, firearmToModify }) => (
  <>
    <div className="magazinesHeading">
      Magazines
    </div>
    <div className="magazineDetailsHeading">
      {magazineTableHeadings.map((value) => (
        <span key={value}>{value}</span>
      ))}
    </div>
    {gunObj.mag.map((magObj, index) => {
      if (magObj.class) {
        return null;
      }
      return (
        <div key={magObj.cap} className={`magazineDetailsBody ${gunObj.name}MagAtIndex${index} ${magObj.removed ? 'removedMagazine' : ''}${index === 0 ? 'primaryMagazine' : ''}`}>
          {['type', 'cap', 'weight'].map((value) => (
            <span key={value}>{magObj[value]}</span>
          ))}
          <span>
            <ClickButton name={`index${index} selectPrimaryButton`} preventDefault={index === 0} onClick={() => setPrimaryMag(index, magObj.removed)} />
          </span>
          <span>
            <CheckBox name={`index${index} removeMagazineButton`} onClick={() => handleMagazineExistence({ firearm: gunObj.name, magazine: magObj })} />
          </span>
        </div>
      );
    })}
  </>
);

Magazines.propTypes = {
  gunObj: gunObjShape,
  setPrimaryMag: PropTypes.func,
  handleMagazineExistence: PropTypes.func,
};

export default Magazines;
