import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Link = ({ href, text, external }) => {
  const onClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

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
    <a href={href} className={styles.link} onClick={onClick}>
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
