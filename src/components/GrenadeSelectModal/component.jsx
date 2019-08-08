/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import GrenadeData from '../GrenadeData';
import { grenadeData } from '../../data/grenades';
import ButtonInfo from '../widgets/buttons/ButtonInfo';

import './GrenadeSelectModal.css';

const GrenadeSelectModal = ({ toggleOffWeaponCardViews, addGrenade }) => {
  const [viewGrenade, setGrenadeToView] = useState(null);

  const handleSelection = (grenade) => {
    addGrenade(grenade);
    toggleOffWeaponCardViews('showGrenades');
  };

  return (
    <div className="equipmentModalContainer">
      <div className="grenadeListCard">
        <div style={{ margin: '1rem 1rem' }}>
          <div style={{ marginBottom: '0.5rem' }}>Select Grenade</div>
          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginBottom: '0.5rem' }}>
              {grenadeData().map(grenade => (
                <div key={grenade.name} style={{ display: 'flex', width: '16ch' }}>
                  <div style={{ width: '2ch' }}>
                    <ButtonInfo
                      className={`view${grenade.name}Stats`}
                      onClick={() => setGrenadeToView(grenade)}
                    />
                  </div>
                  <div
                    className={`select${grenade.name}`}
                    onClick={() => handleSelection(grenade)}
                    style={{ width: '14ch', display: 'flex', justifyContent: 'space-between', fontSize: 'smaller' }}
                  >
                    <div>{grenade.name}</div>
                    <div>{grenade.w}</div>
                  </div>
                </div>
              ))}
            </div>
            {viewGrenade && (
            <GrenadeData grenade={viewGrenade} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

GrenadeSelectModal.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  addGrenade: PropTypes.func,
  toggleOffWeaponCardViews: PropTypes.func,
};

export default GrenadeSelectModal;
