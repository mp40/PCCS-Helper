import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const renderHeading = (armourType) => (armourType === 'helmet' ? 'Select Helmet' : 'Select Vest');

const renderBody = (armourList, handleDispatch, type) => armourList.map((armour) => (
  <React.Fragment key={armour.name}>
    <tr
      className={`${armour.name}Row --selectableRow`}
      onClick={() => handleDispatch(type, armour)}
    >
      {['name', 'pf', 'bpf', 'ac', 'weight', 'tags'].map((value) => (
        <td key={value}>{Array.isArray(armour[value]) ? armour[value].join(', ') : armour[value]}</td>
      ))}
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
  handleDispatch: PropTypes.func,
  armourList: PropTypes.arrayOf(PropTypes.object),
  armourType: PropTypes.oneOf(['helmet', 'vest']),
};

export default BodyArmourSelection;
