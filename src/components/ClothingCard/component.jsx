import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import SelectUniformModal from './modal';

import { uniformWeights } from '../../data/uniformAndArmourTypes';

import { DispatchContext } from '../App/context';
import { showModal } from '../App/actions';

import styles from './styles.module.css';

const ClothingCard = ({ uniform }) => {
  const dispatch = useContext(DispatchContext);

  return (
    <div className="card-standard">
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
            onClick={() => {
              dispatch(showModal(SelectUniformModal));
            }}
          >
            <td>{uniform}</td>
            <td>{uniformWeights[uniform]}</td>
          </tr>
        </tbody>

      </table>
    </div>
  );
};

ClothingCard.propTypes = {
  uniform: PropTypes.string.isRequired,
};

export default ClothingCard;
