import React from 'react';

export const standardButtonTemplate = (onClick, buttonName) => (
  <button
    type="button"
    className="--button standardButton"
    onClick={onClick}
  >
    {buttonName}
  </button>
);
