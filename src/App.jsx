import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBar from './components/NavBar';
import HomePage from './components/Home';
import CreateChar from './components/CharacterGeneration';
import './App.css';

const App = ({ currentView }) => (
  <div className="App">
    <header className="App-header">
      <NavBar />
      {currentView === 'home'
        ? <HomePage />
        : null}
      {currentView === 'createChar'
        ? <CreateChar />
        : null}
    </header>
  </div>
);

App.propTypes = {
  currentView: PropTypes.string,
};

const mapStateToProps = state => ({
  currentView: state.currentView,
});

export default connect(mapStateToProps)(App);
