import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';

import { DispatchContext } from '../App/context';
import { showModal } from '../App/actions';

import NameCardModal from './modal';

import styles from './styles.module.css';

const NameCard = ({ name }) => {
  const dispatch = useContext(DispatchContext);

  return (
    <div className={`card-standard ${styles.wrapper}`}>
      <div>Name</div>
      <button
        type="button"
        className={`button-clickable-item-row ${name.length ? '' : styles.empty}`}
        onClick={() => {
          dispatch(showModal(NameCardModal));
        }}
      >
        {name}
      </button>

    </div>
  );
};
NameCard.propTypes = {
  name: PropTypes.string,
};

NameCard.defaultProps = {
  name: '',
};

export default NameCard;
