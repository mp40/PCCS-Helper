import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';
// 10,11,23,24,34 <- mptodo code coverage on these lines plz
const Launchers = ({ firearm, ableToAttach, attachedLauncher, updateUnderslungLauncher, removeUnderslungLauncher }) => {
  const [showModal, setShowModal] = useState(false);

  const handleUpdate = (payload) => {
    updateUnderslungLauncher(payload);
    setShowModal(false);
  };

  return (
    <>

      <div className={styles.wrapper}>
        <div>
          <h4>Launcher</h4>
          <span>{attachedLauncher || 'None'}</span>
        </div>
        <div>
          { attachedLauncher && <button type="button" onClick={() => removeUnderslungLauncher(firearm)}>Remove Launcher</button>}
          <button type="button" onClick={() => setShowModal(true)}>Update Launcher</button>
        </div>
      </div>

      {showModal
      && (
      <div className={styles.launcherModal}>
        <div>Select Launcher</div>
        <div>
          {ableToAttach.map((launcher) => (
            <button key={launcher} type="button" className={styles.launcherButton} onClick={() => handleUpdate({ firearmToUpdate: firearm, launcher })}>{launcher}</button>
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
