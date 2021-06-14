import React from 'react';
import PropTypes from 'prop-types';
import WeaponStatsTable from '../../WeaponStatsTable';
import FirearmNotes from '../../FirearmNotes';

import { firearms, getFullFirearmSystemWeightByName } from '../../../data/firearms';

import styles from './styles.module.css';

const FirearmInspection = ({ firearmToInspect, setFirearmToInspect }) => {
  const gunObj = firearms[firearmToInspect];
  gunObj.weight = getFullFirearmSystemWeightByName(firearmToInspect);

  return (
    <div className={styles.card}>
      <div className={styles.header}>

        <div>
          <span>
            {`${gunObj.name} - ${gunObj.calibre}`}
          </span>
        </div>

        <button
          aria-label="close"
          className={styles.close}
          type="button"
          onClick={() => setFirearmToInspect(null)}
        />

      </div>

      <div className={styles.body}>
        <WeaponStatsTable weapon={gunObj} showName={false} />
        { gunObj.list !== 'shotguns'
          && (
          <div className="firearm-notes-wrapper">
            <FirearmNotes gunObj={gunObj} viewSpareAmmo={false} />
          </div>
          )}
      </div>

    </div>
  );
};

FirearmInspection.propTypes = {
  firearmToInspect: PropTypes.string.isRequired,
  setFirearmToInspect: PropTypes.func.isRequired,
};

export default FirearmInspection;
