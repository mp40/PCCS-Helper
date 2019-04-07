import React from 'react';
import './Home.css'

function HomePage(props) {

  return (
    <div style={{textAlign: 'center'}}>
        <h1>
            Welcome To Phoenix Command Tools
        </h1>
      <button  id="activateCreateChar" className="buttonStandard" onClick={props.setDisplay.bind(this, "createChar")}>
        Create Character
      </button>
    </div>
  );
};

export default HomePage;