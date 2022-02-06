import React from 'react';
import PropTypes from 'prop-types';

import HomePage from '../Home';
import CharacterGeneration from '../CharacterGeneration';
import LoadedCharacter from '../LoadedCharacter';
import Reset from '../Reset';

const Body = ({ signedIn }) => (
  <div className="App-body">
    {window.location.pathname === '/' && <HomePage />}
    {window.location.pathname === '/edit' && <CharacterGeneration signedIn={signedIn} />}
    {window.location.pathname === '/use' && <LoadedCharacter />}
    {window.location.pathname === '/reset' && <Reset />}
  </div>
);

Body.propTypes = {
  signedIn: PropTypes.bool,
};

export default Body;
