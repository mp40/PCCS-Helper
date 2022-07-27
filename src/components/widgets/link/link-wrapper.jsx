import React from 'react';
import PropTypes from 'prop-types';

import { onClick } from './shared';

import styles from './styles.module.css';

const LinkWrapper = ({ href, children }) => (
  <a href={href} className={styles.linkWrapper} onClick={(e) => onClick(e, href)}>
    {children}
  </a>
);

LinkWrapper.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.oneOfType(
    [PropTypes.elementType, PropTypes.object],
  ).isRequired,
};

export default LinkWrapper;
