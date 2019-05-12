import React from 'react';
import { connect } from 'react-redux';
import { selectCurrentView } from '../actions'
import './Home.css'

export function HomePage(props) {
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
  return ({ 
    currentView: state.currentView,
    totalWeight: state.totalWeight,
    gear: state.gear
   });
}

export default connect(mapStateToProps, { selectCurrentView })(HomePage)