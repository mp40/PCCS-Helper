import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './styles.module.css';

const renderGrenades = (grenades) => (
  grenades.map((grenade) => (
    <div key={grenade.name}>
      <span>{`${grenade.name}:`}</span>
      <span>{grenade.qty}</span>
    </div>
  ))
);

const renderContents = (grenades) => (grenades.length < 1 ? <div>none</div> : renderGrenades(grenades));

const GrenadeList = ({ grenades }) => (
  <div className={styles.wrapper}>
    <div>Grenades</div>
    {renderContents(grenades)}
  </div>
);

GrenadeList.propTypes = {
  grenades: PropTypes.arrayOf(PropTypes.object),
};

export default GrenadeList;
