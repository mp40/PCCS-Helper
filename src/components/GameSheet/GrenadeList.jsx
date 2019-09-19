import React from 'react';
import { PropTypes } from 'prop-types';

import './GrenadeList.css';

const GrenadeList = ({ grenades }) => {
  console.log('hi');
  return (
    <div>{grenades[0].name}</div>
  );
};


GrenadeList.propTypes = {
  grenades: PropTypes.arrayOf(PropTypes.object),
};

export default GrenadeList;
