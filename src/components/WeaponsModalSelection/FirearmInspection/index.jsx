import React from 'react';
import PropTypes from 'prop-types';
import WeaponStatsTable from '../../WeaponStatsTable';
import FirearmNotes from '../../FirearmNotes';
import ButtonDeleteX from '../../widgets/buttons/ButtonDeleteX';

import { gunObjShape } from '../../../helpers/proptypeShapes';

const FirearmInspection = ({ firearmToInspect, statBoxClassName, handleCloseStatCard }) => (
  <div className={statBoxClassName} style={{ fontSize: 'medium' }}>
    <div>
      <ButtonDeleteX
        id="closeGunStatView"
        onClick={() => handleCloseStatCard()}
      />
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

FirearmInspection.propTypes = {
  firearmToInspect: gunObjShape.isRequired,
  statBoxClassName: PropTypes.string.isRequired,
  handleCloseStatCard: PropTypes.func.isRequired,
};

export default FirearmInspection;
