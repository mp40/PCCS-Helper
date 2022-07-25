import React from 'react';
import PropTypes from 'prop-types';

import ModifyCard from '../../components/modify';

import styles from './styles.module.css';

const ModifyPage = ({ firearmIndex }) => (
  <div className={styles.wrapper}>
    <ModifyCard firearmIndex={firearmIndex} />
  </div>

);

ModifyPage.propTypes = {
  firearmIndex: PropTypes.number,
};

export default ModifyPage;
