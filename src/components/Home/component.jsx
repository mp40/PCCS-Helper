import React from 'react';
import PropTypes from 'prop-types';
import BetaTemp from '../BetaTemp'; // mptodo delete this once at MVP

import SelectLauncherModal from '../SelectLauncherModal';

import './Home.css';

const HomePage = ({ selectCurrentView }) => (
  <div style={{ textAlign: 'center' }}>
    <h1>
            Welcome To Phoenix Command Tools
    </h1>
    <button
      type="button"
      id="activateCreateChar"
      className="buttonStandard"
      onClick={() => selectCurrentView('createChar')}
    >
        Create Character
    </button>
    <SelectLauncherModal />
    <BetaTemp />
  </div>
);

HomePage.propTypes = {
  selectCurrentView: PropTypes.func,
};

export default HomePage;
