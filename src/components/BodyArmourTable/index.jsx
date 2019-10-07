import React from 'react';
import { armourShape } from '../../helpers/proptypeShapes';

import './BodyArmourTable.css';

const getDefaultArmourValues = name => ({ name, pf: '0', bpf: '0', ac: '-' });

const renderArmourRow = armour => (
  <tr className="armour-row-values">
    <td className="name">{armour.name}</td>
    <td className="pf">{armour.pf}</td>
    <td className="bpf">{armour.bpf}</td>
    <td className="ac">{armour.ac.toUpperCase()}</td>
  </tr>
);

const BodyArmourTable = ({ helmet, vest }) => (
  <table className="BodyArmourTable">
    <thead>
      <tr>
        <th className="name">Body Armour</th>
        <th className="pf">PF</th>
        <th className="bpf">BPF</th>
        <th className="ac">AC</th>
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
