import React from 'react';

export const renderAtrributeAndCombatTableHeadings = (heading = 'Attribute') => (
  <tr>
    <th className="--tableHeading">{heading}</th>
    <th className="--tableValue">{heading === 'Skill' ? 'Level' : 'Value'}</th>
  </tr>
);
