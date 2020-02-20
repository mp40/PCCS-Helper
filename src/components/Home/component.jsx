import React from 'react';
import PropTypes from 'prop-types';
import BetaTemp from '../BetaTemp'; // todo delete this once at MVP

import ModifyFirearmModal from '../ModifyFirearmModal';
import {testM1911A1, testM16} from '../../helpers/testHelpers';

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
    <ModifyFirearmModal gunToModify={testM16()}/>
    {/* <BetaTemp /> */}
  </div>
);

HomePage.propTypes = {
  selectCurrentView: PropTypes.func,
};

export default HomePage;
