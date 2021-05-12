import React from 'react';
import PropTypes from 'prop-types';

import CheckBox from '../../../widgets/buttons/CheckBox';

import { getModifierList } from './data';

import styles from './styles.module.css';

const SituationSelectModal = ({ list, bipod, foldingStock, setModal, weaponBasedALM, setWeaponBasedALM }) => {
  const handleClick = (key) => {
    const updatedObject = { ...weaponBasedALM };
    updatedObject[key] = !updatedObject[key];

    setWeaponBasedALM(updatedObject);
  };

  const applyScreen = (key) => {
    const bracedAndBipodSituations = ['braced', 'slingSupport', 'bipodBraced', 'bipodNotBraced'];
    let block = false;

    for (let i = 0; i < bracedAndBipodSituations.length; i += 1) {
      if (weaponBasedALM[bracedAndBipodSituations[i]]) {
        block = true;
        break;
      }
    }

    if (block === false) {
      return false;
    }

    if (bracedAndBipodSituations.indexOf(key) > -1 && weaponBasedALM[key] === false) {
      return true;
    }
  };

  return (
    <>
      <div className={styles.modal} />
      <div className={`--card ${styles.card}`}>
        {getModifierList(list, bipod, foldingStock).map((situation) => (
          <div key={situation.key} className={styles.checkbox}>
            <span>{situation.text}</span>
            <span>
              <CheckBox onClick={() => handleClick(situation.key)} isActive={weaponBasedALM[situation.key]} />
            </span>
            {applyScreen(situation.key)
             && <span className={styles.screen} />}
          </div>
        ))}
        <button type="button" className={styles.done} onClick={() => setModal(false)}>Done</button>
      </div>
    </>
  );
};

SituationSelectModal.propTypes = {
  list: PropTypes.string.isRequired,
  foldingStock: PropTypes.bool.isRequired,
  bipod: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired,
  weaponBasedALM: PropTypes.objectOf(PropTypes.bool).isRequired,
  setWeaponBasedALM: PropTypes.func.isRequired,
};

export default SituationSelectModal;
