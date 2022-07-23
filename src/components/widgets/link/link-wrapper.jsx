import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const LinkWrapper = ({ href, children }) => {
  const onClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a href={href} className={styles.linkWrapper} onClick={onClick}>
      {children}
    </a>
  );
};

LinkWrapper.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.oneOfType(
    [PropTypes.elementType, PropTypes.object],
  ).isRequired,
};

export default LinkWrapper;
