import React from 'react';

import { rangeTable } from '../../../../data/shootingTables/rangeTable';

import './RangeLookUp.css';

const RangeLookUp = () => (
  <div className="range-look-up-table">
    <div className="range-look-up-header">
      <div>
          Rng
      </div>
      <div>
          ALM
      </div>
    </div>
    {Object.keys(rangeTable).map(range => (
      <div className="range-look-up-row" key={range}>
        <div>
          {range}
        </div>
        <div>
          {rangeTable[range]}
        </div>
      </div>
    ))}
  </div>
);

export default RangeLookUp;
