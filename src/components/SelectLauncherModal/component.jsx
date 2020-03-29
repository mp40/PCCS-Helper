/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GearModal from '../GearModal';
import GearModalContents from '../GearModalContents';
import GearCard from '../GearCard';
import WeaponStatsTable from '../WeaponStatsTable';

import ButtonDeleteX from '../widgets/buttons/ButtonDeleteX';

import { launchers } from '../../data/launchers';

import './SelectLauncherModal.css';

const SelectLauncherModal = ({ toggleOffWeaponCardViews, addLauncher }) => {
  const [showStats, toggleShowStats] = useState(false);
  const [launcherToView, setLauncherToView] = useState(null);

  const handleToggleShowStats = (launcher) => {
    setLauncherToView(launcher);
    toggleShowStats(true);
  };

  const handleAddLauncher = (launcher) => {
    addLauncher(launcher);
    toggleOffWeaponCardViews('showLaunchers');
  };

  return (
    <GearModal>
      <GearCard name="modalCard">
        <GearModalContents>
          <div className="launcherContentsContainer">
            <div className="launcherRowContainer">
              <ButtonDeleteX
                id="closeLauncherModal"
                onClick={() => toggleOffWeaponCardViews('showLaunchers')}
                className="closeModal"
              />
              {launchers().map((launcher) => (
                <div key={launcher.name} className="launcherRow">
                  <button
                    type="button"
                    onClick={() => handleToggleShowStats(launcher)}
                    className={`--infoButton --button view${launcher.name.replace(/\s+/g, '')}`}
                  />
                  <div
                    className="--selectableRow launcherEntry"
                    id={launcher.name}
                    onClick={() => handleAddLauncher(launcher)}
                  >
                    <span>{launcher.name}</span>
                    <span>{`${launcher.weight} lbs`}</span>
                  </div>
                </div>
              ))}
            </div>
            {showStats && <WeaponStatsTable weapon={launcherToView} />}
          </div>
        </GearModalContents>
      </GearCard>
    </GearModal>
  );
};

SelectLauncherModal.propTypes = {
  toggleOffWeaponCardViews: PropTypes.func,
  addLauncher: PropTypes.func,
};

export default SelectLauncherModal;
