import React from 'react';

import { oddsOfHittingTable } from '../../data/shootingTables/oddsOfHittingTable';

import './HitChanceLookUp.css';

const HitChanceLookUp = () => (
  <div className="odds-look-up-table">
    <div className="odds-look-up-header">
      <div>EAL</div>
      <div>SS</div>
      <div>Auto</div>
    </div>
    {Object.keys(oddsOfHittingTable).sort((a, b) => b - a).map(eal => (
      <div className="odds-look-up-row" key={eal}>
        <div>{eal}</div>
        <div>{oddsOfHittingTable[eal][0]}</div>
        <div>{oddsOfHittingTable[eal][1]}</div>
      </div>

    ))}
  </div>
);

export default HitChanceLookUp;
