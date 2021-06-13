import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { getScopeByName } from '../../../../../data/firearms/optics';

import { opticsShape } from '../../../../../helpers/proptypeShapes';

import styles from './styles.module.css';

const Optics = ({ firearm, optics, updateOptic, removeOptic }) => {
  const [showSelectOptic, setShowSelectOptic] = useState(false);

  const handleUpdateOptic = (payload) => {
    updateOptic(payload);
    setShowSelectOptic(false);
  };

  const standardScopes = ['Low Power Scope', 'Medium Power Scope', 'High Power Scope', 'AAS'];

  const getScopes = () => {
    if (optics?.restrictedTo) {
      return optics.restrictedTo;
    }

    if (optics?.ableToAttach) {
      return [...optics.ableToAttach, ...standardScopes];
    }

    return standardScopes;
  };

  const scope = getScopeByName(optics?.attached);

  const nfi = 'NFI'; // mptodo

  return (
    <>
      <div className={styles.wrapper}>
        <span className={styles.scopeDetails}>
          <span>Optics</span>
          {optics?.attached && (
          <>
            <span>{optics.attached}</span>
            <span>
              {`FOV:${scope.fov}`}
              &#176;
            </span>
            <span>{`Min Rng: ${nfi}`}</span>
          </>
        )}
        </span>
        <span className={styles.scopeButtons}>
          <button type="button" className={styles.opticButton} onClick={() => removeOptic(firearm)}>Remove Optic</button>
          <button type="button" className={styles.opticButton} onClick={() => setShowSelectOptic(true)}>Update Optic</button>
        </span>
      </div>
      {showSelectOptic
      && (
      <div className={styles.opticModal}>
        <div>Select Optic</div>
        <div>
          {getScopes().map((optic) => (
            <button key={optic} type="button" className={styles.opticButton} onClick={() => handleUpdateOptic({ firearmToUpdate: firearm, optic })}>{optic}</button>
          ))}
        </div>
      </div>
      )}
    </>
  );
};

Optics.propTypes = {
  firearm: PropTypes.string.isRequired,
  optics: opticsShape,
  updateOptic: PropTypes.func.isRequired,
  removeOptic: PropTypes.func.isRequired,
};

export default Optics;
