import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ButtonStandard from '../widgets/buttons/ButtonStandard';
import TextInput from './textInput';

import { createModificationObject } from './data';

const FirearmModificationForm = ({ formDetails, handleModification, toggleOffWeaponCardViews }) => {
  const [modification, updateModification] = useState('');
  const [weight, updateWeight] = useState('');
  const [type, updateType] = useState('');
  const [warning, toggleWarning] = useState(false);

  const values = [modification, weight, type];
  const funcs = [updateModification, updateWeight, updateType];

  const validateInput = () => {
    const input = createModificationObject(formDetails.formType)(modification, weight, type);
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
        className={`submitCustom${formDetails.formType}`}
        onClick={validateInput}
      />
      <ButtonStandard
        name="Back"
        className="exitModificationForm"
        onClick={toggleOffWeaponCardViews}
      />
      {warning
      && <div style={{ color: 'red', fontWeight: 'bold' }}>Please Enter Valid Data</div>}
    </div>
  );
};

FirearmModificationForm.propTypes = {
  formDetails: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ])).isRequired,
  handleModification: PropTypes.func.isRequired,
  toggleOffWeaponCardViews: PropTypes.func.isRequired,
};

export default FirearmModificationForm;
