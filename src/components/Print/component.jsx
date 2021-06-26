import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Print = ({ selectCurrentView }) => (
  <button aria-label="print" type="button" className={styles.icon} onClick={() => selectCurrentView('printRefSheet')} />
);

Print.propTypes = {
  selectCurrentView: PropTypes.func,
};

export default Print;
