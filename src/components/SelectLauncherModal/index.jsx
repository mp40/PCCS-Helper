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
          <>
            {launchers().map((launcher) => (
              <div key={launcher.name} style={{ display: 'flex', width: '30%', paddingLeft: '.2rem', paddingRight: '.2rem' }}>
                <ButtonInfo
                  id={`view${launcher.name.replace(/\s+/g, '')}`}
                  onClick={() => handleToggleShowStats(launcher)}
                />
                <div
                  className="firearmEntry"
                  id={launcher.name}
                >
                  <span>{launcher.name}</span>
                  <span>{`${launcher.weight} lbs`}</span>
                </div>
              </div>
            ))}
            {showStats && <WeaponStatsTable weapon={launcherToView} />}
          </>
        </GearModalContents>
      </GearCard>
    </GearModal>
  );
};

export default SelectLauncherModal;
