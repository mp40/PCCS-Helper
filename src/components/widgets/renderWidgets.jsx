import React from 'react';

export const renderModificationTextInput = (heading, idRef, value, onChange) => (
  <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
    <div>{heading}</div>
    <input
      style={{ width: '30%' }}
      type="text"
      autoComplete="off"
      id={idRef}
      value={value}
      onChange={onChange}
    />
  </div>
);

export const renderAtrributeAndCombatTableHeadings = (heading = 'Attribute') => (
  <tr>
    <th className="--tableHeading">{heading}</th>
    <th className="--tableValue">{heading === 'Skill' ? 'Level' : 'Value'}</th>
  </tr>
);
