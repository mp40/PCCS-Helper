import React from 'react';
import GameSheet from '../GameSheet';

import { DispatchContext } from '../App/context';
import { showModal } from '../App/actions';

import styles from './styles.module.css';

const Print = () => {
  const dispatch = React.useContext(DispatchContext);

  return (
    <button
      aria-label="print"
      type="button"
      className={styles.icon}
      onClick={() => dispatch(showModal(GameSheet))}
    />
  );
};

export default Print;
