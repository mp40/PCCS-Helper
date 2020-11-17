import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Modifications = ({ firearmName, modNotes, removeFirearmModification }) => (
  <div className={styles.wrapper}>
    <div>Modifications</div>
    {modNotes.map((noteObj) => (
      <div key={`${noteObj.note}${noteObj.weightMod}`} className={styles.entry}>
        <span>{noteObj.note}</span>
        <span>
          {`${noteObj.weightMod} lbs`}
        </span>
        <button
          aria-label="close"
          className={styles.close}
          type="button"
          onClick={() => removeFirearmModification({ firearm: firearmName, modNote: noteObj })}
        />
      </div>
    ))}
  </div>
);

Modifications.propTypes = {
  firearmName: PropTypes.string.isRequired,
  modNotes: PropTypes.arrayOf(PropTypes.object),
  removeFirearmModification: PropTypes.func.isRequired,
};

Modifications.defaultProps = {
  modNotes: [],
};

export default Modifications;
