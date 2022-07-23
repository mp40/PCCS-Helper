import React from 'react';
import PropTypes from 'prop-types';

import HomePage from '../pages/home';
import EditPage from '../pages/edit';
import UsePage from '../pages/use';
import ResetPage from '../pages/reset';
import ModifyPage from '../pages/modify';

import FourOhFourPage from '../pages/four-oh-four';

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

  // mptodo
  console.log('PATH >', currentPath);

  if (currentPath === '/') {
    return <HomePage />;
  }

  if (currentPath === '/edit') {
    return <EditPage signedIn={signedIn} />;
  }

  /**
  * Regex notes
  * ^ -> start of string
  * $ -> end of string
  * \/ - > "/" with escape character
  * [0-9] -> digit between 0 and 9
  */
  if (currentPath.match(/^\/modify\/[0-9]$/)) {
    const firearmIndex = currentPath.slice(-1);
    return <ModifyPage firearmIndex={Number(firearmIndex)} />;
  }

  if (currentPath === '/use') {
    return <UsePage />;
  }

  if (currentPath === '/reset') {
    return <ResetPage />;
  }

  return <FourOhFourPage />;
};

Router.propTypes = {
  signedIn: PropTypes.bool,
};

export default Router;
