import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const FireSelector = ({ single, selector, rof, setRof }) => {
  const buttons = [
    {
      key: 'Single',
      available: single,
    },
    {
      key: '3RB',
      available: selector.includes('**'),
    },
    {
      key: 'Auto',
      available: /\*[0-9]/.test(selector),
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.selector}>
        {buttons.map((button) => (
          <div key={button.key}>
            <button type="button" onClick={() => setRof(button.key)}>{button.key}</button>
            {button.available === false && (
              <div className={styles.screen} />
            )}
          </div>
        ))}
        <div className={`${styles.switchHub} ${styles[rof]}`} />
      </div>
    </div>
  );
};

FireSelector.propTypes = {
  single: PropTypes.bool.isRequired,
  selector: PropTypes.string.isRequired,
  rof: PropTypes.string.isRequired,
  setRof: PropTypes.func.isRequired,
};

export default FireSelector;
