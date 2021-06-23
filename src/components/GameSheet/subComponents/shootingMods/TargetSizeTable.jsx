import React from 'react';

import { targetSizeMods } from '../../../../data/shootingTables/shootingModifiers';

import './TargetSizeTable.css';

const TargetSizeTable = () => (
  <div className="target-mod-table">
    <div className="target-mod-heading">Target Size Mods</div>
    <div className="target-mod-row sub-heading">
      <div>Target</div>
      <div className="target-mod-values">
        <div>Size</div>
        <div>Elev</div>
        <div>Width</div>
      </div>
    </div>
    {Object.keys(targetSizeMods).map((target) => (
      <div className="target-mod-row" key={target}>
        <div>{target}</div>
        <div className="target-mod-values">
          <div>{targetSizeMods[target][0]}</div>
          <div>{targetSizeMods[target][1]}</div>
          <div>{targetSizeMods[target][2]}</div>
        </div>
      </div>
    ))}
  </div>
);

export default TargetSizeTable;
