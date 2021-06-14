import React from 'react';
import PropTypes from 'prop-types';

import { gunObjShape } from '../../../../../helpers/proptypeShapes';

import CheckBox from '../../../../widgets/buttons/CheckBox';
import ClickButton from '../../../../widgets/buttons/ClickButton';

import { magazineTableHeadings } from '../data';

import styles from './styles.module.css';

const Magazines = ({ gunObj, setPrimaryMag, handleMagazineExistence }) => (
  <div className={styles.wrapper}>
    <h4>
      Magazines
    </h4>
    <div className={styles.titles}>
      {magazineTableHeadings.map((value) => (
        <span key={value}>{value}</span>
      ))}
    </div>
    {gunObj.mag.map((magObj, index) => (
      <div key={magObj.cap} className={`${styles.magazine}  ${magObj.removed ? `${styles.removedMagazine}` : ''}${index === 0 ? `${styles.primaryMagazine}` : ''}`}>
        {['type', 'cap', 'weight'].map((value) => (
          <span key={value}>{magObj[value]}</span>
        ))}
        <span>
          <ClickButton name={`index${index} selectPrimaryButton`} preventDefault={index === 0} onClick={() => setPrimaryMag(index, magObj.removed)} />
        </span>
        <span>
          <CheckBox name={`index${index} removeMagazineButton`} onClick={() => handleMagazineExistence({ firearmToUpdate: gunObj.name, magazineIndex: index }, magObj.removed)} />
        </span>
      </div>
    ))}
  </div>
);

Magazines.propTypes = {
  gunObj: gunObjShape,
  setPrimaryMag: PropTypes.func,
  handleMagazineExistence: PropTypes.func,
};

export default Magazines;
