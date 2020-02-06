import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBar from './components/NavBar';
import HomePage from './components/Home';
import CharacterGeneration from './components/CharacterGeneration';
import GameSheet from './components/GameSheet';

import './stylesheet/styles.css';
import './App.css';

export const App = ({ currentView }) => (
  <div className="App">
    <header className="App-header">
      <NavBar />
    </header>
    <div className="App-body">
      {currentView === 'home'
        && <HomePage />
      }
      {(currentView === 'createChar' || currentView === 'printRefSheet')
        && <CharacterGeneration />
      }
    </div>
    {currentView === 'printRefSheet'
    && (
      <GameSheet />
    )}
  </div>
);

App.propTypes = {
  currentView: PropTypes.string,
};

const mapStateToProps = state => ({
  currentView: state.currentView,
});

export default connect(mapStateToProps)(App);
