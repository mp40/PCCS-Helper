import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const KeyPadModal = ({ keyText, setSelection, selected }) => (
  <>
    <div className="modal-background" />
    <div className={`card-standard ${styles.card}`}>
      {keyText.map((text) => (
        <button
          type="button"
          key={text}
          className={text === selected ? styles.selected : ''}
          onClick={() => setSelection(text)}
        >
          {text}
        </button>
      ))}
    </div>
  </>
);

KeyPadModal.propTypes = {
  keyText: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  setSelection: PropTypes.func.isRequired,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default KeyPadModal;
