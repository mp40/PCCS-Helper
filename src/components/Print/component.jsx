import React from 'react';
import PropTypes from 'prop-types';

const Print = ({ selectCurrentView }) => {
  const handlePrint = () => {
    selectCurrentView('printRefSheet');
  };

  return (
    <div className="print-icon-container">
      <button type="button" onClick={() => handlePrint()}>Print Icon</button>
    </div>
  );
};

Print.propTypes = {
  selectCurrentView: PropTypes.func,
};

export default Print;
