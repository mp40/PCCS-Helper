import React from 'react';
import PropTypes from 'prop-types';

// import styles from './styles.module.css';

const ModifyPage = ({ firearmIndex }) => (
  <div>
    Placeholder
    <p>{firearmIndex}</p>
  </div>

);

ModifyPage.propTypes = {
  firearmIndex: PropTypes.number,
};

export default ModifyPage;
