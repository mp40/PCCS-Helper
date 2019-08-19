import React from 'react';
import PropTypes from 'prop-types';
import BetaTemp from '../BetaTemp'; // todo delete this once at MVP
import './Home.css';

import GameSheet from '../GameSheet';
// import { testFAMAS } from '../../helpers/testHelpers';

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
    {/* <BetaTemp /> */}
    <GameSheet />
  </div>
);

HomePage.propTypes = {
  selectCurrentView: PropTypes.func,
};

export default HomePage;
