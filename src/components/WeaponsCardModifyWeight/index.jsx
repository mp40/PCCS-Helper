import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { renderModificationTextInput } from '../widgets/renderWidgets';
import ButtonStandard from '../widgets/buttons/ButtonStandard';

import FirearmModificationForm from '../FirearmModificationForm';

const formDetails = {
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