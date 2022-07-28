import React from 'react';
import PropTypes from 'prop-types';

import { onClick } from './shared';

import styles from './styles.module.css';

const Link = ({ href, text, external }) => {
  if (external) {
    return (
      <a href={href} className={styles.link} target="_blank" rel="noreferrer">
        <button type="button">
          {text}
        </button>
      </a>
    );
  }

  return (
    <a href={href} className={styles.link} onClick={(e) => onClick(e, href)}>
      <button type="button">
        {text}
      </button>
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
  external: PropTypes.bool,
};

Link.defaultProps = {
  text: '',
};

export default Link;
