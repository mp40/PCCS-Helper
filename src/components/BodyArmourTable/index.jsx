import React from 'react';
import { PropTypes } from 'prop-types';

import './BodyArmourTable.css';

const getDefaultArmourValues = name => ({ name, pf: '0', bpf: '0', ac: '-' });

const renderArmourRow = armour => (
  <tr>
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
  // eslint-disable-next-line react/forbid-prop-types
  helmet: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  vest: PropTypes.object,
};

BodyArmourTable.defaultProps = {
  helmet: getDefaultArmourValues('No Helmet'),
  vest: getDefaultArmourValues('No Vest'),
};

export default BodyArmourTable;
