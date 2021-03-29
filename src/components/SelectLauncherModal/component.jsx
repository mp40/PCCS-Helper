/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import WeaponStatsTable from '../WeaponStatsTable';

import { launchers } from '../../data/launchers';
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
      <div className={styles.modal} />
      <div className={`--card ${styles.card}`}>
        <div className={styles.header}>
          <span>Select Grenade / Rocket Launcher</span>
          <button
            aria-label="close"
            className={styles.close}
            type="button"
            onClick={() => toggleOffWeaponCardViews('showLaunchers')}
          />
        </div>
        <div className="--weaponSelectCard">
          <div className={styles.body}>
            <div className="launcherRowContainer">

              {launchers().map((launcher) => (
                <div key={launcher.name} className={styles.row}>
                  <button
                    type="button"
                    onClick={() => setLauncherToView(launcher)}
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
