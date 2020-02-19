import React from 'react';
import PropTypes from 'prop-types';

import './GearModal.css';

const GearModal = ({ children }) => (
  <div className="--modalOverlay">
    { children }
  </div>
);

GearModal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]),
};

export default GearModal;
