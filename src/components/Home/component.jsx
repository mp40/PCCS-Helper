import React from 'react';
import PropTypes from 'prop-types';
import BetaTemp from '../BetaTemp'; // mptodo delete this once at MVP

import './Home.css';

const HomePage = ({ viewCreateCharacter }) => (
  <div style={{ textAlign: 'center' }}>
    <h1>
      Welcome To Phoenix Command Tools
    </h1>
    <button
      type="button"
      className="buttonStandard"
      onClick={() => viewCreateCharacter('createChar')}
    >
      Create Character
    </button>
    <BetaTemp />
  </div>
);

HomePage.propTypes = {
  viewCreateCharacter: PropTypes.func.isRequired,
};

export default HomePage;
