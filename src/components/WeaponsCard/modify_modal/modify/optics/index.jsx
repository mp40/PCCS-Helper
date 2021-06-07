import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { opticsShape } from '../../../../../helpers/proptypeShapes';

import styles from './styles.module.css';

const Optics = ({ optics }) => {
  const [showSelectOptic, setShowSelectOptic] = useState(false);

  const standardScopes = ['Low Power Scope', 'Medium Power Scope', 'High Power Scope'];

  return (
    <>
      <div className={styles.wrapper}>
        <div>Optics</div>
        <p>{`Attached: ${optics?.attached || 'None'}`}</p>
        <button type="button">Remove Optic</button>
        <button type="button" onClick={() => setShowSelectOptic(true)}>Update Optic</button>
      </div>
      {showSelectOptic
      && (
      <div>
        Select Optic
      </div>
      )}
    </>
  );
};

Optics.propTypes = {
  optics: opticsShape,
//   firearmName: PropTypes.string.isRequired,
//   modNotes: PropTypes.arrayOf(PropTypes.object),
//   removeFirearmModification: PropTypes.func.isRequired,
};

Optics.defaultProps = {
//   modNotes: [],
};

export default Optics;
