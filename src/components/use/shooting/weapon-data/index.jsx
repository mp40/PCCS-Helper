import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Ballistic from './ballistic';
import Thrown from './thrown';

import { WeaponContext } from '../context';

const WeaponData = ({ level, alm, rof }) => {
  const weapon = useContext(WeaponContext);

  const { list } = weapon;

  if (list === 'grenades') {
    return <Thrown alm={alm} grenade={weapon} />;
  }
  return <Ballistic level={level} alm={alm} rof={rof} />;
};

WeaponData.propTypes = {
  level: PropTypes.number.isRequired,
  alm: PropTypes.number.isRequired,
  rof: PropTypes.string.isRequired,
};

export default WeaponData;
