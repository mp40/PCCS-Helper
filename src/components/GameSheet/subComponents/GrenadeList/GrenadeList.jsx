import React from 'react';
import { PropTypes } from 'prop-types';

import './GrenadeList.css';

const renderGrenades = grenades => (
  grenades.map(grenade => (
    <div className="grenade-list" key={grenade.name}>
      <div>{`${grenade.name}:`}</div>
      <div>{grenade.qty}</div>
    </div>
  ))
);

const renderContents = grenades => (grenades.length < 1 ? <div>none</div> : renderGrenades(grenades));

const GrenadeList = ({ grenades }) => (
  <div>
    <div className="grenade-list-heading">Grenades</div>
    {renderContents(grenades)}
  </div>
);


GrenadeList.propTypes = {
  grenades: PropTypes.arrayOf(PropTypes.object),
};

export default GrenadeList;
