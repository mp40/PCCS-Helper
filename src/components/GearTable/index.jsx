import React from 'react';
import PropTypes from 'prop-types';

const GearTable = ({ gearHeading, totalWeight, children }) => {
  const headingData = [gearHeading, 'Weight', 'Qty', 'lbs', totalWeight];

  return (
    <table className="--gearTable">
      <thead className={`--reverseHeading ${gearHeading.toLowerCase()}Header`}>
        <tr className="--gearTableHeadingRow">
          {headingData.map((value) => (
            <th key={value}>{value}</th>
          ),
          )}
        </tr>
      </thead>
      {/* <tbody> */}
      { children }
      {/* </tbody> */}
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
