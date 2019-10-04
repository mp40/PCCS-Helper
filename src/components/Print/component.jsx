import React from 'react';
import PropTypes from 'prop-types';
import PrintIcon from './PrintIcon';

import './Print.css';

const Print = ({ selectCurrentView }) => {
  const handlePrint = () => {
    selectCurrentView('printRefSheet');
  };

  return (
    <div className="print-icon-container">
      <button type="button" className="print-button" onClick={() => handlePrint()}>
        <PrintIcon />
      </button>
    </div>
  );
};

Print.propTypes = {
  selectCurrentView: PropTypes.func,
};

export default Print;
