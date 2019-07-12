import React from 'react';

export const standardButtonTemplate = (onClick, buttonName) => (
  <button
    type="button"
    className="button"
    onClick={onClick}
  >
    {buttonName}
  </button>
);
