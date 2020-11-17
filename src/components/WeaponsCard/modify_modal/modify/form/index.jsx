import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TextInput from './textInput';

import { getFormDetails, createModificationObject } from './data';

import styles from './styles.module.css';
import './FirearmModificationForm.css';

const Form = ({ formType, handleModification, toggleOffWeaponCardViews }) => {
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
      <div className={styles.header}>
        <div>
          <span>{formDetails.title}</span>
          <button
            type="button"
            onClick={() => validateInput()}
          >
            Submit
          </button>
        </div>
        <button
          aria-label="close"
          className={styles.close}
          type="button"
          onClick={() => toggleOffWeaponCardViews()}
        />
      </div>

      <div className={styles.body}>
        {formDetails.fields.map((field, index) => (
          <TextInput
            key={field.heading}
            heading={field.heading}
            idRef={field.idRef}
            value={values[index]}
            onChange={(event) => funcs[index](event.target.value)}
          />
        ))}
      </div>

      {warning
      && <div className="modificationFormWarning">Please Enter Valid Data</div>}
    </div>
  );
};

Form.propTypes = {
  formType: PropTypes.oneOf(['Magazine', 'Firearm']).isRequired,
  handleModification: PropTypes.func.isRequired,
  toggleOffWeaponCardViews: PropTypes.func.isRequired,
};

export default Form;
