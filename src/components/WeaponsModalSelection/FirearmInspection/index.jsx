import React from 'react';
import PropTypes from 'prop-types';
import WeaponStatsTable from '../../WeaponStatsTable';
import FirearmNotes from '../../FirearmNotes';

import { gunObjShape } from '../../../helpers/proptypeShapes';

import { rifles } from '../../../data/firearms';

import styles from './styles.module.css';

const FirearmInspection = ({ firearmToInspect, setFirearmToInspect, handleCloseStatCard }) => {
  const { launcher, rifle } = firearmToInspect;

  const buttonText = launcher ? 'View Grenade Data' : 'View Rifle Data';

  const handleSetFirearmToInspect = () => {
    if (launcher) {
      setFirearmToInspect(launcher);
    }

    if (rifle) {
      const gunObj = rifles().filter((gun) => gun.name === rifle)[0];
      setFirearmToInspect(gunObj);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>

        <div>
          <span>
            {`${firearmToInspect.name} - ${firearmToInspect.calibre}`}
          </span>
          {(launcher || rifle) && (
          <button
            type="button"
            onClick={() => handleSetFirearmToInspect()}
          >
            {buttonText}
          </button>
          )}
        </div>

        <button
          aria-label="close"
          className={styles.close}
          type="button"
          onClick={() => handleCloseStatCard()}
        />

      </div>

      <div className={styles.body}>
        <WeaponStatsTable weapon={firearmToInspect} showName={false} />
        { firearmToInspect.list !== 'shotguns'
          && (
          <div className="firearm-notes-wrapper">
            <FirearmNotes gunObj={firearmToInspect} viewSpareAmmo={false} />
          </div>
          )}
      </div>

    </div>
  );
};

FirearmInspection.propTypes = {
  firearmToInspect: gunObjShape.isRequired,
  setFirearmToInspect: PropTypes.func.isRequired,
  handleCloseStatCard: PropTypes.func.isRequired,
};

export default FirearmInspection;
