import React from 'react';
import PropTypes from 'prop-types';

import './GearModalContents.css';

const GearModalContents = ({ name, children }) => (
  <div className={`gearModalContents ${name}`}>
    {children}
  </div>
);

GearModalContents.propTypes = {
  name: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node),
};

GearModalContents.defaultProps = {
  name: 'default',
};

export default GearModalContents;
