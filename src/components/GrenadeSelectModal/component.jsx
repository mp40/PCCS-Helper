/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import GrenadeData from '../GrenadeData';
import { grenadeData } from '../../data/grenades';
import ButtonInfo from '../widgets/buttons/ButtonInfo';
import ButtonDeleteX from '../widgets/buttons/ButtonDeleteX';

import './GrenadeSelectModal.css';

const GrenadeSelectModal = ({ toggleOffWeaponCardViews, addGrenade, grenades }) => {
  const [viewGrenade, setGrenadeToView] = useState(null);

  const checkGrenadeInList = grenade => grenades.filter(obj => obj.name === grenade.name).length;

  const handleSelection = (grenade) => {
    if (checkGrenadeInList(grenade)) {
      return;
    }
    addGrenade(grenade);
    toggleOffWeaponCardViews('showGrenades');
  };

  const renderGrenadeHeading = () => (
    <div style={{ display: 'flex' }}>
      <span style={{ fontSize: 'small' }}>
        <ButtonDeleteX
          className="closeModal"
          onClick={() => toggleOffWeaponCardViews('showGrenades')}
        />
      </span>
      <div style={{ marginBottom: '0.5rem', marginLeft: '5px' }}>Select Grenade</div>
    </div>
  );

  const renderGrenadeList = () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginBottom: '0.5rem' }}>
      {grenadeData().map(grenade => (
        <div key={grenade.name} style={{ display: 'flex', width: '16ch', lineHeight: '100%' }}>
          <div style={{ width: '2ch' }}>
            <ButtonInfo
              className={`view${grenade.name}Stats`}
              onClick={() => setGrenadeToView(grenade)}
            />
          </div>
          <div
            className={`select${grenade.name} grenadeRow`}
            onClick={() => handleSelection(grenade)}
            style={{ width: '14ch', display: 'flex', justifyContent: 'space-between', fontSize: 'smaller' }}
          >
            <div>{grenade.name}</div>
            <div>{grenade.w}</div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="equipmentModalContainer">
      <div className="grenadeListCard">
        <div style={{ margin: '1rem 1rem' }}>
          {renderGrenadeHeading()}
          <div>
            {renderGrenadeList()}
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
  // eslint-disable-next-line react/forbid-prop-types
  grenades: PropTypes.array,
};

export default GrenadeSelectModal;
