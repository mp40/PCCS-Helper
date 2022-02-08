import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';

import reducer from './reducer';
import { initialState } from './data';

import Router from '../Router';

import Header from '../header';

import { fetchSignedIn, fetchGetCharacters } from '../../fetch';

import { DispatchProvider } from './context';

import Modal from '../widgets/modal';

import '../../stylesheet/styles.css';
import './App.css';

function App({ updateSavedCharacters }) {
  const [state, dispatch] = useReducer(reducer, initialState);
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
    <DispatchProvider dispatch={dispatch}>
      <div className="App">
        <Header signedIn={signedIn} handleSetSignedIn={handleSetSignedIn} />
        <Router signedIn={signedIn} />
        {state.activeModal && (
          <Modal Component={state.activeModal} />
        )}
      </div>
    </DispatchProvider>
  );
}

App.propTypes = {
  updateSavedCharacters: PropTypes.func.isRequired,
};

export default App;
