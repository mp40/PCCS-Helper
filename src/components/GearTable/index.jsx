import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const GearTable = ({ gearHeading, totalWeight, children }) => {
  const headingData = [gearHeading, 'Weight', 'Qty', 'lbs', totalWeight];

  return (
    <table className={styles.wrapper}>
      <thead>
        <tr>
          {headingData.map((value) => (
            <th key={value}>{value}</th>
          ),
          )}
        </tr>
      </thead>
      { children }
    </table>
  );
};

GearTable.propTypes = {
  gearHeading: PropTypes.string.isRequired,
  totalWeight: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default GearTable;
