import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ButtonStandard from '../../widgets/buttons/ButtonStandard';
import TextInput from './textInput';

import { getFormDetails, createModificationObject } from './data';

import './FirearmModificationForm.css';

const FirearmModificationForm = ({ formType, handleModification, toggleOffWeaponCardViews }) => {
  const [modification, updateModification] = useState('');
  const [weight, updateWeight] = useState('');
  const [type, updateType] = useState('');
  const [warning, toggleWarning] = useState(false);

  const values = [modification, weight, type];
  const funcs = [updateModification, updateWeight, updateType];

  const formDetails = getFormDetails(formType);

  const validateInput = () => {
    const input = createModificationObject(formType)(modification, weight, type);
    if (input === false) {
      toggleWarning(true);
      return;
    }
    handleModification(input);
  };

  return (
    <div className={formDetails.formClassName}>
      <div>{formDetails.title}</div>
      {formDetails.fields.map((field, index) => (
        <TextInput
          key={field.heading}
          heading={field.heading}
          idRef={field.idRef}
          value={values[index]}
          onChange={(event) => funcs[index](event.target.value)}
        />
      ))}
      <ButtonStandard
        name="Submit"
        className={`submitCustom${formType}`}
        onClick={validateInput}
      />
      <ButtonStandard
        name="Back"
        className="exitModificationForm"
        onClick={toggleOffWeaponCardViews}
      />
      {warning
      && <div className="modificationFormWarning">Please Enter Valid Data</div>}
    </div>
  );
};

FirearmModificationForm.propTypes = {
  formType: PropTypes.string.isRequired,
  handleModification: PropTypes.func.isRequired,
  toggleOffWeaponCardViews: PropTypes.func.isRequired,
};

export default FirearmModificationForm;
