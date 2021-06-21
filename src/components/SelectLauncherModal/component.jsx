import React, { useState } from 'react';
import PropTypes from 'prop-types';

import WeaponStatsTable from '../WeaponStatsTable';

import { launcherList } from '../../data/launchers';
import { emptyLauncher } from './data';

import styles from './styles.module.css';

const SelectLauncherModal = ({ toggleOffWeaponCardViews, addLauncher }) => {
  const [launcherToView, setLauncherToView] = useState(emptyLauncher);

  const handleAddLauncher = (launcher) => {
    addLauncher(launcher);
    toggleOffWeaponCardViews('showLaunchers');
  };

  return (
    <>
      <div className="modal-background" />
      <div className={`card-standard card-select-gear-modal ${styles.wrapper}`}>
        <div className={styles.header}>
          <span>Select Grenade / Rocket Launcher</span>
          <button
            aria-label="close"
            className={styles.close}
            type="button"
            onClick={() => toggleOffWeaponCardViews('showLaunchers')}
          />
        </div>
        <div className="select-weapon-body-wrapper">
          <div className={styles.body}>
            <div>

              {Object.keys(launcherList).map((name) => {
                const launcher = launcherList[name];
                return (
                  <div key={launcher.name} className={styles.row}>
                    <button
                      aria-label="info"
                      type="button"
                      onClick={() => setLauncherToView(launcher)}
                      className="button--standard button--question"
                    />
                    <button
                      type="button"
                      className="button-clickable-item-row"
                      onClick={() => handleAddLauncher(launcher.name)}
                    >
                      <span>{launcher.name}</span>
                      <span>{`${launcher.weight} lbs`}</span>
                    </button>
                  </div>
                );
              })}
            </div>
            <WeaponStatsTable weapon={launcherToView} />
          </div>
        </div>
      </div>
    </>
  );
};

SelectLauncherModal.propTypes = {
  toggleOffWeaponCardViews: PropTypes.func,
  addLauncher: PropTypes.func,
};

export default SelectLauncherModal;
