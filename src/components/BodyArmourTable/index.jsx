import React from 'react';
import { armourShape } from '../../helpers/proptypeShapes';

import './BodyArmourTable.css';

const getDefaultArmourValues = name => ({ name, pf: '0', bpf: '0', ac: '-' });

const renderArmourRow = armour => (
  <tr className="armour-row-values">
    {['name', 'pf', 'bpf', 'ac'].map((value) => (
      <td key={value} className={value}>{armour[value]}</td>
    ))}
  </tr>
);

const BodyArmourTable = ({ helmet, vest }) => (
  <table className="BodyArmourTable">
    <thead>
      <tr>
        {['Body Armour', 'PF', 'BPF', 'AC'].map((value) => (
          <th>{value}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {renderArmourRow(helmet)}
      {renderArmourRow(vest)}
    </tbody>
  </table>
);

BodyArmourTable.propTypes = {
  helmet: armourShape,
  vest: armourShape,
};

BodyArmourTable.defaultProps = {
  helmet: getDefaultArmourValues('No Helmet'),
  vest: getDefaultArmourValues('No Vest'),
};

export default BodyArmourTable;
