import React from 'react';
import PropTypes from 'prop-types';

import HomePage from '../Home';
import CharacterGeneration from '../CharacterGeneration';
import LoadedCharacter from '../LoadedCharacter';
import Reset from '../Reset';

import FourOhFour from './FourOhFour';

const Router = ({ signedIn }) => {
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    // define callback as separate function so it can be removed later with cleanup function
    const onLocationChange = () => {
      // update path state to current window URL
      setCurrentPath(window.location.pathname);
    };

    // listen for popstate event
    window.addEventListener('popstate', onLocationChange);

    // clean up event listener
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  switch (currentPath) {
    case '/':
      return <HomePage />;
    case '/edit':
      return <CharacterGeneration signedIn={signedIn} />;
    case '/use':
      return <LoadedCharacter />;
    case '/reset':
      return <Reset />;
    default:
      return <FourOhFour />;
  }
};

Router.propTypes = {
  signedIn: PropTypes.bool,
};

export default Router;
