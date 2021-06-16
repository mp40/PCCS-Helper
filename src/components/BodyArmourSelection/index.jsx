import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const renderHeading = (armourType) => (armourType === 'helmet' ? 'Select Helmet' : 'Select Vest');

const renderBody = (armourList, handleDispatch, type) => Object.keys(armourList).map((name) => (
  <React.Fragment key={name}>
    <tr
      className="--selectableRow"
      onClick={() => handleDispatch(type, name)}
    >
      {['name', 'pf', 'bpf', 'ac', 'weight', 'tags'].map((value) => {
        const armour = armourList[name];
        return (
          <td key={value}>{Array.isArray(armour[value]) ? armour[value].join(', ') : armour[value]}</td>
        );
      })}
    </tr>
  </React.Fragment>
));

const BodyArmourSelection = ({ armourType, armourList, handleDispatch }) => (
  <>
    <div className={styles.modal} />
    <div className={`--card ${styles.card}`}>
      <div className={styles.header}>
        <div>
          {renderHeading(armourType)}
          <button
            type="button"
            onClick={() => handleDispatch(armourType, null)}
          >
            Remove
          </button>
        </div>
        <button
          aria-label="close"
          className={styles.close}
          type="button"
          onClick={() => handleDispatch(null)}
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
          {renderBody(armourList, handleDispatch, armourType)}
        </tbody>
      </table>
    </div>
  </>
);

BodyArmourSelection.propTypes = {
  handleDispatch: PropTypes.func.isRequired,
  armourList: PropTypes.objectOf(PropTypes.object).isRequired,
  armourType: PropTypes.oneOf(['helmet', 'vest']).isRequired,
};

export default BodyArmourSelection;
