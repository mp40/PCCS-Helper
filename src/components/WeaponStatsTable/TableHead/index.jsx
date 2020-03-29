import React from 'react';
import PropTypes from 'prop-types';

import { getRangeBrackets, keys } from '../data';

const TableHead = ({ weaponList }) => {
  const rangeBrackets = getRangeBrackets(weaponList);
  const tableHeadings = ['Data', 'Aim Time', '', '', ...rangeBrackets];
  return (
    <thead>
      <tr className="WeaponStatHeader">
        {tableHeadings.map((value, index) => (
          <th key={keys[index]}>{value}</th>
        ))}
      </tr>
    </thead>
  );
};

TableHead.propTypes = {
  weaponList: PropTypes.string.isRequired,
};

export default TableHead;
