import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Header from '../header';
import HomePage from '../Home';
import CharacterGeneration from '../CharacterGeneration';
import GameSheet from '../GameSheet';
import LoadedCharacter from '../LoadedCharacter';
import Reset from '../Reset';

import { fetchSignedIn, fetchGetCharacters } from '../../fetch';

import '../../stylesheet/styles.css';
import './App.css';

function App({ currentView, updateSavedCharacters }) {
  const [signedIn, setSignedIn] = useState(false);

  React.useEffect(() => {
    const checkUserSignedIn = async () => {
      const res = await fetchSignedIn();

      if (res.message === 'Signed In') {
        setSignedIn(true);

        let savedCharacters = JSON.parse(sessionStorage.getItem('savedCharacters'));

        if (!savedCharacters) {
          const getSavedCharactersResponse = await fetchGetCharacters();
          savedCharacters = getSavedCharactersResponse.characters;
          sessionStorage.setItem('savedCharacters', JSON.stringify(savedCharacters));
        }

        updateSavedCharacters(savedCharacters);
      }
    };

    checkUserSignedIn();
  }, [updateSavedCharacters]);

  const handleSetSignedIn = () => {
    setSignedIn(!signedIn);
  };

  return (
    <>

      <div className="App">
        <header className="App-header">
          <Header signedIn={signedIn} handleSetSignedIn={handleSetSignedIn} />
        </header>
        {window.location.pathname === '/' && (
          <div className="App-body">
              {currentView === 'home' && <HomePage />}
              {(currentView === 'createChar' || currentView === 'printRefSheet') && (
              <CharacterGeneration signedIn={signedIn} />
              )}
              {currentView === 'playCharacter' && <LoadedCharacter />}
          </div>
        )}
        {window.location.pathname === '/passwordReset' && (
        <Reset />
        )}
      </div>
      {currentView === 'printRefSheet' && <GameSheet />}
    </>
  );
}

App.propTypes = {
  currentView: PropTypes.string,
  updateSavedCharacters: PropTypes.func.isRequired,
};

export default App;
