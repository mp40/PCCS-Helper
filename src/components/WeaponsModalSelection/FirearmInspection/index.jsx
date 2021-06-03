import React from 'react';
import PropTypes from 'prop-types';
import WeaponStatsTable from '../../WeaponStatsTable';
import FirearmNotes from '../../FirearmNotes';

import { gunObjShape } from '../../../helpers/proptypeShapes';

import { riflesList, firearms, getFullFirearmSystemWeightByName } from '../../../data/firearms';

import styles from './styles.module.css';

const FirearmInspection = ({ firearmToInspect, setFirearmToInspect }) => {
  // mptodo - attached launchers
  // const { launcher, rifle } = firearmToInspect;

  // const buttonText = launcher ? 'View Grenade Data' : 'View Rifle Data';

  // const handleSetFirearmToInspect = () => {
  //   if (launcher) {
  //     setFirearmToInspect(launcher);
  //   }

  //   if (rifle) {
  //     const gunObj = riflesList().filter((gun) => gun.name === rifle)[0];
  //     setFirearmToInspect(gunObj);
  //   }
  // };

  const gunObj = firearms[firearmToInspect];
  gunObj.weight = getFullFirearmSystemWeightByName(firearmToInspect);

  return (
    <div className={styles.card}>
      <div className={styles.header}>

        <div>
          <span>
            {`${gunObj.name} - ${gunObj.calibre}`}
          </span>
          {/* {(launcher || rifle) && (
          <button
            type="button"
            onClick={() => handleSetFirearmToInspect()}
          >
            {buttonText}
          </button>
          )} */}
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
        { firearmToInspect.list !== 'shotguns'
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
  firearmToInspect: gunObjShape.isRequired,
  setFirearmToInspect: PropTypes.func.isRequired,
};

export default FirearmInspection;
