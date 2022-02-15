import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import { AlmStateContext, FirearmContext } from '../context';

import Duck from '../duck';
import Aiming from '../Aiming';

import AlmModals from '../alm-modals';
import AlmButton from '../../../widgets/buttons/AlmButton';

import {
  rangeMods,
  getAimTimeMod,
  shooterStance,
  findSpeedMods,
  getVisibilityALM,
  getSituationALM,
} from './data';

import styles from './styles.module.css';

const Alm = ({ setAlm, setDuckAlm }) => {
  const state = useContext(AlmStateContext);
  const firearm = useContext(FirearmContext);
  const [modal, setModal] = useState(false);

  const { stance, aims, situation, visibility, range, movement, miscellaneous } = state;

  useEffect(() => {
    let result = miscellaneous;
    result += getAimTimeMod(firearm.aim, aims);
    result += rangeMods[range];
    result += shooterStance[stance];
    result += findSpeedMods(movement.shooter + movement.target, range).mod;
    result += getVisibilityALM(visibility);
    result += getSituationALM(situation, stance, aims);
    setAlm(result);
  }, [state]);

  const almButtons = [
    {
      text: 'Range',
      key: 'range',
      value: state.range,
    },
    {
      text: 'Shooter Stance',
      key: 'stance',
      value: state.stance,
    },
    {
      text: 'Target Size',
      key: 'target',
      value: state.target,
    },
    {
      text: 'Movement',
      key: 'movement',
      value: `Shooter:${state.movement.shooter} | Target:${state.movement.target}`,
    },
    {
      text: 'Situation',
      key: 'situation',
      value: `ALM: ${getSituationALM(state.situation, state.stance, state.aims)}`,
    },
    {
      text: 'Visibility',
      key: 'visibility',
      value: `ALM: ${getVisibilityALM(state.visibility)}`,
    },
    {
      text: 'Miscellaneous',
      key: 'miscellaneous',
      value: `ALM: ${miscellaneous}`,
    },
  ];

  return (
    <>
      <div className={styles.modalButtonWrapper}>
        {almButtons.map((button) => (
          <AlmButton
            key={button.key}
            text={button.text}
            value={button.value}
            onClick={() => setModal(button.key)}
          />
        ))}
        <Duck setDuckAlm={() => setDuckAlm} />
        <Aiming setModal={setModal} />
      </div>
      <AlmModals modal={modal} setModal={setModal} />
    </>
  );
};

Alm.propTypes = {
  setAlm: PropTypes.func.isRequired,
  setDuckAlm: PropTypes.func.isRequired,
};

export default Alm;
