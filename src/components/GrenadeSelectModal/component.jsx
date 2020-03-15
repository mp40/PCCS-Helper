/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import GrenadeData from '../GrenadeData';
import { grenadeData, specialGrenades } from '../../data/grenades';
import { grenadeShape } from '../../helpers/proptypeShapes';
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
      <span>Select Grenade</span>
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
          className={`--selectableRow select${grenade.name}`}
          onClick={() => handleSelection(grenade)}
        >
          <div>{grenade.name}</div>
          <div>{grenade.weight}</div>
        </div>
      </div>
    ))
  );

  return (
    <div className="--modalOverlay">
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
  addGrenade: PropTypes.func,
  toggleOffWeaponCardViews: PropTypes.func,
  // grenades: PropTypes.arrayOf(PropTypes.object),
  grenades: PropTypes.arrayOf(grenadeShape),
};

export default GrenadeSelectModal;
