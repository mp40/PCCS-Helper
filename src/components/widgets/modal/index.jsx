import React from 'react';
import PropTypes from 'prop-types';

import { DispatchContext } from '../../App/context';
import { showModal } from '../../App/actions';

import styles from './styles.module.css';

const Modal = ({ Component }) => {
  const dispatch = React.useContext(DispatchContext);
  return (
    <>
      <div className={styles.background} />
      <Component closeModal={() => dispatch(showModal(false))} />
    </>
  );
};

Modal.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default Modal;
