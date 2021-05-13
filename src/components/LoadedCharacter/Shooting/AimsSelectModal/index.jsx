import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const AimsSelectModal = ({ aims, maxAims, setAims, setModal }) => {
  const handleClick = (newAims) => {
    setAims(newAims);
    setModal(false);
  };

  return (
    <>
      <div className="--modal" />
      <div className={`--card ${styles.card}`}>
        {[...Array(maxAims).keys()].map((key) => (
          <button className={aims === key + 1 ? styles.selected : ''} type="button" key={key} onClick={() => handleClick(key + 1)}>
            {key + 1}
          </button>
        ))}
      </div>
    </>
  );
};

AimsSelectModal.propTypes = {
  aims: PropTypes.number.isRequired,
  maxAims: PropTypes.number.isRequired,
  setAims: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
};

export default AimsSelectModal;
