/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import GrenadeData from '../GrenadeData';
import { grenadeData, specialGrenades } from '../../data/grenades';
import ButtonInfo from '../widgets/buttons/ButtonInfo';
import ButtonDeleteX from '../widgets/buttons/ButtonDeleteX';

import './GrenadeSelectModal.css';

const GrenadeSelectModal = ({ toggleOffWeaponCardViews, addGrenade, grenades }) => {
  const [viewGrenade, setGrenadeToView] = useState(null);

  const checkGrenadeInList = (grenade) => grenades.filter((obj) => obj.name === grenade.name).length;

  const handleSelection = (grenade) => {
    if (checkGrenadeInList(grenade)) {
      return;
    }
    addGrenade(grenade);
    toggleOffWeaponCardViews('showGrenades');
  };

  const renderGrenadeHeading = () => (
    <div className="grenadeListCardHeading">
      <ButtonDeleteX
        className="closeModal"
        onClick={() => toggleOffWeaponCardViews('showGrenades')}
      />
      <div>Select Grenade</div>
    </div>
  );

  const renderGrenadeList = () => (
    [...grenadeData(), ...specialGrenades()].map((grenade) => (
      <div key={grenade.name}>
        <ButtonInfo
          className={`view${grenade.name}Stats`}
          onClick={() => setGrenadeToView(grenade)}
        />
        <div
          className={`select${grenade.name} grenadeRow`}
          onClick={() => handleSelection(grenade)}
        >
          <div>{grenade.name}</div>
          <div>{grenade.w}</div>
        </div>
      </div>
    ))
  );

  return (
    <div className="equipmentModalContainer">
      <div className="--card grenadeListCard">
        {renderGrenadeHeading()}
        <div className="grenadeList">
          {renderGrenadeList()}
        </div>
        {viewGrenade && (
          <GrenadeData grenade={viewGrenade} />
        )}
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
