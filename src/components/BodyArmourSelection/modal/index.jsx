import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const BodyArmourSelection = ({ armourType, armourList, dispatch, closeModal }) => {
  const handleDispatch = (name) => {
    dispatch(name);
    closeModal();
  };

  return (
    <div className={`card-standard ${styles.card}`}>
      <div className={styles.header}>
        <div>
          <span>Select</span>
          <span>{armourType}</span>
          <button
            type="button"
            onClick={() => handleDispatch(undefined)}
          >
            Remove
          </button>
        </div>
        <button
          aria-label="close"
          className={styles.close}
          type="button"
          onClick={() => closeModal()}
        />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            {['Name', 'PF', 'BPF', 'AC', 'lbs', 'Notes'].map((value) => (
              <th key={value}>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(armourList).map((name) => {
            if (name === 'No Helmet' || name === 'No Vest') {
              return null;
            }

            return (
              <tr
                key={name}
                className="--selectableRow"
                onClick={() => handleDispatch(name)}
              >
                {['name', 'pf', 'bpf', 'ac', 'weight', 'tags'].map((value) => {
                  const armour = armourList[name];
                  return (
                    <td key={value}>{Array.isArray(armour[value]) ? armour[value].join(', ') : armour[value]}</td>
                  );
                })}
              </tr>
            );
          })}

        </tbody>
      </table>
    </div>
  );
};

BodyArmourSelection.propTypes = {
  closeModal: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  armourList: PropTypes.objectOf(PropTypes.object).isRequired,
  armourType: PropTypes.oneOf(['helmet', 'vest']).isRequired,
};

export default BodyArmourSelection;
