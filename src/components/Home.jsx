import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectCurrentView } from '../actions';
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

const mapStateToProps = state => ({
  currentView: state.currentView,
  totalWeight: state.totalWeight,
  gear: state.gear,
});

export default connect(mapStateToProps, { selectCurrentView })(HomePage);
