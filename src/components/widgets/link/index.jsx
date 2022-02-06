import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Link = ({ href, text }) => (
  <a href={href} className={styles.link}>
    <button type="button">
      {text}
    </button>

  </a>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
};

Link.defaultProps = {
  text: '',
};

export default Link;
