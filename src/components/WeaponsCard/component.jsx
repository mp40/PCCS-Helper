import React, { useState } from 'react';
import PropTypes from 'prop-types';

import WeaponsTableBody from '../WeaponsTableBody';
import WeaponsModalSelection from '../WeaponsModalSelection';

import GrenadeSelectModal from '../GrenadeSelectModal';
import SelectLauncherModal from '../SelectLauncherModal';

const WeaponsCard = ({ removeAllWeapons }) => {
  const [showFirearmsModal, setShowFirearmsModal] = useState(false);
  const [showGrenadesModal, setShowGrenadesModal] = useState(false);
  const [showLaunchersModal, setShowLaunchersModal] = useState(false);

  return (
    <div className="card-standard gear-card">
      <div>

        <button
          type="button"
          className="button--standard"
          onClick={() => setShowFirearmsModal(true)}
        >
          Add Firearm
        </button>

        <button
          type="button"
          className="button--standard"
          onClick={() => setShowGrenadesModal(true)}
        >
          Add Grenade
        </button>

        <button
          type="button"
          className="button--standard"
          onClick={() => setShowLaunchersModal(true)}
        >
          Add Launcher
        </button>

        <button
          type="button"
          className="button--standard"
          onClick={() => removeAllWeapons([])}
        >
          Clear All
        </button>

      </div>

      <WeaponsTableBody />

      {showFirearmsModal && (
      <WeaponsModalSelection
        toggleOffWeaponCardViews={() => setShowFirearmsModal(false)}
      />
      )}

      {showGrenadesModal && (
      <GrenadeSelectModal
        toggleOffWeaponCardViews={() => setShowGrenadesModal(false)}
      />
      )}

      {showLaunchersModal && (
      <SelectLauncherModal
        toggleOffWeaponCardViews={() => setShowLaunchersModal(false)}
      />
      )}

    </div>
  );
};

WeaponsCard.propTypes = {
  removeAllWeapons: PropTypes.func.isRequired,
};

export default WeaponsCard;
