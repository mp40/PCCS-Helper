import React from 'react';
import PropTypes from 'prop-types';

import './GearModal.css';

const GearModal = ({ children }) => (
  <div className="modalOverlay">
    <div className="--card modalCard">
      {/* <div className="test"> */}
      { children }
      {/* </div> */}
    </div>
  </div>
);
GearModal.propTypes = {
//   gearType: PropTypes.string,
//   buttonFunctions: PropTypes.arrayOf(PropTypes.func),
  children: PropTypes.arrayOf(PropTypes.node),
};

export default GearModal;
