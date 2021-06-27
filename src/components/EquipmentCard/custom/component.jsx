import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TextInput from '../../widgets/TextInput';

import { isNotValidObjectToAdd, isValidCustomEquipmentInput } from '../../../helpers/gaurds';
import { correctFloatingPoint } from '../../../utils';

import styles from './styles.module.css';

export const createValidEqipmentObject = (name, weight) => ({
  name,
  weight,
  qty: 1,
  tags: ['Custom'],
});

const CustomEquipment = ({ equipment, addEquipment, handleSetShowCustomInput }) => {
  const [equipmentName, setEquipmentName] = useState('');
  const [equipmentWeight, setEquipmentWeight] = useState('');
  const [errorMsgInvalidEntry, setErrorMsgInvalidEntry] = useState(false);
  const [errorMsgExistsInArray, setErrorMsgExistsInArray] = useState(false);

  const handleSetEquipmentName = (event) => {
    setEquipmentName(event.target.value);
  };

  const handleSetEquipmentWeight = (event) => {
    setEquipmentWeight(event.target.value);
  };

  const submitEquipment = () => {
    const name = equipmentName;
    const weight = correctFloatingPoint(parseFloat(equipmentWeight));

    if (!isValidCustomEquipmentInput(name, weight)) {
      setErrorMsgInvalidEntry(true);
      return;
    }

    if (isNotValidObjectToAdd(equipment, { name })) {
      setErrorMsgExistsInArray(true);
      return;
    }

    addEquipment(createValidEqipmentObject(name, weight));
    handleSetShowCustomInput();
  };

  const renderHeading = () => (
    <div className={styles.header}>
      <div>
        <span>
          Add Custom Equipment
        </span>
        <button
          type="button"
          onClick={() => submitEquipment()}
        >
          Submit
        </button>
      </div>
      <button
        aria-label="close"
        className={styles.close}
        type="button"
        onClick={() => handleSetShowCustomInput()}
      />
    </div>
  );

  const renderTextInput = (heading, idRef, equipmentValue, onChange) => (
    <TextInput
      heading={heading}
      idRef={idRef}
      value={equipmentValue}
      onChange={onChange}
    />
  );

  return (
    <>
      <div className="modal-background" />
      <div className={styles.card}>

        {renderHeading()}

        {renderTextInput('Equipment Name', 'equipNameInput', equipmentName, handleSetEquipmentName)}
        {renderTextInput('Equipment Weight (lbs)', 'equipWeightInput', equipmentWeight, handleSetEquipmentWeight)}

        {errorMsgInvalidEntry
              && <div className={styles.error}>Please Enter Valid Equipment Name and Weight</div>}

        {errorMsgExistsInArray
              && <div className={styles.error}>Already In List, Please Enter Valid Equipment Name</div>}

      </div>
    </>
  );
};

CustomEquipment.propTypes = {
  addEquipment: PropTypes.func.isRequired,
  equipment: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSetShowCustomInput: PropTypes.func.isRequired,

};

export default CustomEquipment;
