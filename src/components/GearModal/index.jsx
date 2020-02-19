import React from 'react';
import PropTypes from 'prop-types';

import './GearModal.css';

const GearModal = ({ children }) => (
  <div className="modalOverlay">
    { children }
  </div>
);


GearModal.propTypes = {
  // outerElements: PropTypes.arrayOf(PropTypes.node),
  children: PropTypes.arrayOf(PropTypes.node),
};

export default GearModal;
