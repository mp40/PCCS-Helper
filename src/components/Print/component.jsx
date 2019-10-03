import React from 'react';
import PropTypes from 'prop-types';

const Print = ({ selectCurrentView }) => {
  const handlePrint = () => {
    selectCurrentView('printRefSheet');
  };

  return (
    <button type="button" onClick={() => handlePrint()}>Print Icon</button>
  );
};

Print.propTypes = {
  selectCurrentView: PropTypes.func,
};

export default Print;
