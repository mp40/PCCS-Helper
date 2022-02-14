import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { AlmDispatchContext, AlmStateContext } from '../alm/context';
import { updateVisibility } from '../alm/actions';

import { lightingOptions, getOthers } from './data';

import CheckBox from '../../../widgets/buttons/CheckBox';

import styles from './styles.module.css';

const VisibilitySelectModal = ({ setModal }) => {
  const dispatch = useContext(AlmDispatchContext);
  const { visibility, firearm } = useContext(AlmStateContext);

  const optics = firearm?.optics?.attached;

  const handleUpdateLighting = (type) => {
    const updatedVisibility = { ...visibility };
    updatedVisibility.lighting = type;

    dispatch(updateVisibility(updatedVisibility));
  };

  const handleUpdateOther = (key) => {
    const updatedVisibility = { ...visibility };
    updatedVisibility[key] = !updatedVisibility[key];

    dispatch(updateVisibility(updatedVisibility));
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
  setModal: PropTypes.func.isRequired,
};

export default VisibilitySelectModal;
