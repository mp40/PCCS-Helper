import React from 'react';
import PropTypes from 'prop-types';
import WeaponStatsTable from '../../WeaponStatsTable';
import FirearmNotes from '../../FirearmNotes';
import ButtonDeleteX from '../../widgets/buttons/ButtonDeleteX';

import { gunObjShape } from '../../../helpers/proptypeShapes';

import { rifles } from '../../../data/firearms';

const FirearmInspection = ({ firearmToInspect, statBoxClassName, setFirearmToInspect, handleCloseStatCard }) => {
  const { launcher, rifle } = firearmToInspect;
  const buttonText = launcher ? 'View Grenade Data' : 'View Rifle Date';
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
    <div className={statBoxClassName} style={{ fontSize: 'medium' }}>
      <div>
        <ButtonDeleteX
          id="closeGunStatView"
          onClick={() => handleCloseStatCard()}
        />
        {(launcher || rifle) && (
        <button
          type="button"
          className="--button toggleViewGrenadeLauncher"
          onClick={() => handleSetFirearmToInspect()}
        >
          {buttonText}
        </button>
        )}
      </div>
      <div style={{ display: 'flex' }}>
        <div>
          <WeaponStatsTable weapon={firearmToInspect} />
        </div>
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
  statBoxClassName: PropTypes.string.isRequired,
  setFirearmToInspect: PropTypes.func.isRequired,
  handleCloseStatCard: PropTypes.func.isRequired,
};

export default FirearmInspection;
