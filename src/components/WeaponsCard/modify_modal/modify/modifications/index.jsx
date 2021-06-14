import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Modifications = ({ firearmName, modNotes, removeFirearmModification }) => (
  <div className={styles.wrapper}>
    <h4>Modifications</h4>
    {modNotes.map((noteObj, index) => (
      <div key={`${noteObj.note}${noteObj.weightMod}`} className={styles.entry}>
        <span>{noteObj.note}</span>
        <span>
          {`${noteObj.weightMod} lbs`}
        </span>
        <button
          aria-label="close"
          className={styles.close}
          type="button"
          onClick={() => removeFirearmModification({ firearmToUpdate: firearmName, modIndex: index })}
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
