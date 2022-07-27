import React from 'react';
import PropTypes from 'prop-types';

import Firearms from './firearms';
import Grenades from './grenades';
import Launchers from './launchers';

const WeaponsTableBody = ({
  totalWeaponWeight,
}) => (
  <div>
    <div className="gear-table-header--container">
      <span>Weapon</span>
      <span>Weight</span>
      <span>Qty</span>
      <span>Lbs</span>
      <span>{totalWeaponWeight}</span>
    </div>

    <div className="gear-card-body">
      <Firearms />
      <Grenades />
      <Launchers />
    </div>

  </div>
);

WeaponsTableBody.propTypes = {
  totalWeaponWeight: PropTypes.number.isRequired,
};

export default WeaponsTableBody;
