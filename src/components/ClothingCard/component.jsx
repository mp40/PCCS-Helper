import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SelectUniformModal from './modal';

import { uniformWeights } from '../../data/uniformAndArmourTypes';

import styles from './styles.module.css';

const ClothingCard = ({ uniform, changeUniform }) => {
  const [showSelectModal, setShowSelectModal] = useState(false);

  const handleChangeUniform = (newUniform) => {
    changeUniform(newUniform);
    setShowSelectModal(false);
  };

  return (
    <div className="--card">
      <table className={styles.table}>

        <thead>
          <tr>
            <th className="--tableHeading">Uniform</th>
            <th className="--tableValue">lbs</th>
          </tr>
        </thead>

        <tbody>
          <tr
            className="--selectableRow"
            onClick={() => setShowSelectModal(true)}
          >
            <td>{uniform}</td>
            <td>{uniformWeights[uniform]}</td>
          </tr>
        </tbody>

      </table>
      {showSelectModal && (
      <SelectUniformModal
        handleChangeUniform={handleChangeUniform}
        setShowSelectModal={setShowSelectModal}
      />
      )}
    </div>
  );
};

ClothingCard.propTypes = {
  changeUniform: PropTypes.func,
  uniform: PropTypes.string.isRequired,
};

export default ClothingCard;
