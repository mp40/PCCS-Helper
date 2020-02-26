import React from 'react';
import PropTypes from 'prop-types';

import FirearmModificationForm from '../FirearmModificationForm';

import '../WeaponsCard/WeaponsCard.css';

const formDetails = {
  title: 'Custom Magazine Details',
  formType: 'Magazine',
  formClassName: 'customMagazineForm',
  fields: [
    {
      heading: 'Capacity',
      idRef: 'customMagCapacityInput',
    },
    {
      heading: 'Weight',
      idRef: 'customMagWeightInput',
    },
    {
      heading: 'Type',
      idRef: 'customMagTypeInput',
    },
  ],
};

const WeaponsCardCustomMag = ({ handleModification, toggleOffWeaponCardViews }) => (
  <FirearmModificationForm
    formDetails={formDetails}
    handleModification={handleModification}
    toggleOffWeaponCardViews={toggleOffWeaponCardViews}
  />
);

WeaponsCardCustomMag.propTypes = {
  handleModification: PropTypes.func,
  toggleOffWeaponCardViews: PropTypes.func,
};

export default WeaponsCardCustomMag;
