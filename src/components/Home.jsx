import React from 'react';
import './Home.css'


import { connect } from 'react-redux';
import { selectCurrentView } from '../actions'

function HomePage(props) {
  return (
    <div style={{textAlign: 'center'}}>
        <h1>
            Welcome To Phoenix Command Tools
        </h1>
      <button  id="activateCreateChar" className="buttonStandard" onClick={()=>props.selectCurrentView('createChar')}>
        Create Character
      </button>
    </div>
  );
};


const mapStateToProps = (state) => {
  return ({ currentView: state.currentView });
}

export default connect(mapStateToProps, { selectCurrentView })(HomePage)
// export default HomePage;