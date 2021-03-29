import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Header from '../header';
import HomePage from '../Home';
import CharacterGeneration from '../CharacterGeneration';
import GameSheet from '../GameSheet';
import LoadedCharacter from '../LoadedCharacter';

import { fetchSignedIn, fetchGetCharacters } from '../../fetch';

import '../../stylesheet/styles.css';
import './App.css';

const App = ({ currentView, updateSavedCharacters }) => {
  const [signedIn, setSignedIn] = useState(false);

  React.useEffect(() => {
    const checkUserSignedIn = async () => {
      const res = await fetchSignedIn();

      if (res.message === 'Signed In') {
        setSignedIn(true);

        let savedCharacters = JSON.parse(sessionStorage.getItem('savedCharacters'));

        if (savedCharacters === null) {
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
    <div className="App">
      <header className="App-header">
        <Header signedIn={signedIn} handleSetSignedIn={handleSetSignedIn} />
      </header>
      <div className="App-body">
        {currentView === 'home' && <HomePage />}
        {(currentView === 'createChar' || currentView === 'printRefSheet') && (
          <CharacterGeneration />
        )}
      </div>
      {currentView === 'printRefSheet' && <GameSheet />}
      {currentView === 'playCharacter' && <LoadedCharacter />}
    </div>
  );
};

App.propTypes = {
  currentView: PropTypes.string,
  updateSavedCharacters: PropTypes.func.isRequired,
};

export default App;
