import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Launchers = ({ firearm, ableToAttach, attachedLauncher, updateUnderslungLauncher, removeUnderslungLauncher }) => {
  const [showModal, setShowModal] = useState(false);

  const handleUpdate = (payload) => {
    updateUnderslungLauncher(payload);
    setShowModal(false);
  };

  return (
    <>
      <div>
        {
        attachedLauncher && <button type="button" onClick={() => removeUnderslungLauncher(firearm)}>Remove Launcher</button>
      }

        <button type="button" onClick={() => setShowModal(true)}>Update Launcher</button>
        <span>Launcher</span>
        <span>{attachedLauncher || 'None'}</span>
      </div>
      {showModal
      && (
      <div className={styles.launcherModal}>
        <div>Select Launcher</div>
        <div>
          {ableToAttach.map((launcher) => (
            <button type="button" className={styles.launcherButton} onClick={() => handleUpdate({ firearmToUpdate: firearm, launcher })}>{launcher}</button>
          ))}
        </div>
      </div>
      )}
    </>
  );
};

Launchers.propTypes = {
  firearm: PropTypes.string.isRequired,
  attachedLauncher: PropTypes.string,
  ableToAttach: PropTypes.arrayOf(PropTypes.string),
  updateUnderslungLauncher: PropTypes.func.isRequired,
  removeUnderslungLauncher: PropTypes.func.isRequired,
};

export default Launchers;
