import React from 'react';

import { situationAndStanceMods } from '../../data/shootingTables/shootingModifiers';

import './SituationAndStanceModTable.css';

const SituationAndStanceModTable = () => (
  <div className="situation-mod-table">
    <div className="situation-mod-heading">Situation &#38; Stance Mods</div>
    {Object.keys(situationAndStanceMods).map(situation => (
      <div className="situation-mod-row" key={situation}>
        <div>{situation}</div>
        <div>{situationAndStanceMods[situation]}</div>
      </div>
    ))}
  </div>

);

export default SituationAndStanceModTable;
