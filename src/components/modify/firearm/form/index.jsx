import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TextInput from './textInput';

import { getFormDetails, createModificationObject } from './data';

import styles from './styles.module.css';
import './FirearmModificationForm.css';

const Form = ({ formType, handleModification }) => {
  const [modification, setModification] = useState('');
  const [weight, setWeight] = useState('');
  const [type, setType] = useState('');
  const [warning, setWarning] = useState(false);

  const values = [modification, weight, type];
  const funcs = [setModification, setWeight, setType];

  const formDetails = getFormDetails(formType);

  const validateInput = () => {
    const input = createModificationObject(formType)(modification, weight, type);
    if (input === false) {
      setWarning(true);
      return;
    }
    handleModification(input);
    setModification('');
    setWeight('');
    setType('');
    setWarning(false);
  };

  return (
    <div className={formDetails.formClassName}>
      <div className={styles.header}>
        <span>{formDetails.title}</span>
        <button
          type="button"
          onClick={() => validateInput()}
        >
          Submit
        </button>
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
};

export default Form;
