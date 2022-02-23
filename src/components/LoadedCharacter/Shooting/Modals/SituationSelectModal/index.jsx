import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { AlmDispatchContext, AlmStateContext, FirearmContext } from '../../context';
import { updateSituation } from '../../actions';

import CheckBox from '../../../../widgets/buttons/CheckBox';

import { getModifierList } from './data';

import styles from './styles.module.css';

const SituationSelectModal = ({ setModal }) => {
  const dispatch = useContext(AlmDispatchContext);
  const { situation } = useContext(AlmStateContext);
  const firearm = useContext(FirearmContext);

  const handleClick = (key) => {
    const updatedSituation = { ...situation };
    updatedSituation[key] = !updatedSituation[key];

    dispatch(updateSituation(updatedSituation));
  };

  const applyScreen = (key) => {
    const bracedAndBipodSituations = ['braced', 'slingSupport', 'bipodBraced', 'bipodNotBraced'];
    let block = false;

    if (bracedAndBipodSituations.includes(key) === false) {
      return block;
    }

    for (let i = 0; i < bracedAndBipodSituations.length; i += 1) {
      if (situation[bracedAndBipodSituations[i]] === true && bracedAndBipodSituations[i] !== key) {
        block = true;
        break;
      }
    }

    return block;
  };

  return (
    <>
      <div className="modal-background" />
      <div className={`card-standard ${styles.card}`}>
        {getModifierList(firearm.list, firearm.bipod || false, String(firearm.length).includes('/')).map((s) => (
          <div key={s.key} className={styles.checkbox}>
            <span>{s.text}</span>
            <span>
              <CheckBox onClick={() => handleClick(s.key)} isActive={situation[s.key]} />
            </span>
            {applyScreen(s.key)
             && <span className={styles.screen} />}
          </div>
        ))}
        <button type="button" className={styles.done} onClick={() => setModal(false)}>Done</button>
      </div>
    </>
  );
};

SituationSelectModal.propTypes = {
  setModal: PropTypes.func.isRequired,
};

export default SituationSelectModal;
