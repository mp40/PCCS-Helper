/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

import GrenadeData from '../GrenadeData';

import { grenadeList } from '../../data/grenades';

import styles from './styles.module.css';

const GrenadeSelectModal = ({ toggleOffWeaponCardViews, addGrenade, grenades }) => {
  const [viewGrenade, setGrenadeToView] = useState(null);

  const checkGrenadeInList = (grenade) => grenades.filter((obj) => obj.name === grenade.name).length;

  const handleSelection = (grenade) => {
    if (checkGrenadeInList(grenade)) {
      return;
    }
    addGrenade(grenade.name);
    toggleOffWeaponCardViews('showGrenades');
  };

  const renderGrenadeHeading = () => (
    <div className={styles.header}>
      <span>Select Grenade</span>
      <button
        aria-label="close"
        className={styles.close}
        type="button"
        onClick={() => toggleOffWeaponCardViews('showGrenades')}
      />
    </div>
  );

  const renderGrenadeList = () => (
    Object.keys(grenadeList).map((name) => {
      const grenade = grenadeList[name];
      return (
        <div key={grenade.name} className={styles.row}>
          <button
            type="button"
            className="button--standard button--question"
            onClick={() => setGrenadeToView(grenade)}
          />
          <div
            className="--selectableRow "
            onClick={() => handleSelection(grenade)}
          >
            <span>{grenade.name}</span>
            <span>{grenade.weight}</span>
          </div>
        </div>
      );
    })
  );

  return (
    <>
      <div className={styles.modal} />
      <div className={`--card ${styles.card}`}>
        {renderGrenadeHeading()}
        <div className={styles.list}>
          {renderGrenadeList()}
        </div>
        {viewGrenade && (
          <GrenadeData grenade={viewGrenade} />
        )}
      </div>
    </>
  );
};

GrenadeSelectModal.propTypes = {
  addGrenade: PropTypes.func,
  toggleOffWeaponCardViews: PropTypes.func,
  grenades: PropTypes.arrayOf(PropTypes.object),
};

export default GrenadeSelectModal;
