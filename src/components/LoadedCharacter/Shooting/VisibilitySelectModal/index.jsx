import React from 'react';
import PropTypes from 'prop-types';

import { lightingOptions, getOthers } from './data';

import CheckBox from '../../../widgets/buttons/CheckBox';

import styles from './styles.module.css';

const VisibilitySelectModal = ({ visibility, setModal, setVisibility, optics }) => {
  const handleUpdateLighting = (type) => {
    const updatedVisibility = { ...visibility };
    updatedVisibility.lighting = type;

    setVisibility(updatedVisibility);
  };

  const handleUpdateOther = (key) => {
    const updatedVisibility = { ...visibility };
    updatedVisibility[key] = !updatedVisibility[key];

    setVisibility(updatedVisibility);
  };

  const getClassName = (type) => {
    if (type === visibility.lighting) {
      return styles.selected;
    }

    return '';
  };

  return (
    <>
      <div className="modal-background" />
      <div className={`card-standard ${styles.card}`}>

        <div className={styles.title}>Lighting</div>
        <div className={styles.lighting}>
          {lightingOptions.map((type) => (
            <button type="button" className={getClassName(type)} key={type} onClick={() => handleUpdateLighting(type)}>
              {type}
            </button>
          ))}
        </div>

        <div className={styles.title}>Other</div>
        {Object.keys(getOthers(optics)).map((key) => (
          <div key={key} className={styles.checkbox}>
            <span>{getOthers(optics)[key]}</span>
            <span><CheckBox onClick={() => handleUpdateOther(key)} isActive={visibility[key]} /></span>
          </div>
        ))}

        <button type="button" onClick={() => setModal(false)} className={styles.done}>Done</button>

      </div>
    </>
  );
};

VisibilitySelectModal.propTypes = {
  visibility: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ])).isRequired,
  setModal: PropTypes.func.isRequired,
  setVisibility: PropTypes.func.isRequired,
  optics: PropTypes.string,
};

export default VisibilitySelectModal;
