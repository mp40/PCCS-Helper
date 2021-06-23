import React from 'react';
import PropTypes from 'prop-types';

import { helmets, vests } from '../../data/uniformAndArmourTypes';

import styles from './styles.module.css';

const renderArmourRow = (armour) => (
  <tr className="armour-row-values">
    {['name', 'pf', 'bpf', 'ac'].map((value) => (
      <td key={value} className={value}>{armour[value]}</td>
    ))}
  </tr>
);

const BodyArmourTable = ({ helmet, vest }) => (
  <table className={styles.wrapper}>
    <thead>
      <tr>
        {['Body Armour', 'PF', 'BPF', 'AC'].map((value) => (
          <th key={value}>{value}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {renderArmourRow(helmets[helmet])}
      {renderArmourRow(vests[vest])}
    </tbody>
  </table>
);

BodyArmourTable.propTypes = {
  helmet: PropTypes.string,
  vest: PropTypes.string,
};

BodyArmourTable.defaultProps = {
  helmet: 'No Helmet',
  vest: 'No Vest',
};

export default BodyArmourTable;
