import React from 'react';
import PropTypes from 'prop-types';

import FirearmModificationForm from '../FirearmModificationForm';

const formDetails = {
  title: 'Modify Weapon Weight',
  formClassName: 'modifyWeightForm',
  formType: 'Firearm',
  fields: [
    {
      heading: 'Note',
      idRef: 'modifyWeightNoteInput',
    },
    {
      heading: 'Weight',
      idRef: 'modifyWeightValueInput',
    },
  ],
};

const WeaponsCardModifyWeight = ({ handleModification, toggleOffWeaponCardViews }) => {
  return (
    <FirearmModificationForm
      formDetails={formDetails}
      handleModification={handleModification}
      toggleOffWeaponCardViews={toggleOffWeaponCardViews}
    />
  );
};

WeaponsCardModifyWeight.propTypes = {
  handleModification: PropTypes.func,
  toggleOffWeaponCardViews: PropTypes.func,
};

export default WeaponsCardModifyWeight;
