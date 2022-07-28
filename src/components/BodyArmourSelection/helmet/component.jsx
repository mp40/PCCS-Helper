import React from 'react';
import PropTypes from 'prop-types';

import BodyArmourSelection from '../modal';

import { helmets } from '../../../data/uniformAndArmourTypes';

const Helmet = ({ changeHelmet, closeModal }) => (
  <BodyArmourSelection
    armourType="helmet"
    armourList={helmets}
    dispatch={changeHelmet}
    closeModal={closeModal}
  />
);

Helmet.propTypes = {
  changeHelmet: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Helmet;
