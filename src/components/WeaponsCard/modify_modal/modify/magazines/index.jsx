import React from 'react';
import PropTypes from 'prop-types';

import { gunObjShape } from '../../../../../helpers/proptypeShapes';

import CheckBox from '../../../../widgets/buttons/CheckBox';
import ClickButton from '../../../../widgets/buttons/ClickButton';

import { magazineTableHeadings } from '../data';

import styles from './styles.module.css';

const Magazines = ({ gunObj, setPrimaryMag, handleMagazineExistence }) => (
  <div className={styles.wrapper}>
    <div className={styles.header}>
      Magazines
    </div>
    <div className={styles.titles}>
      {magazineTableHeadings.map((value) => (
        <span key={value}>{value}</span>
      ))}
    </div>
    {gunObj.mag.map((magObj, index) => {
      if (magObj.class) {
        return null;
      }
      return (
        <div key={magObj.cap} className={`${styles.magazine}  ${magObj.removed ? `${styles.removedMagazine}` : ''}${index === 0 ? `${styles.primaryMagazine}` : ''}`}>
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
  </div>
);

Magazines.propTypes = {
  gunObj: gunObjShape,
  setPrimaryMag: PropTypes.func,
  handleMagazineExistence: PropTypes.func,
};

export default Magazines;
