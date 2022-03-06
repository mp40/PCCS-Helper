import React from 'react';
import PropTypes from 'prop-types';

import BodyArmourSelection from '../modal';

import { vests } from '../../../data/uniformAndArmourTypes';

const Vest = ({ changeVest, closeModal }) => (
  <BodyArmourSelection
    armourType="vest"
    armourList={vests}
    dispatch={changeVest}
    closeModal={closeModal}
  />

);

Vest.propTypes = {
  changeVest: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Vest;
