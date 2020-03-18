/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import WeaponsModalSelection from '../WeaponsModalSelection';
import GearModal from '../GearModal';

import GearModalContents from '../GearModalContents';
import GearCard from '../GearCard';

import WeaponStatsTable from '../WeaponStatsTable';

import ButtonStandard from '../widgets/buttons/ButtonStandard';
import ButtonInfo from '../widgets/buttons/ButtonInfo';
import ButtonDeleteX from '../widgets/buttons/ButtonDeleteX';

import { launchers } from '../../data/launchers';

import './styles.css';

const SelectLauncherModal = () => {
  const [showStats, toggleShowStats] = useState(false);
  const [launcherToView, setLauncherToView] = useState(null);

  const handleToggleShowStats = (launcher) => {
    setLauncherToView(launcher);
    toggleShowStats(true);
  };

  return (
    <GearModal>
      <GearCard name="modalCard">
        <GearModalContents>
          <div className="launcherContentsContainer">
            <div className="launcherRowContainer">
              {launchers().map((launcher) => (
                <div key={launcher.name} className="launcherRow">
                  <ButtonInfo
                    id={`view${launcher.name.replace(/\s+/g, '')}`}
                    onClick={() => handleToggleShowStats(launcher)}
                  />
                  <div
                    className="launcherEntry"
                    id={launcher.name}
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

export default SelectLauncherModal;
