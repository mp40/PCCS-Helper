import React from 'react';
import { PropTypes } from 'prop-types';
import { grenadeData } from '../../data/grenades';

import './GrenadeSelectModal.css';

const GrenadeSelectModal = ({ toggleOffWeaponCardViews }) => {
  const x = () => undefined;
  return (
    <div className="equipmentModalContainer">
      <div className="grenadeListCard">
        <div>Heading</div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            {grenadeData().map(grenade => (
              <tr key={grenade.name}>
                <td>{grenade.name}</td>
                <td>{grenade.w}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

GrenadeSelectModal.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  // grenade: PropTypes.object,
  toggleOffWeaponCardViews: PropTypes.func,
};

export default GrenadeSelectModal;
