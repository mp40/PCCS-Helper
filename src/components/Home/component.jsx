import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';

const HomePage = props => (
  <div style={{ textAlign: 'center' }}>
    <h1>
            Welcome To Phoenix Command Tools
    </h1>
    <button
      type="button"
      id="activateCreateChar"
      className="buttonStandard"
      onClick={() => props.selectCurrentView('createChar')}
    >
        Create Character
    </button>
  </div>
);

HomePage.propTypes = {
  selectCurrentView: PropTypes.func,
};

export default HomePage;
